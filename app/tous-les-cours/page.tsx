import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allCourses } from "@/lib/courses-data";
import CourseListClient, { type CourseListing } from "@/components/CourseListClient";
import { getAllCoursesSanity } from "@/sanity/lib/queries";

export const revalidate = 60; // ISR : revalide toutes les 60 secondes

export default async function TousLesCoursPage() {
  let courses: CourseListing[] = [];

  try {
    const sanityCourses = await getAllCoursesSanity();
    const staticList = allCourses as CourseListing[];
    const sanityList = (sanityCourses ?? []) as CourseListing[];

    // Map des entrées statiques indexées par href pour enrichissement rapide
    const staticByHref = new Map(staticList.map((c) => [c.href, c]));

    // Fusion : Sanity prioritaire, mais on complète les champs manquants
    // (notamment `category`) avec ceux de la donnée statique si le href correspond.
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
    courses = [...merged, ...staticList.filter((c) => !seen.has(c.href))];
  } catch {
    courses = allCourses as CourseListing[];
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
