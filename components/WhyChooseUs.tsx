"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { label: "Web Design & Development"    },
  { label: "SEO & AI Search Visibility"  },
  { label: "Google Ads Management"       },
  { label: "Ecommerce Development"       },
  { label: "Branding & Logo Design"      },
  { label: "Content Strategy & Creation" },
  { label: "UI/UX Design"                },
  { label: "WordPress Development"       },
  { label: "Growth Marketing"            },
  { label: "Digital Transformation"      },
  { label: "Analytics & Reporting"       },
  { label: "Graphic Design"              },
];

const SHOW = 6;

const marqueeText =
  "We don't just build websites — we craft digital instruments of growth, authority, and lasting brand impact.";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: "#ffffff" }}>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Left ── */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">

            <motion.p
              className="text-[10px] tracking-[0.35em] uppercase font-bold"
              style={{ color: "#d4af37" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              Goldenlining Solution
            </motion.p>

            <motion.h2
              className="font-display font-bold text-black leading-[1.04]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Award-Winning Web Design,{" "}
              <span style={{ color: "#d4af37" }}>SEO</span>{" "}
              &amp; Digital Growth Agency.
            </motion.h2>

            <motion.p
              className="text-sm leading-relaxed"
              style={{ color: "#555", maxWidth: "420px" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Goldenlining Solution is a premium web design &amp; digital agency serving
              businesses across Australia and globally. We specialise in
              high-performance websites, SEO &amp; AI search visibility, Google Ads,
              ecommerce, and full-scale digital transformation — helping ambitious
              brands dominate their market.
            </motion.p>

            {/* Decorative gold bar + tag */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              <div className="flex gap-1.5">
                {[32, 16, 8].map((w, n) => (
                  <div key={n} className="h-1" style={{ width: w, background: "#d4af37", opacity: 1 - n * 0.28 }} />
                ))}
              </div>
              <span className="text-[10px] tracking-widest uppercase text-gray-400">Australia &amp; Global · Est. 2017</span>
            </motion.div>
          </div>

          {/* ── Right: Services 2-col grid ── */}
          <div>
            <motion.p
              className="text-[10px] tracking-[0.3em] uppercase font-bold mb-3"
              style={{ color: "#aaa" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 }}
            >
              Our Services
            </motion.p>

            <div className="grid grid-cols-2" style={{ border: "1px solid #f0f0f0" }}>
              {services.slice(0, SHOW).map((service, i) => (
                <motion.div
                  key={service.label}
                  style={{
                    borderRight:  i % 2 === 0 ? "1px solid #f0f0f0" : "none",
                    borderBottom: i < SHOW - 2 ? "1px solid #f0f0f0" : "none",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                >
                  <Link
                    href="/services"
                    className="group flex items-center justify-between py-5 px-5 transition-all duration-200"
                    style={{ background: "transparent" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0d1f14"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                  >
                    <span
                      className="text-sm font-semibold tracking-wide transition-colors duration-200 group-hover:text-white"
                      style={{ color: "#d4af37" }}
                    >
                      {service.label}
                    </span>
                    <ArrowRight
                      size={14}
                      className="shrink-0 transition-all duration-200 group-hover:text-white group-hover:translate-x-1"
                      style={{ color: "#d4af37" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Show More + View All */}
            <motion.div
              className="mt-5 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:opacity-60 transition-opacity"
                style={{ color: "#000" }}
              >
                <span className="h-px w-5 inline-block" style={{ background: "#d4af37" }} />
                Show More +{services.length - SHOW}
              </Link>
              <Link
                href="/services"
                className="text-[10px] tracking-widest uppercase font-bold border-b border-gray-300 pb-0.5 hover:border-yellow-500 transition-colors"
                style={{ color: "#999" }}
              >
                View All Services →
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Full-width continuous marquee quote ── */}
      <div className="border-t border-gray-100 py-4 overflow-hidden" style={{ background: "#fafafa" }}>
        {/* Two identical tracks side-by-side; first scrolls off left as second comes in */}
        <div className="flex" style={{ width: "max-content", animation: "marquee-quote 32s linear infinite" }}>
          {[1, 2].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="shrink-0 px-10 text-xs italic font-medium tracking-wide whitespace-nowrap"
                  style={{ color: "#aaa" }}
                >
                  &ldquo;{marqueeText}&rdquo;
                  <span className="mx-6 not-italic font-black" style={{ color: "#d4af37" }}> ✦ </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
