"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const JoinTeamModal = dynamic(() => import("./JoinTeamModal"), { ssr: false });
const ConsultationModal = dynamic(() => import("./ConsultationModal"), { ssr: false });

const links: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Website Design",      href: "/services" },
    { label: "WordPress Development",href: "/services" },
    { label: "Ecommerce Solutions",  href: "/services" },
    { label: "SEO & AI Visibility",  href: "/services" },
    { label: "Google Ads",           href: "/services" },
    { label: "Branding & Design",    href: "/services" },
  ],
  Company: [
    { label: "About Us",   href: "/about" },
    { label: "Our Team",   href: "/team" },
    { label: "Portfolio",  href: "/portfolio" },
    { label: "Blog",       href: "/blog" },
    { label: "Careers",    href: "/contact" },
    { label: "Discover Our Apps", href: "https://lab.goldenliningsolution.com/" },
  ],
  Support: [
    { label: "Contact Us",       href: "/contact" },
    { label: "Free Consultation",href: "/contact" },
    { label: "Privacy Policy",   href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/golden-lining-solution-925b8a341/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/p/Golden-Lining-Solution-61566083714627/" },
];

export default function Footer() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  return (
    <>
    <footer className="relative overflow-hidden border-t border-white/5" style={{ background: "#0d1f14" }}>
      {/* Background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full blur-3xl opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #d4af37, transparent)" }}
      />

      {/* Top marquee */}
      <div className="border-b py-3 overflow-hidden" style={{ borderColor: "rgba(212,175,55,0.15)" }}>
        <div className="flex items-center whitespace-nowrap">
          <div className="marquee-track flex gap-0 items-center">
            {Array(8).fill(0).map((_, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="text-[10px] tracking-[0.4em] uppercase font-semibold px-8" style={{ color: "rgba(212,175,55,0.7)" }}>
                  Goldenlining Solution
                </span>
                <span className="w-1 h-1 rotate-45 shrink-0" style={{ background: "rgba(212,175,55,0.4)" }} />
                <span className="text-[10px] tracking-[0.4em] uppercase font-semibold px-8" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Premium Digital Agency
                </span>
                <span className="w-1 h-1 rotate-45 shrink-0" style={{ background: "rgba(212,175,55,0.4)" }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group shrink-0">
              <div
                style={{
                  width: 3,
                  height: 42,
                  background: "#d4af37",
                  boxShadow: "0 0 10px rgba(212,175,55,0.6)",
                  flexShrink: 0,
                }}
              />
              <img src="/logo-footer.png" alt="Goldenlining Solution" className="h-14 w-auto group-hover:opacity-80 transition-opacity" width="300" height="58" decoding="async" />
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Premium web design, SEO &amp; digital marketing for ambitious businesses across Australia and globally.
            </p>

            {/* Contact quick */}
            <div className="space-y-2.5 mb-6">
              <a
                href="tel:+61480684500"
                className="flex items-center gap-2.5 text-sm transition-colors group"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4af37")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#d4af37" }} />
                +61 480 684 500
              </a>
              <a
                href="mailto:goldenliningsolution@gmail.com"
                className="flex items-center gap-2.5 text-sm transition-colors break-all sm:break-normal"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4af37")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#d4af37" }} />
                goldenliningsolution@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-600 hover:text-gold-400 hover:border-gold-500/20 border border-white/5 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5"
                style={{ color: "#d4af37" }}>
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.label === "Careers" || item.label === "Free Consultation" ? (
                      <button
                        onClick={() => item.label === "Careers" ? setJoinModalOpen(true) : setConsultModalOpen(true)}
                        className="text-xs transition-colors duration-200 text-left"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-xs transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                        {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
          <p className="text-[11px] tracking-wide" style={{ color: "rgba(255,255,255,0.2)" }}>
            &copy; {new Date().getFullYear()} Goldenlining Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-2" style={{ color: "rgba(212,175,55,0.5)" }}>
            <span className="w-4 h-px" style={{ background: "rgba(212,175,55,0.4)" }} />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Australia &amp; Global · Est. 2017
            </span>
            <span className="w-4 h-px" style={{ background: "rgba(212,175,55,0.4)" }} />
          </div>
        </div>
      </div>
    </footer>

    <JoinTeamModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
    <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </>
  );
}
