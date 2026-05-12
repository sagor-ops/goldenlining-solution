import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import ServicesGlimpse from "@/components/ServicesGlimpse";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Goldenlining Solution | Premium Digital Agency Since 2017",
  description:
    "Since 2017, Goldenlining Solution has delivered 600+ premium digital projects across Australia and globally. Learn our story, mission & values.",
  alternates: { canonical: "https://goldenlining.com.au/about" },
  openGraph: {
    title: "About Goldenlining Solution | Premium Digital Agency Since 2017",
    description: "Since 2017, Goldenlining Solution has delivered 600+ digital projects globally. Learn our story, values & team.",
    url: "https://goldenlining.com.au/about",
  },
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
      <ServicesGlimpse />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
