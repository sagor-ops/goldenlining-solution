import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Terms of Service | Goldenlining Solution",
  description:
    "Review the terms and conditions that govern your use of Goldenlining Solution's digital services including web design, SEO, and digital marketing.",
  alternates: { canonical: "https://goldenlining.com.au/terms-of-service" },
};

const sections = [
  {
    number: "01",
    title: "Services",
    body: `Goldenlining Solution provides digital services including website design and development, WordPress solutions, ecommerce, SEO, Google Ads, content strategy, branding, and graphic design. The scope of each engagement is agreed upon in writing prior to commencement.`,
  },
  {
    number: "02",
    title: "Client Responsibilities",
    body: `Clients agree to provide timely feedback, necessary content, and access required to complete the project. Delays caused by insufficient client input may affect timelines. Clients are responsible for ensuring all supplied materials are legally owned or licensed.`,
  },
  {
    number: "03",
    title: "Intellectual Property",
    body: `Upon receipt of full payment, clients receive ownership of the final deliverables specific to their project. Goldenlining Solution retains ownership of pre-existing tools, frameworks, templates, and methodologies used in delivery. We reserve the right to display completed work in our portfolio unless otherwise agreed.`,
  },
  {
    number: "04",
    title: "Payment Terms",
    body: `Projects typically require a deposit before work begins, with the balance due upon completion or as outlined in the project agreement. Late payments may result in work being paused. All prices are in Australian Dollars (AUD) and exclusive of GST unless stated otherwise.`,
  },
  {
    number: "05",
    title: "Revisions & Scope",
    body: `Each project includes a defined number of revision rounds as agreed. Work outside the original scope will be quoted separately. We aim to deliver results beyond expectations — if scope changes arise, we'll communicate clearly before proceeding.`,
  },
  {
    number: "06",
    title: "Limitation of Liability",
    body: `Goldenlining Solution is not liable for indirect, incidental, or consequential losses arising from the use of our services. Our total liability in any circumstance is limited to the total fees paid for the specific service in question. We do not guarantee specific search engine rankings or advertising results.`,
  },
  {
    number: "07",
    title: "Governing Law",
    body: `These terms are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales. By engaging our services, you agree to these terms in full.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <main>
      <Navigation />
      <PageHero
        badge="Legal"
        title="Terms of"
        highlight="Service"
        description="These terms govern your engagement with Goldenlining Solution. By using our services, you agree to the conditions outlined below."
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
              <p className="text-sm font-semibold text-gray-900 mb-1">Have a question about these terms?</p>
              <p className="text-sm text-gray-400">
                Contact us at{" "}
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
