import Hero from "@/components/home/Hero";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import TherapyShowcase from "@/components/home/TherapyShowcase";
import SpaPackages from "@/components/home/SpaPackages";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <FeaturedTreatments />
      <TherapyShowcase />
      <SpaPackages />
      <ContactSection />
    </main>
  );
}

