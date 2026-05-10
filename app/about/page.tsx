import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Goldenlining Solution",
  description:
    "Learn about Goldenlining Solution — our story, mission, values, and the team behind Australia's premium digital transformation agency.",
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="Our Story"
        title="Digital Excellence With"
        highlight="Human Creativity"
        description="Goldenlining Solution was built with one mission — to help businesses transform ideas into world-class digital experiences that drive real, measurable growth."
      />
      <About />
      <WhyChooseUs />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
