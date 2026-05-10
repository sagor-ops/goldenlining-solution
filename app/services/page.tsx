import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Services | Web Design, SEO, Branding & More | Goldenlining Solution",
  description:
    "Explore Goldenlining Solution's premium digital services — website design, WordPress, ecommerce, SEO, AI search visibility, Google Ads, logo design, branding, and growth marketing. Results-driven strategies for serious businesses.",
  keywords: ["web design services", "SEO services", "branding agency", "Google Ads management", "ecommerce development", "logo design", "digital marketing"],
};

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="What We Offer"
        title="Premium Digital"
        highlight="Services"
        description="Every solution we deliver is built to the highest standard — combining strategic thinking, creative excellence, and technical precision to drive real business results."
      />
      <Services />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
