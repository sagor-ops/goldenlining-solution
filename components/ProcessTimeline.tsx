"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, PenTool, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, understanding your goals, audience, and market to craft a tailored digital roadmap.",
    icon: Lightbulb,
  },
  {
    title: "Design & Development",
    description: "Our experts blend premium aesthetics with cutting-edge technology to build a high-performance digital experience.",
    icon: PenTool,
  },
  {
    title: "Launch & Growth",
    description: "We deploy your project seamlessly and amplify your visibility through targeted SEO and digital marketing strategies.",
    icon: Rocket,
  },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#0d1f14" }}>
      {/* Background Subtle Gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"
        style={{ background: "#d4af37" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-4"
            style={{ color: "#d4af37" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Proven <span style={{ color: "#d4af37" }}>Process</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-sm sm:text-base text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A streamlined approach designed to transform your vision into a scalable, high-converting digital reality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 right-0 h-px" style={{ background: "rgba(212,175,55,0.15)" }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Step Number / Icon Container */}
                  <div
                    className="relative w-24 h-24 mb-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: "rgba(13, 31, 20, 1)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      boxShadow: "0 0 30px rgba(212,175,55,0.05) inset",
                    }}
                  >
                    <div className="absolute inset-2 rounded-full border border-dashed border-[#d4af37]/30 group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
                    <Icon size={32} style={{ color: "#d4af37" }} className="relative z-10" />

                    {/* Step Number Badge */}
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono"
                      style={{ background: "#d4af37", color: "#000" }}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-[#d4af37] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
