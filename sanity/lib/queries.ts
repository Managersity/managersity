import { sanityClient } from "./client";

// ─── Mapping d'anciens slugs de categorie Sanity vers les slugs canoniques ───
// Ce mapping assure que les cours existants en base (qui ont ete crees avec
// l'ancien schema) s'affichent dans les bonnes categories sans migration manuelle.
const CATEGORY_SLUG_MAP: Record<string, string> = {
  "transformation-digitale": "transformation-digitale-4-0",
  "capital-humain-rh": "management-du-capital-humain",
  "parcours-dirigeant": "dirigeant",
};

function normalizeCategory(cat: string | undefined | null): string {
  if (!cat) return "";
  return CATEGORY_SLUG_MAP[cat] ?? cat;
}

type SanityCourse = { category?: string | null; [key: string]: unknown };

function normalizeCourse<T extends SanityCourse>(course: T): T {
  return { ...course, category: normalizeCategory(course.category) };
}

// Fetch all courses ordered by `order` field
export async function getAllCoursesSanity() {
  const results = await sanityClient.fetch(
    `*[_type == "course"] | order(order asc, _createdAt desc) {
      "slug": slug.current,
      title,
      desc,
      price,
      rating,
      reviews,
      badge,
      type,
      category,
      "img": select(
        defined(image.asset) => image.asset->url,
        imageUrl
      ),
      "href": "/cours/" + slug.current,
    }`
  );
  return (results ?? []).map(normalizeCourse);
}

// Fetch a single course by slug (full detail)
export async function getCourseSanity(slug: string) {
  const result = await sanityClient.fetch(
    `*[_type == "course" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      desc,
      tagline,
      price,
      originalPrice,
      rating,
      reviews,
      badge,
      type,
      category,
      enrollUrl,
      shopUrl,
      totalChapters,
      totalLessons,
      "img": select(
        defined(image.asset) => image.asset->url,
        imageUrl
      ),
      learns,
      chapters,
      benefits,
    }`,
    { slug }
  );
  return result ? normalizeCourse(result) : null;
}

// Fetch courses by category
// Accepte aussi les anciens slugs : si on demande la nouvelle categorie, on interroge
// Sanity avec les deux valeurs (ancienne et nouvelle) pour rattraper les cours existants.
export async function getCoursesByCategory(categorySlug: string) {
  // Reverse-lookup : pour un slug canonique, retrouver l'ancien slug Sanity
  const reverseMap: Record<string, string[]> = {};
  for (const [oldSlug, newSlug] of Object.entries(CATEGORY_SLUG_MAP)) {
    if (!reverseMap[newSlug]) reverseMap[newSlug] = [];
    reverseMap[newSlug].push(oldSlug);
  }
  const slugsToQuery = [categorySlug, ...(reverseMap[categorySlug] ?? [])];

  // Regle metier : les cours IA apparaissent aussi dans Transformation Digitale 4.0
  if (categorySlug === "transformation-digitale-4-0") {
    slugsToQuery.push("intelligence-artificielle");
  }

  const results = await sanityClient.fetch(
    `*[_type == "course" && category in $slugs] | order(order asc, _createdAt desc) {
      "slug": slug.current,
      title,
      desc,
      price,
      rating,
      reviews,
      badge,
      type,
      category,
      "img": select(
        defined(image.asset) => image.asset->url,
        imageUrl
      ),
      "href": "/cours/" + slug.current,
    }`,
    { slugs: slugsToQuery }
  );
  return (results ?? []).map(normalizeCourse);
}
