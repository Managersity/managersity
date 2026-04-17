import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allCourses } from "@/lib/courses-data";
import CourseListClient, { type CourseListing } from "@/components/CourseListClient";
import { getAllCoursesSanity } from "@/sanity/lib/queries";

export const revalidate = 60; // ISR : revalide toutes les 60 secondes

export default async function TousLesCoursPage() {
  let courses: CourseListing[] = [];

  const staticList = allCourses as CourseListing[];

  try {
    const sanityCourses = await getAllCoursesSanity();
    const sanityList = (sanityCourses ?? []) as CourseListing[];
    const staticByHref = new Map(staticList.map((c) => [c.href, c]));

    // Sanity prioritaire, mais on enrichit avec les champs statiques manquants
    const merged = sanityList.map((c) => {
      const fallback = staticByHref.get(c.href);
      if (!fallback) return c;
      return {
        ...c,
        category: c.category || fallback.category,
        desc: c.desc || fallback.desc,
        img: c.img || fallback.img,
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
