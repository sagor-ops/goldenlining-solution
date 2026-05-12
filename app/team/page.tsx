import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";

const Team   = dynamic(() => import("@/components/Team"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Our Team | Web Designers, Developers & SEO Experts | Goldenlining Solution",
  description:
    "Meet the team behind Goldenlining Solution — experienced web designers, developers, SEO specialists & digital strategists delivering premium results for clients worldwide.",
  alternates: { canonical: "https://goldenlining.com.au/team" },
  openGraph: {
    title: "Our Team | Goldenlining Solution",
    description: "Meet our web designers, developers, SEO experts & brand strategists — the team behind 600+ successful digital projects.",
    url: "https://goldenlining.com.au/team",
  },
};

export default function TeamPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="The People"
        title="Exceptional"
        highlight="Minds"
        description="Our team of specialists brings deep expertise, creative vision, and relentless drive to every project — united by a shared commitment to premium execution."
      />
      <Team />
      <Footer />
    </main>
  );
}
