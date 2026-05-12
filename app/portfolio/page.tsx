import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio — 600+ Premium Digital Projects | Goldenlining Solution",
  description:
    "Browse 600+ premium digital projects — websites, ecommerce stores, branding, SEO & Google Ads campaigns delivered for businesses across Australia, UK, NZ & beyond.",
  keywords: ["web design portfolio", "digital agency portfolio", "website examples Australia", "ecommerce portfolio"],
  alternates: { canonical: "https://goldenlining.com.au/portfolio" },
  openGraph: {
    title: "Portfolio — 600+ Premium Digital Projects | Goldenlining Solution",
    description: "600+ premium websites, ecommerce, branding & SEO projects. See our work for businesses across Australia and globally.",
    url: "https://goldenlining.com.au/portfolio",
  },
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
