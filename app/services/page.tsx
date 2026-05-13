import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"));
const ConsultationCTA = dynamic(() => import("@/components/ConsultationCTA"));
const Footer          = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Web Design, SEO, Google Ads & Branding Services | Goldenlining Solution",
  description:
    "Premium digital services: web design, WordPress, ecommerce, SEO & AI visibility, Google Ads, logo design & branding. Goldenlining Solution — results-driven agency for serious businesses across Australia & globally.",
  keywords: [
    "web design services Australia", "SEO services Australia", "Google Ads agency",
    "ecommerce website design", "WordPress web design", "branding agency",
    "logo design Australia", "digital marketing services", "AI SEO",
  ],
  alternates: { canonical: "https://goldenlining.com.au/services" },
  openGraph: {
    title: "Web Design, SEO, Google Ads & Branding | Goldenlining Solution",
    description: "Premium web design, SEO, Google Ads, ecommerce & branding services. Results-driven digital agency for ambitious businesses.",
    url: "https://goldenlining.com.au/services",
  },
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
      <ProcessTimeline />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
