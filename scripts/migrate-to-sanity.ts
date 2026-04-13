/**
 * Script de migration des cours vers Sanity CMS
 * Usage: npx ts-node --skip-project scripts/migrate-to-sanity.ts
 *
 * Pré-requis: SANITY_API_TOKEN dans .env.local (token Editor depuis sanity.io/manage)
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

// Charger les variables d'environnement
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_TOKEN = process.env.SANITY_API_TOKEN;

if (!PROJECT_ID) {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID manquant dans .env.local");
  process.exit(1);
}
if (!API_TOKEN) {
  console.error("❌ SANITY_API_TOKEN manquant dans .env.local");
  console.error(
    "   → Allez sur https://www.sanity.io/manage/personal/project/" +
      PROJECT_ID +
      "/api#tokens"
  );
  console.error("   → Créez un token 'Editor', copiez-le et ajoutez-le dans .env.local");
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  token: API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Données courses-data.ts (inlinées pour l'exécution du script) ─────────

type Course = {
  title: string;
  desc: string;
  price: string;
  rating: number;
  reviews: number;
  img: string;
  badge?: string;
  type: "Cours" | "Parcours";
  href: string;
  category: string;
};

type CourseDetail = {
  slug: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  shopUrl: string;
  enrollUrl?: string;
  tagline?: string;
  totalChapters?: number;
  totalLessons?: number;
  learns?: string[];
  chapters?: string[];
  benefits?: { title: string; desc: string }[];
};

// Importer les données depuis les fichiers existants
const { allCourses } = require("../lib/courses-data") as { allCourses: Course[] };
const { COURSES } = require("../lib/course-details") as { COURSES: CourseDetail[] };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getSlugFromHref(href: string): string {
  return href.split("/").pop() || "";
}

/** Mappe la catégorie de courses-data.ts vers celle du schéma Sanity */
function mapCategory(cat: string): string {
  const mapping: Record<string, string> = {
    "intelligence-artificielle": "intelligence-artificielle",
    "transformation-digitale-4-0": "transformation-digitale",
    "transformation-digitale": "transformation-digitale",
    dirigeant: "parcours-dirigeant",
    "management-commercial-4-0": "management-commercial-4-0",
    "management-d-equipe": "management-d-equipe",
    "management-du-capital-humain": "capital-humain-rh",
    "developpement-personnel": "developpement-personnel",
    entrepreneuriat: "developpement-personnel",
    "vendeur-elite-expert-4-0": "management-commercial-4-0",
    "Packs Phares": "parcours-dirigeant",
    "Management d'Équipe": "management-d-equipe",
    "Parcours Dirigeant": "parcours-dirigeant",
    "Modules Certifiants": "modules-certifiants",
    "Développement Personnel": "developpement-personnel",
    "Transformation Digitale": "transformation-digitale",
    "Intelligence Artificielle": "intelligence-artificielle",
  };
  return mapping[cat] || "modules-certifiants";
}

/** Déduplique les cours par slug */
function deduplicateCourses(courses: Course[]): Course[] {
  const seen = new Set<string>();
  return courses.filter((c) => {
    const slug = getSlugFromHref(c.href);
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

// ─── Migration ────────────────────────────────────────────────────────────────

async function migrate() {
  console.log(`\n🚀 Démarrage de la migration vers Sanity (projet: ${PROJECT_ID})\n`);

  // Dédupliquer allCourses
  const uniqueCourses = deduplicateCourses(allCourses);
  console.log(`📦 ${uniqueCourses.length} cours uniques à migrer\n`);

  // Construire un index des détails par slug
  const detailsMap = new Map<string, CourseDetail>();
  for (const d of COURSES) {
    detailsMap.set(d.slug, d);
  }

  let success = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < uniqueCourses.length; i++) {
    const course = uniqueCourses[i];
    const slug = getSlugFromHref(course.href);
    const detail = detailsMap.get(slug);

    // Construire le document Sanity
    const doc: Record<string, unknown> = {
      _type: "course",
      _id: `course-${slug}`,
      title: detail?.title || course.title,
      slug: { _type: "slug", current: slug },
      desc: course.desc,
      tagline: detail?.tagline || course.desc,
      price: course.price,
      originalPrice: detail?.originalPrice,
      rating: course.rating,
      reviews: course.reviews,
      imageUrl: course.img,
      badge: course.badge,
      type: course.type,
      category: mapCategory(course.category),
      shopUrl: detail?.shopUrl,
      enrollUrl: detail?.enrollUrl,
      totalChapters: detail?.totalChapters,
      totalLessons: detail?.totalLessons,
      learns: detail?.learns,
      chapters: detail?.chapters,
      benefits: detail?.benefits?.map((b, idx) => ({
        _key: `benefit-${idx}`,
        ...b,
      })),
      order: i,
    };

    // Retirer les champs undefined
    for (const key of Object.keys(doc)) {
      if (doc[key] === undefined) delete doc[key];
    }

    try {
      await client.createOrReplace(doc as Parameters<typeof client.createOrReplace>[0]);
      console.log(`  ✅ [${i + 1}/${uniqueCourses.length}] ${course.title}`);
      success++;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ❌ [${i + 1}/${uniqueCourses.length}] ${course.title}: ${message}`);
      errors++;
    }

    // Petite pause pour ne pas dépasser le rate limit Sanity
    await new Promise((r) => setTimeout(r, 50));
  }

  // Migrer aussi les cours qui sont dans COURSES mais pas dans allCourses
  let extra = 0;
  for (const detail of COURSES) {
    if (detailsMap.has(detail.slug) && !uniqueCourses.find((c) => getSlugFromHref(c.href) === detail.slug)) {
      const doc: Record<string, unknown> = {
        _type: "course",
        _id: `course-${detail.slug}`,
        title: detail.title,
        slug: { _type: "slug", current: detail.slug },
        desc: detail.tagline || detail.title,
        tagline: detail.tagline,
        price: `$${Math.round(detail.price / 655)}`,
        originalPrice: detail.originalPrice,
        rating: 4.5,
        reviews: 0,
        category: mapCategory(detail.category),
        shopUrl: detail.shopUrl,
        enrollUrl: detail.enrollUrl,
        totalChapters: detail.totalChapters,
        totalLessons: detail.totalLessons,
        learns: detail.learns,
        chapters: detail.chapters,
        benefits: detail.benefits?.map((b, idx) => ({
          _key: `benefit-${idx}`,
          ...b,
        })),
        order: uniqueCourses.length + extra,
      };
      for (const key of Object.keys(doc)) {
        if (doc[key] === undefined) delete doc[key];
      }
      try {
        await client.createOrReplace(doc as Parameters<typeof client.createOrReplace>[0]);
        console.log(`  ✅ [extra] ${detail.title}`);
        extra++;
      } catch {
        // Pas bloquant
      }
    }
  }

  console.log(`\n─────────────────────────────────────────`);
  console.log(`✅ Succès : ${success}`);
  if (extra) console.log(`➕ Extras : ${extra}`);
  if (errors) console.log(`❌ Erreurs : ${errors}`);
  console.log(`\n🎉 Migration terminée !`);
  console.log(`   → Studio : http://localhost:3000/studio`);
  console.log(`   → Projet : https://www.sanity.io/manage/personal/project/${PROJECT_ID}\n`);
}

migrate().catch((err) => {
  console.error("Migration échouée :", err);
  process.exit(1);
});
