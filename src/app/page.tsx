import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import SpaPackages from "@/components/home/SpaPackages";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <FeaturedTreatments />
        <SpaPackages />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
