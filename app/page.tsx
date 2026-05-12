import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goldenlining Solution | #1 Web Design & SEO Agency — Australia",
  description:
    "Award-winning web design, SEO & digital marketing agency in Australia. We build high-performance websites, run Google Ads & grow brands. 600+ projects delivered. Free consultation.",
  alternates: { canonical: "https://goldenlining.com.au" },
  openGraph: {
    title: "Goldenlining Solution | Web Design & SEO Agency — Australia",
    description: "Award-winning web design, SEO, Google Ads & branding. 600+ projects. 98% client satisfaction. Australia & Global.",
    url: "https://goldenlining.com.au",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Goldenlining Solution — Premium Digital Agency" }],
  },
};

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsBar from "@/components/StatsBar";
import PortfolioScroll from "@/components/PortfolioScroll";
import ContactStrip from "@/components/ContactStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function HomePage() {
  return (
    <main>
      <LoadingScreen />
      <Navigation />
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <StatsBar />
      <PortfolioScroll />
      <ContactStrip />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
