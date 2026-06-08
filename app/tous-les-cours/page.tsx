import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allCourses } from "@/lib/courses-data";
import CourseListClient, { type CourseListing } from "@/components/CourseListClient";
import { getAllCoursesSanity } from "@/sanity/lib/queries";
import { SITE_URL, keywordsForCategory } from "@/lib/seo";

export const revalidate = 60; // ISR : revalide toutes les 60 secondes
export const metadata: Metadata = {
  title: "Tous les cours : formations en management, leadership, IA & dirigeants",
  description:
    "Explorez plus de 100 formations en ligne Managersity : management d'équipe, leadership, intelligence artificielle, développement personnel et parcours dirigeants. Certifiantes, accessibles partout en Afrique francophone, paiement Mobile Money.",
  keywords: keywordsForCategory("Parcours Dirigeant", ["catalogue de formations", "cours management en ligne", "formations certifiantes"]),
  alternates: { canonical: `${SITE_URL}/tous-les-cours` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Managersity",
    url: `${SITE_URL}/tous-les-cours`,
    title: "Tous les cours Managersity — Management, Leadership & IA",
    description:
      "Plus de 100 formations certifiantes en management, leadership et IA pour managers et dirigeants en Afrique francophone.",
  },
};


export default async function TousLesCoursPage() {
  let courses: CourseListing[] = [];

  const staticList = allCourses as CourseListing[];

  try {
    const sanityCourses = await getAllCoursesSanity();
    const sanityList = (sanityCourses ?? []) as CourseListing[];
    const staticByHref = new Map(staticList.map((c) => [c.href, c]));

    // Sanity prioritaire pour les champs editoriaux, MAIS la categorie du code
    // statique fait foi (pour que les recategorisations recentes s'appliquent
    // sans migration manuelle dans le Studio Sanity).
    const merged = sanityList.map((c) => {
      const fallback = staticByHref.get(c.href);
      if (!fallback) return c;
      return {
        ...c,
        category: fallback.category || c.category,
        desc: c.desc || fallback.desc,
        img: fallback.img || c.img,
        price: c.price || fallback.price,
      };
    });

    const seen = new Set(merged.map((c) => c.href));
    const extras = staticList.filter((c) => !seen.has(c.href));
    courses = [...merged, ...extras];

    // Garantie : pour toute catégorie présente dans les données statiques
    // mais absente de la fusion, on réinjecte les cours statiques correspondants
    // (cas où Sanity écrase sans catégorie).
    const categoriesInMerged = new Set(
      courses.map((c) => (c.category || "").toLowerCase()).filter(Boolean)
    );
    const categoriesInStatic = new Set(
      staticList.map((c) => c.category.toLowerCase())
    );

    for (const cat of categoriesInStatic) {
      if (!categoriesInMerged.has(cat)) {
        const toAdd = staticList.filter((c) => c.category.toLowerCase() === cat);
        const addHrefs = new Set(toAdd.map((c) => c.href));
        courses = [...courses.filter((c) => !addHrefs.has(c.href)), ...toAdd];
      }
    }

    // dedup final par href
    const dedup = new Map<string, CourseListing>();
    courses.forEach((c) => dedup.set(c.href, c));
    courses = Array.from(dedup.values());

    // Dédup par titre : certains cours existent en double (ancien slug Sanity +
    // slug statique), ce qui échappe au dédoublonnage par href. On conserve la
    // version présente dans les données statiques (prix officiel, ex. 14 900).
    const normTitle = (s: string) =>
      (s || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "")
        .trim();
    const byTitle = new Map<string, CourseListing>();
    for (const c of courses) {
      const key = normTitle(c.title);
      const existing = byTitle.get(key);
      if (!existing) {
        byTitle.set(key, c);
      } else if (staticByHref.has(c.href) && !staticByHref.has(existing.href)) {
        byTitle.set(key, c);
      }
    }
    courses = Array.from(byTitle.values());
  } catch {
    courses = staticList;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <CourseListClient courses={courses} />
      </main>
      <Footer />
    </>
  );
}
