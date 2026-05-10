import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Goldenlining Solution",
  description:
    "Get in touch with Goldenlining Solution. Book a free consultation, discuss your project, or reach out to our team directly.",
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
