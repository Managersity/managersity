import { sanityClient } from "./client";

// Fetch all courses ordered by `order` field
export async function getAllCoursesSanity() {
  return sanityClient.fetch(
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
}

// Fetch a single course by slug (full detail)
export async function getCourseSanity(slug: string) {
  return sanityClient.fetch(
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
}

// Fetch courses by category
export async function getCoursesByCategory(categorySlug: string) {
  return sanityClient.fetch(
    `*[_type == "course" && category == $categorySlug] | order(order asc, _createdAt desc) {
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
    { categorySlug }
  );
}
