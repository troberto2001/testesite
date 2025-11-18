import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import Footer from "@/components/layout/footer";
import CoverageSection from "@/components/sections/coverage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CoverageSection />
      </main>
      <Footer />
    </div>
  );
}
