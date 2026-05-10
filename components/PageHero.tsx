"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function PageHero({ badge, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #050d1f 0%, #0a1628 50%, #0f1f3d 80%, #050d1f 100%)" }}>
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      {/* Vivid blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #d4af37, transparent)" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #3b82f6, transparent)" }} />

      {/* 3D Orbital rings left */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 w-36 h-36 pointer-events-none hidden xl:block" style={{ perspective: "500px" }}>
        {[
          { color: "rgba(212,175,55,0.3)", dur: 10, anim: "spin-3d-y" },
          { color: "rgba(99,102,241,0.2)",  dur: 16, anim: "spin-3d-x" },
          { color: "rgba(59,130,246,0.15)", dur: 22, anim: "spin-3d-z" },
        ].map((r, i) => (
          <div key={i} className="absolute inset-0 rounded-full border"
            style={{ borderColor: r.color, animation: `${r.anim} ${r.dur}s linear infinite` }} />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: "#d4af37", boxShadow: "0 0 10px rgba(212,175,55,0.7)" }} />
      </div>
      {/* 3D Orbital rings right */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-24 h-24 pointer-events-none hidden xl:block" style={{ perspective: "400px" }}>
        {["rgba(59,130,246,0.25)", "rgba(139,92,246,0.2)"].map((color, i) => (
          <div key={i} className="absolute inset-0 rounded-full border"
            style={{ borderColor: color, animation: `${i === 0 ? "spin-3d-x" : "spin-3d-z"} ${12 + i * 6}s linear infinite` }} />
        ))}
      </div>

      {/* Animated top line */}
      <motion.div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" }}
        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.span className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse-gold" />
          <span className="text-xs text-gold-400 tracking-[0.2em] uppercase font-semibold">{badge}</span>
        </motion.span>

        <motion.h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-5"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <span className="text-white">{title} </span>
          <span className="gold-text-animated">{highlight}</span>
        </motion.h1>

        <motion.p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {description}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050d1f] to-transparent pointer-events-none" />
    </section>
  );
}
