"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "600+", label: "Projects Delivered" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "100+", label: "Global Clients" },
  { value: "7+",   label: "Years Experience" },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0d1f14" }}
    >
      {/* Gold top border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 overflow-hidden"
          style={{
            border: "1px solid rgba(212,175,55,0.3)",
            background: "rgba(13,20,10,0.6)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative text-center py-10 px-4"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(212,175,55,0.15)" : "none",
                animation: `float-3d ${5.5 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.35}s`,
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <div className="absolute inset-0 surface-light" />
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10 text-white"
                style={{ textShadow: "0 0 30px rgba(255,255,255,0.2)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] tracking-[0.25em] uppercase font-semibold relative z-10"
                style={{ color: "#ffffff" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)" }} />
    </div>
  );
}
