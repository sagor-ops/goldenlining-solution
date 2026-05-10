"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Gem, Lightbulb, Globe2, Cpu, TrendingUp, Crown, Handshake, ArrowUpRight } from "lucide-react";
import Tilt3D from "./Tilt3D";

const features = [
  { num: "01", icon: Crown,      title: "Premium Execution",       description: "Every deliverable crafted to the highest standard — no shortcuts, no compromises, only elite-grade output.",       color: "#d4af37" },
  { num: "02", icon: Lightbulb,  title: "Strategy-First Thinking", description: "Deep strategic alignment on every engagement, ensuring each decision drives measurable business outcomes.",          color: "#c9a227" },
  { num: "03", icon: Globe2,     title: "Global Design Standards", description: "Creative direction informed by global best practices, producing work that competes on an international stage.",      color: "#d4af37" },
  { num: "04", icon: Cpu,        title: "Scalable Technology",     description: "We build on modern, future-proof stacks designed to scale with your business as it grows.",                         color: "#e8c96a" },
  { num: "05", icon: TrendingUp, title: "Performance-Driven",      description: "Every system is optimised for speed, conversion, and measurable growth from day one.",                             color: "#d4af37" },
  { num: "06", icon: Gem,        title: "Luxury-Level Branding",   description: "Brand identities that command respect and communicate authority in any market or industry.",                       color: "#c9a227" },
  { num: "07", icon: Handshake,  title: "Long-Term Partnerships",  description: "We invest in your long-term success — not just a project. We grow alongside you.",                                color: "#d4af37" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: "#ffffff" }}>

      {/* ── Section header — NASA style ── */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-end justify-between gap-6">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-2"
              style={{ color: "#d4af37" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              Why Goldenlining
            </motion.p>
            <motion.h2
              className="font-display font-bold text-black leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Built For Businesses That<br />
              Refuse <span style={{ color: "#d4af37" }}>Average</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/services"
              className="group flex items-center gap-2 text-sm font-bold tracking-wide transition-all"
              style={{ color: "#000" }}
            >
              Explore Services
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: "#d4af37" }}
              >
                <ArrowUpRight size={14} style={{ color: "#000" }} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Feature card grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {features.slice(0, 6).map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              >
                <Tilt3D intensity={10} scale={1.04} shadow="rgba(212,175,55,0.5)">
                  <div
                    className="group relative overflow-hidden p-7 h-full"
                    style={{
                      background: "#0d1f14",
                      borderTop: `3px solid ${f.color}`,
                    }}
                  >
                    {/* Large faint number */}
                    <span
                      className="absolute top-4 right-5 font-mono font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: "4.5rem", color: "rgba(212,175,55,0.06)" }}
                    >
                      {f.num}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-11 h-11 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `${f.color}18`,
                        border: `1.5px solid ${f.color}35`,
                        transform: "translateZ(16px)",
                      }}
                    >
                      <Icon size={20} style={{ color: f.color }} />
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {f.description}
                    </p>

                    {/* Bottom gold line that grows on hover */}
                    <div
                      className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
                    />
                  </div>
                </Tilt3D>
              </motion.div>
            );
          })}
        </div>

        {/* Last card + CTA card — bottom row */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* 7th feature */}
          {(() => {
            const f = features[6];
            const Icon = f.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.52 }}
              >
                <Tilt3D intensity={10} scale={1.04} shadow="rgba(212,175,55,0.5)">
                  <div
                    className="group relative overflow-hidden p-7"
                    style={{ background: "#0d1f14", borderTop: `3px solid ${f.color}` }}
                  >
                    <span
                      className="absolute top-4 right-5 font-mono font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: "4.5rem", color: "rgba(212,175,55,0.06)" }}
                    >
                      {f.num}
                    </span>
                    <div
                      className="w-11 h-11 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${f.color}18`, border: `1.5px solid ${f.color}35`, transform: "translateZ(16px)" }}
                    >
                      <Icon size={20} style={{ color: f.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">{f.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{f.description}</p>
                    <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }} />
                  </div>
                </Tilt3D>
              </motion.div>
            );
          })()}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.58 }}
          >
            <Tilt3D intensity={8} scale={1.03} shadow="rgba(212,175,55,0.4)">
              <div
                className="group relative overflow-hidden p-7 flex flex-col justify-between"
                style={{
                  background: "#d4af37",
                  minHeight: "180px",
                }}
              >
                {/* Orbital ring decoration */}
                <div className="absolute top-1/2 right-6 -translate-y-1/2 w-20 h-20 pointer-events-none" style={{ perspective: "300px" }}>
                  {["rgba(0,0,0,0.15)", "rgba(0,0,0,0.08)"].map((c, i) => (
                    <div key={i} className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: c, animation: `${i === 0 ? "spin-3d-y" : "spin-3d-x"} ${8 + i * 4}s linear infinite` }} />
                  ))}
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-3" style={{ color: "rgba(0,0,0,0.5)" }}>
                    Ready to start?
                  </p>
                  <h3 className="font-display text-lg font-bold text-black leading-tight mb-4">
                    Let&apos;s Build Something Exceptional Together
                  </h3>
                </div>
                <Link
                  href="/contact"
                  className="group/btn flex items-center gap-2 text-sm font-bold tracking-wide w-fit"
                  style={{ color: "#000" }}
                >
                  Get Started Today
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </Tilt3D>
          </motion.div>
        </div>

        {/* Bottom quote strip */}
        <motion.div
          className="mt-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-0.5 h-12 shrink-0" style={{ background: "#d4af37" }} />
            <p className="text-sm leading-relaxed italic text-gray-500 max-w-lg">
              &ldquo;We don&apos;t just build websites. We craft digital instruments of growth, authority, and lasting brand impact.&rdquo;
            </p>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 flex items-center gap-2 px-6 py-3 text-sm font-bold border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            View Portfolio
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
