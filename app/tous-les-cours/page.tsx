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
    // Fusion : Sanity + statique, dédupliqués par href (Sanity prioritaire)
    const staticList = allCourses as CourseListing[];
    const sanityList = (sanityCourses ?? []) as CourseListing[];
    const seen = new Set(sanityList.map((c) => c.href));
    courses = [...sanityList, ...staticList.filter((c) => !seen.has(c.href))];
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
