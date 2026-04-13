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
    if (sanityCourses && sanityCourses.length > 0) {
      courses = sanityCourses;
    } else {
      courses = allCourses as CourseListing[];
    }
  } catch {
    // Fallback sur les données statiques si Sanity est indisponible
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
