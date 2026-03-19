import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsCategories from "@/components/SkillsCategories";
import BannerCTA from "@/components/BannerCTA";
import ValueProp from "@/components/ValueProp";
import Partners from "@/components/Partners";

import ModulesBanner from "@/components/ModulesBanner";

import MasterCourses from "@/components/MasterCourses";
import MissionSection from "@/components/MissionSection";
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
      <ModulesBanner />
      <MasterCourses />
      <MissionSection />
      <CoursesGrid />
      <FormatBanner />
      <Categories />
      <MobileMoney />
      <FinalCTA />
      <Footer />
    </main>
  );
}
