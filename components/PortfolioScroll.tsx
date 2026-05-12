"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Battery Mineral Project",  url: "batterymineralproject.com",           category: "Industry",    accent: "#f59e0b" },
  { title: "Juris Maximus",            url: "jurismaximus.com",                     category: "Legal",       accent: "#a78bfa" },
  { title: "Walus Bookkeeping",        url: "walusbookkeeping.com",                 category: "Finance",     accent: "#d4af37" },
  { title: "Ask CSS",                  url: "askcss.com.au",                        category: "Non-Profit",  accent: "#10b981" },
  { title: "Equifund",                 url: "equifund.com.au",                      category: "Finance",     accent: "#60a5fa" },
  { title: "Maricc",                   url: "maricc.com",                           category: "Web Design",  accent: "#f472b6" },
  { title: "De La Mar Academy",        url: "delamaracademy.co.uk",                 category: "Education",   accent: "#c084fc" },
  { title: "SB Event Horizon",         url: "sbeventhorizon.com",                   category: "Hospitality", accent: "#fb923c" },
  { title: "HRM Tech",                 url: "hrmtech.co.uk",                        category: "Technology",  accent: "#38bdf8" },
  { title: "Alpha1 Research",          url: "alpha1research.com",                   category: "Technology",  accent: "#a78bfa" },
  { title: "Solo Rack",                url: "solo-rack.com",                        category: "Ecommerce",   accent: "#fbbf24" },
  { title: "CMM Renovations",          url: "cmmrenovations.com.au",                category: "Industry",    accent: "#fb923c" },
  { title: "Tier 1 Business Group",    url: "tier1businessgroup.com",               category: "Finance",     accent: "#d4af37" },
  { title: "Abilities RC",             url: "abilitiesrc.com",                      category: "Healthcare",  accent: "#34d399" },
  { title: "Asset Training Enrol",     url: "assettrainingenrol.com.au",            category: "Education",   accent: "#60a5fa" },
  { title: "Caladonna",                url: "caladonna.com.au",                     category: "Ecommerce",   accent: "#f472b6" },
  { title: "RPM Engineering",          url: "rpmengineering.com.au",                category: "Industry",    accent: "#f59e0b" },
  { title: "Booxkeeping",              url: "booxkeeping.com",                      category: "Finance",     accent: "#34d399" },
  { title: "Key 2 Driving",            url: "key2driving.com",                      category: "Education",   accent: "#fbbf24" },
  { title: "Riot Kyabram",             url: "riotkyabram.com",                      category: "Hospitality", accent: "#fb923c" },
];

// Duplicate for seamless loop
const row1 = [...projects.slice(0, 10),  ...projects.slice(0, 10)];
const row2 = [...projects.slice(10, 20), ...projects.slice(10, 20)];

function Card({ p }: { p: typeof projects[0] }) {
  return (
    <a
      href={`https://${p.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group shrink-0 flex items-center gap-4 px-5 py-3.5 mx-2 transition-all duration-300"
      style={{
        background: "#f9f9f9",
        border: "1px solid #ececec",
        minWidth: "260px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = `${p.accent}0e`;
        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${p.accent}50`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#f9f9f9";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ececec";
      }}
    >
      {/* Accent dot */}
      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: p.accent }} />

      <div className="flex flex-col min-w-0">
        <span className="text-xs font-bold text-gray-800 truncate leading-tight">{p.title}</span>
        <span className="text-[10px] truncate mt-0.5 transition-colors duration-200 group-hover:opacity-90" style={{ color: p.accent }}>
          {p.url}
        </span>
      </div>

      <div className="ml-auto flex items-center gap-2 shrink-0">
        <span
          className="text-[8px] tracking-wider uppercase font-bold px-2 py-0.5"
          style={{ background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}30` }}
        >
          {p.category}
        </span>
        <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: p.accent }} />
      </div>
    </a>
  );
}

export default function PortfolioScroll() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-14"
      style={{ background: "#ffffff", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}
    >
      {/* Subtle gold mid-glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 65%)" }}
      />

      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-8 flex items-end justify-between"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-1" style={{ color: "#d4af37" }}>
            Our Work
          </p>
          <h3 className="font-display font-bold text-black" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
            600+ Projects Delivered Worldwide
          </h3>
        </div>
        <Link
          href="/portfolio"
          className="group hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#d4af37" }}
        >
          View All
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>

      {/* Row 1 — left to right */}
      <div className="overflow-hidden mb-3">
        <div
          className="flex"
          style={{ animation: "portfolio-scroll-l 40s linear infinite", width: "max-content" }}
        >
          {row1.map((p, i) => <Card key={i} p={p} />)}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{ animation: "portfolio-scroll-r 45s linear infinite", width: "max-content" }}
        >
          {row2.map((p, i) => <Card key={i} p={p} />)}
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />
    </section>
  );
}
