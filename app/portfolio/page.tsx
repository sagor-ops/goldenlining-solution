import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Goldenlining Solution",
  description:
    "Browse our curated portfolio of premium digital projects — websites, branding, ecommerce, and marketing campaigns delivered for ambitious businesses worldwide.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="Our Work"
        title="Selected"
        highlight="Projects"
        description="A curated showcase of digital experiences we have crafted for ambitious businesses across Australia and globally — each one built to the highest standard."
      />
      <Portfolio />
      <Footer />
    </main>
  );
}
