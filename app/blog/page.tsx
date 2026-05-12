import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Marketing Blog — SEO, Web Design & Growth Tips | Goldenlining Solution",
  description:
    "Expert insights on SEO, web design, Google Ads, AI search visibility, branding & digital growth. Free strategies from Goldenlining Solution's team of specialists.",
  keywords: ["SEO tips Australia", "web design blog", "digital marketing insights", "Google Ads tips", "AI SEO guide"],
  alternates: { canonical: "https://goldenlining.com.au/blog" },
  openGraph: {
    title: "Digital Marketing Blog | Goldenlining Solution",
    description: "Free expert insights on SEO, web design, Google Ads & digital growth from Australia's premium digital agency.",
    url: "https://goldenlining.com.au/blog",
  },
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
