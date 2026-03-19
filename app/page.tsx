import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsCategories from "@/components/SkillsCategories";
import BannerCTA from "@/components/BannerCTA";
import ValueProp from "@/components/ValueProp";
import Partners from "@/components/Partners";

import CertificationBanner from "@/components/CertificationBanner";
import MasterCourses from "@/components/MasterCourses";
import CoursesGrid from "@/components/CoursesGrid";
import FormatBanner from "@/components/FormatBanner";
import Categories from "@/components/Categories";
import MobileMoney from "@/components/MobileMoney";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <SkillsCategories />
      <BannerCTA />
      <ValueProp />
      <Partners />

      <CertificationBanner />
      <MasterCourses />
      <CoursesGrid />
      <FormatBanner />
      <Categories />
      <MobileMoney />
      <FinalCTA />
      <Footer />
    </main>
  );
}
