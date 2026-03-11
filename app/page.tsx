import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import CoursesGrid from "@/components/CoursesGrid";
import BannerCTA from "@/components/BannerCTA";
import Partners from "@/components/Partners";
import MissionBanner from "@/components/MissionBanner";
import MasterCourses from "@/components/MasterCourses";
import CertificationBanner from "@/components/CertificationBanner";
import Categories from "@/components/Categories";
import FormatBanner from "@/components/FormatBanner";
import MobileMoney from "@/components/MobileMoney";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ValueProp />
      <CoursesGrid />
      <BannerCTA />
      <Partners />
      <MissionBanner />
      <MasterCourses />
      <CertificationBanner />
      <Categories />
      <FormatBanner />
      <MobileMoney />
      <FinalCTA />
      <Footer />
    </main>
  );
}
