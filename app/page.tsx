import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BannerCTA from "@/components/BannerCTA";
import ValueProp from "@/components/ValueProp";
import Partners from "@/components/Partners";
import MissionBanner from "@/components/MissionBanner";
import CertificationBanner from "@/components/CertificationBanner";
import MasterCourses from "@/components/MasterCourses";
import CoursesGrid from "@/components/CoursesGrid";
import MobileMoney from "@/components/MobileMoney";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <BannerCTA />
      <ValueProp />
      <Partners />
      <MissionBanner />
      <CertificationBanner />
      <MasterCourses />
      <CoursesGrid />
      <MobileMoney />
      <Footer />
    </main>
  );
}
