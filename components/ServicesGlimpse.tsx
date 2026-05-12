"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Web Design & Development",
  "SEO & AI Search Visibility",
  "Google Ads Management",
  "Ecommerce Development",
  "Branding & Logo Design",
  "Content Strategy & Creation",
  "UI/UX Design",
  "WordPress Development",
  "Growth Marketing",
  "Digital Transformation",
  "Analytics & Reporting",
  "Graphic Design",
];

export default function ServicesGlimpse() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#0d1f14" }}>
      {/* Gold top border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-[0.12] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-1"
              style={{ color: "#d4af37" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              What We Do
            </motion.p>
            <motion.h3
              className="font-display font-bold text-white text-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Our <span style={{ color: "#d4af37" }}>Services</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: "#d4af37" }}
            >
              View All Services
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Service pills */}
        <motion.div
          className="flex flex-wrap gap-2.5"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {services.map((s, i) => (
            <Link
              key={s}
              href="/services"
              className="group text-xs font-semibold px-4 py-2 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,175,55,0.2)",
                color: "rgba(255,255,255,0.65)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#d4af37";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              {s}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)" }} />
    </section>
  );
}
