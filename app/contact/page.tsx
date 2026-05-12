import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";

const Contact = dynamic(() => import("@/components/Contact"));
const Footer  = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation | Goldenlining Solution",
  description:
    "Get in touch with Goldenlining Solution. Book your free 30-minute consultation, discuss your project, or call us at +61 480 684 500. We respond within 2 hours.",
  alternates: { canonical: "https://goldenlining.com.au/contact" },
  openGraph: {
    title: "Contact Goldenlining Solution — Free Consultation",
    description: "Book a free consultation with our digital agency. Web design, SEO, Google Ads & branding. Response within 2 hours.",
    url: "https://goldenlining.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="Get In Touch"
        title="Let's Build Something"
        highlight="Exceptional"
        description="Tell us about your project and goals. We'll respond within 2 business hours with a personalised strategy for your business."
      />
      <Contact />
      <Footer />
    </main>
  );
}
