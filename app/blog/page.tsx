import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Goldenlining Solution",
  description:
    "Insights, strategies, and expert thinking on digital transformation, SEO, AI search visibility, branding, and premium web design from the Goldenlining team.",
};

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="Insights & Ideas"
        title="Premium"
        highlight="Insights"
        description="Expert thinking on digital strategy, SEO, AI visibility, branding, and the future of premium digital experiences — from the Goldenlining team."
      />
      <Blog />
      <Footer />
    </main>
  );
}
