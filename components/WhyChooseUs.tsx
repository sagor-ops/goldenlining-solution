"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Gem, Lightbulb, Globe2, Cpu, TrendingUp, Crown, Handshake } from "lucide-react";
import Tilt3D from "./Tilt3D";

const features = [
  { icon: Crown,      title: "Premium Execution",       description: "Every deliverable crafted to the highest standard — no shortcuts, no compromises, only elite-grade output.",         color: "#d4af37" },
  { icon: Lightbulb,  title: "Strategy-First Thinking", description: "Deep strategic alignment on every engagement, ensuring each decision drives measurable business outcomes.",            color: "#fbbf24" },
  { icon: Globe2,     title: "Global Design Standards", description: "Creative direction informed by global best practices, producing work that competes on an international stage.",        color: "#60a5fa" },
  { icon: Cpu,        title: "Scalable Technology",     description: "We build on modern, future-proof stacks designed to scale with your business as it grows.",                           color: "#a78bfa" },
  { icon: TrendingUp, title: "Performance-Driven",      description: "Every system is optimised for speed, conversion, and measurable growth from day one.",                               color: "#34d399" },
  { icon: Gem,        title: "Luxury-Level Branding",   description: "Brand identities that command respect and communicate authority in any market or industry.",                         color: "#f59e0b" },
  { icon: Handshake,  title: "Long-Term Partnerships",  description: "We invest in your long-term success — not just a project. We grow alongside you.",                                  color: "#fb7185" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1e1b4b 70%, #0f172a 100%)" }}>

      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

      {/* 3D Orbital decoration - top right */}
      <div className="absolute top-12 right-12 w-40 h-40 pointer-events-none hidden xl:block" style={{ perspective: "500px" }}>
        {[
          { color: "rgba(212,175,55,0.45)", dur: 8,  anim: "spin-3d-y" },
          { color: "rgba(99,102,241,0.35)",  dur: 12, anim: "spin-3d-x" },
          { color: "rgba(59,130,246,0.3)",   dur: 16, anim: "spin-3d-z" },
        ].map((r, i) => (
          <div key={i} className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: r.color, animation: `${r.anim} ${r.dur}s linear infinite` }} />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
          style={{ background: "#d4af37", boxShadow: "0 0 12px rgba(212,175,55,0.8)" }} />
      </div>

      {/* 3D Orbital decoration - bottom left */}
      <div className="absolute bottom-12 left-12 w-24 h-24 pointer-events-none hidden xl:block" style={{ perspective: "400px" }}>
        {["rgba(139,92,246,0.4)", "rgba(59,130,246,0.3)"].map((color, i) => (
          <div key={i} className="absolute inset-0 rounded-full border"
            style={{ borderColor: color, animation: `${i === 0 ? "spin-3d-x" : "spin-3d-z"} ${10 + i * 5}s linear infinite` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span className="text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold mb-3 block"
              initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
              Why Goldenlining
            </motion.span>
            <motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              Built For Businesses<br />That Refuse{" "}
              <span className="gold-text-animated">Average</span>
            </motion.h2>
            <motion.p className="text-blue-200/80 text-base leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              We combine creativity, technology, strategy, and performance to create digital experiences that position businesses for long-term success.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
              <Link href="/services" className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide inline-block">
                Explore Our Services
              </Link>
              <Link href="/portfolio" className="btn-outline-gold px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide inline-block">
                View Portfolio
              </Link>
            </motion.div>

            {/* 3D quote card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
              <Tilt3D intensity={6} scale={1.02}>
                <div className="glass-blue rounded-2xl p-6"
                  style={{ boxShadow: "0 8px 32px rgba(30,58,138,0.3), 0 0 0 1px rgba(96,165,250,0.15)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center shrink-0"
                      style={{ boxShadow: "0 4px 12px rgba(212,175,55,0.2)", transform: "translateZ(15px)" }}>
                      <Gem size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Our Commitment to Excellence</p>
                      <p className="text-xs text-blue-200/70 leading-relaxed italic">
                        &ldquo;We don&apos;t just build websites. We craft digital instruments of growth, authority, and lasting brand impact.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          </div>

          {/* Right: 3D tilt feature cards */}
          <div className="grid gap-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title}
                  initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}>
                  <Tilt3D intensity={5} scale={1.02} glare>
                    <div className="glass rounded-xl p-4 group border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default relative overflow-hidden">
                      <div className="absolute inset-0 surface-light rounded-xl" />
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: `${feature.color}22`,
                            border: `1px solid ${feature.color}35`,
                            boxShadow: `0 4px 12px ${feature.color}20`,
                            transform: "translateZ(12px)",
                          }}>
                          <Icon size={16} style={{ color: feature.color }} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-gold-300 transition-colors">{feature.title}</h3>
                          <p className="text-xs text-blue-200/60 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </Tilt3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
