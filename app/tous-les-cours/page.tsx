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

    // Garantie : si aucun cours Dirigeant n'a survécu à la fusion,
    // on réinjecte ceux des données statiques.
    const hasDirigeant = courses.some((c) => (c.category || "").toLowerCase() === "dirigeant");
    if (!hasDirigeant) {
      const dirigeantStatic = staticList.filter((c) => c.category === "dirigeant");
      const existingHrefs = new Set(courses.map((c) => c.href));
      courses = [
        ...courses.filter((c) => !dirigeantStatic.some((d) => d.href === c.href)),
        ...dirigeantStatic,
      ];
      // dedup final
      const dedup = new Map<string, CourseListing>();
      courses.forEach((c) => dedup.set(c.href, c));
      courses = Array.from(dedup.values());
    }
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
