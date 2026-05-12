"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

const testimonials = [
  {
    quote: "Revenue up 280% in 90 days. Best digital investment we've ever made.",
    name: "Robert Phan",
    role: "CEO, Luminary Capital",
    initials: "RP",
  },
  {
    quote: "SEO work tripled our organic leads in 4 months. Exceptional team.",
    name: "Sarah Mitchell",
    role: "Director, Asset Training Enrol",
    initials: "SM",
  },
  {
    quote: "Our ecommerce store outperformed the old site by 400% in the first quarter.",
    name: "James Kowalski",
    role: "Founder, Solo Rack",
    initials: "JK",
  },
  {
    quote: "They didn't just build a site — they built a brand. Highly recommend.",
    name: "Amanda Torres",
    role: "Principal, De La Mar Academy",
    initials: "AT",
  },
  {
    quote: "Google Ads campaign delivers consistent, qualified leads every single day.",
    name: "David Nguyen",
    role: "MD, Equifund Australia",
    initials: "DN",
  },
  {
    quote: "Understood our vision immediately and executed it flawlessly.",
    name: "Lisa Brennan",
    role: "CEO, Vita Consulting UK",
    initials: "LB",
  },
];

export default function ConsultationCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <>
      <section ref={sectionRef} className="relative overflow-hidden" style={{ background: "#ffffff" }}>

        {/* Top border */}
        <div className="border-t border-gray-100" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-12 lg:py-16">

          {/* ── Header ── */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-8">
            <div>
              <motion.p
                className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
                style={{ color: "#d4af37" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                Client Testimonials
              </motion.p>
              <motion.h2
                className="font-display font-bold text-black leading-[1.04]"
                style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.7 }}
              >
                Trusted by Businesses<br />
                <span style={{ color: "#d4af37" }}>Around the World</span>
              </motion.h2>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
            >
              <div>
                <div className="flex gap-0.5 mb-1">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={14} style={{ color: "#d4af37", fill: "#d4af37" }} />)}
                </div>
                <p className="text-xs text-gray-400">5.0 average rating across 600+ projects</p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="group shrink-0 flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-wide transition-all hover:opacity-90"
                style={{
                  background: "#d4af37",
                  color: "#000",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                  boxShadow: "0 6px 24px rgba(212,175,55,0.35)",
                }}
              >
                Book Free Consultation
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Gold rule */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          >
            <div className="h-px w-16" style={{ background: "#d4af37" }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#d4af37" }} />
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }} />
          </motion.div>

          {/* ── Testimonials grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="flex flex-col gap-4 p-5 border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all duration-300"
                style={{ background: "#fafafa" }}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
              >
                {/* Stars + quote icon row */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array(5).fill(0).map((_, j) => <Star key={j} size={10} style={{ color: "#d4af37", fill: "#d4af37" }} />)}
                  </div>
                  <Quote size={16} style={{ color: "#d4af37", opacity: 0.4 }} />
                </div>

                {/* Quote text */}
                <p className="text-xs leading-relaxed text-gray-500 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
                  <div
                    className="w-7 h-7 flex items-center justify-center text-[9px] font-bold shrink-0"
                    style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", color: "#d4af37" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-black">{t.name}</div>
                    <div className="text-[9px] text-gray-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <motion.div
            className="mt-8 pt-7 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-0.5 h-10 shrink-0" style={{ background: "#d4af37" }} />
              <p className="text-sm italic text-gray-400 max-w-md">
                &ldquo;We don&apos;t just build websites — we craft digital instruments of growth, authority, and lasting brand impact.&rdquo;
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="group shrink-0 flex items-center gap-2 text-sm font-bold border-2 border-black px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Start Your Project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
