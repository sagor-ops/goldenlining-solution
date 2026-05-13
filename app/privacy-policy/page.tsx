import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Privacy Policy | Goldenlining Solution",
  description:
    "Learn how Goldenlining Solution collects, uses, and protects your personal information when you engage with our digital services.",
  alternates: { canonical: "https://goldenlining.com.au/privacy-policy" },
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    body: `When you contact us, request a consultation, or engage our services, we may collect personal information including your name, email address, phone number, business name, and project details. We collect only what is necessary to deliver exceptional service.`,
  },
  {
    number: "02",
    title: "How We Use Your Information",
    body: `Your information is used solely to respond to enquiries, scope and deliver digital services (web design, SEO, Google Ads, branding), send project updates, and improve our offerings. We do not sell, rent, or trade your personal data to third parties.`,
  },
  {
    number: "03",
    title: "Third-Party Services",
    body: `We use trusted third-party tools including Google Analytics (traffic insights), Google Ads (advertising performance), and email platforms to communicate with clients. These providers operate under their own privacy policies and data protection standards.`,
  },
  {
    number: "04",
    title: "Cookies",
    body: `Our website uses cookies to understand visitor behaviour, improve performance, and deliver relevant advertising. You may disable cookies through your browser settings at any time. Disabling cookies may affect some website functionality.`,
  },
  {
    number: "05",
    title: "Data Security",
    body: `We take reasonable measures to protect your information from unauthorised access, loss, or misuse. All data is stored securely. While we implement industry-standard safeguards, no method of transmission over the internet is 100% secure.`,
  },
  {
    number: "06",
    title: "Your Rights",
    body: `You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights or ask any privacy-related question, contact us at goldenliningsolution@gmail.com. We aim to respond within 5 business days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="Legal"
        title="Privacy"
        highlight="Policy"
        description="We respect your privacy and are committed to protecting your personal information. This policy outlines how we handle your data."
      />

      {/* Content */}
      <section className="relative" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-14 sm:py-20">

          {/* Effective date */}
          <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-10 sm:mb-14"
            style={{ color: "#d4af37" }}>
            Effective Date: January 2024 &nbsp;·&nbsp; Goldenlining Solution
          </p>

          <div className="space-y-10 sm:space-y-14">
            {sections.map((s) => (
              <div key={s.number} className="flex gap-6 sm:gap-10 group">
                {/* Number */}
                <div className="shrink-0 pt-0.5">
                  <span className="font-display text-2xl sm:text-3xl font-bold leading-none select-none"
                    style={{ color: "rgba(212,175,55,0.18)" }}>
                    {s.number}
                  </span>
                </div>
                {/* Text */}
                <div className="flex-1 border-t pt-1" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                  <h2 className="font-display text-base sm:text-lg font-bold text-gray-900 mb-3">
                    {s.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-14 sm:mt-20 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            style={{ borderColor: "rgba(212,175,55,0.2)" }}>
            <div className="w-0.5 h-12 shrink-0" style={{ background: "#d4af37" }} />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Questions about this policy?</p>
              <p className="text-sm text-gray-400">
                Reach us at{" "}
                <a href="mailto:goldenliningsolution@gmail.com"
                  className="font-medium transition-colors"
                  style={{ color: "#d4af37" }}>
                  goldenliningsolution@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:+61480684500"
                  className="font-medium transition-colors"
                  style={{ color: "#d4af37" }}>
                  +61 480 684 500
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
