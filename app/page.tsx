import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactStrip from "@/components/ContactStrip";
import StatsBar from "@/components/StatsBar";
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
      <ContactStrip />
      <StatsBar />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
