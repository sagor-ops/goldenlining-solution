import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Team | Goldenlining Solution",
  description:
    "Meet the exceptional minds behind Goldenlining Solution — strategists, designers, developers, and marketers united by a passion for premium digital work.",
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
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
