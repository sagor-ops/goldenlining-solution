"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Star, CheckCircle, Gem } from "lucide-react";
import ConsultationModal from "./ConsultationModal";
import Tilt3D from "./Tilt3D";

const benefits = [
  "Website Design & Development",
  "SEO & AI Visibility",
  "Google Ads Management",
  "Branding & Logo Design",
  "Ecommerce Solutions",
  "Content Strategy",
];

const stats = [
  { value: "200+", label: "Projects" },
  { value: "98%",  label: "Satisfaction" },
  { value: "50+",  label: "Clients" },
];

export default function ConsultationCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <>
      <section ref={sectionRef} className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0d1f14 0%, #0a2030 50%, #0d1f14 100%)" }}>
        {/* Gold top border */}
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)" }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

        {/* Gold glow blob */}
        <div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4af37, transparent)" }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[680px]">

            {/* ── Left: Bold headline side ── */}
            <div className="py-20 pr-0 lg:pr-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">

              {/* 3D Orbital rings — prominent */}
              <div className="relative mb-12">
                <div className="absolute -top-4 -left-4 w-44 h-44 pointer-events-none" style={{ perspective: "600px" }}>
                  {[
                    { color: "rgba(212,175,55,0.55)", dur: 7,  anim: "spin-3d-y", w: 2 },
                    { color: "rgba(212,175,55,0.30)", dur: 12, anim: "spin-3d-x", w: 1 },
                    { color: "rgba(212,175,55,0.18)", dur: 18, anim: "spin-3d-z", w: 1 },
                  ].map((r, i) => (
                    <div key={i} className="absolute inset-0 rounded-full"
                      style={{
                        border: `${r.w}px solid ${r.color}`,
                        animation: `${r.anim} ${r.dur}s linear infinite`,
                      }} />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                    style={{ background: "#d4af37", boxShadow: "0 0 16px rgba(212,175,55,1), 0 0 32px rgba(212,175,55,0.5)" }} />
                </div>

                <div style={{ paddingLeft: "0px" }}>
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                  >
                    <div className="flex gap-0.5">
                      {Array(5).fill(0).map((_, i) => <Star key={i} size={13} style={{ color: "#d4af37", fill: "#d4af37" }} />)}
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold" style={{ color: "rgba(255,255,255,0.35)" }}>
                      5.0 Client Rating
                    </span>
                  </motion.div>

                  <motion.p
                    className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
                    style={{ color: "#d4af37" }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 }}
                  >
                    Start Your Transformation
                  </motion.p>

                  <motion.h2
                    className="font-display font-bold text-white leading-[1.02] mb-6"
                    style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15 }}
                  >
                    Let&apos;s Build<br />
                    Something{" "}
                    <span className="gold-text-animated text-3d">Exceptional</span>
                  </motion.h2>

                  {/* Gold rule */}
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="h-px flex-1 max-w-[80px]" style={{ background: "#d4af37" }} />
                    <div className="w-1 h-1 rotate-45" style={{ background: "#d4af37" }} />
                    <div className="h-px flex-1 max-w-[200px]" style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }} />
                  </motion.div>

                  <motion.p
                    className="text-sm leading-relaxed mb-8 max-w-md"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.25 }}
                  >
                    Book a free 30-minute strategy session. We&apos;ll map out exactly how to elevate your digital presence and accelerate growth.
                  </motion.p>

                  <motion.button
                    onClick={() => setModalOpen(true)}
                    className="group flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-wide mb-8 transition-all hover:opacity-90"
                    style={{
                      background: "#d4af37",
                      color: "#000",
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                      boxShadow: "0 8px 32px rgba(212,175,55,0.4)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 }}
                  >
                    Book Free Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.div
                    className="flex flex-wrap gap-5"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.45 }}
                  >
                    {[
                      { icon: Calendar, label: "Free 30-Min Session" },
                      { icon: Clock,    label: "Same-Day Response" },
                      { icon: Star,     label: "No Obligation" },
                    ].map(({ icon: Icon, label }) => (
                      <span key={label} className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                        <Icon size={12} style={{ color: "#d4af37" }} />
                        {label}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Stats strip */}
              <motion.div
                className="grid grid-cols-3 gap-px border border-white/[0.05] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="text-center py-5"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      animation: `float-3d ${5 + i * 0.8}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <div className="text-2xl font-extrabold gold-text-animated">{s.value}</div>
                    <div className="text-[10px] tracking-wider uppercase font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Cards side ── */}
            <div className="py-20 pl-0 lg:pl-16 flex flex-col gap-5 justify-center">

              {/* Services card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Tilt3D intensity={8} scale={1.03} shadow="rgba(212,175,55,0.5)">
                  <div
                    className="p-7"
                    style={{
                      background: "rgba(212,175,55,0.04)",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderTop: "3px solid #d4af37",
                    }}
                  >
                    <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-5" style={{ color: "#d4af37" }}>
                      Services Covered
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                          <CheckCircle size={12} style={{ color: "#d4af37", flexShrink: 0 }} />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt3D>
              </motion.div>

              {/* Testimonial card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <Tilt3D intensity={9} scale={1.04} shadow="rgba(212,175,55,0.4)">
                  <div
                    className="p-6"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex gap-0.5 mb-3">
                      {Array(5).fill(0).map((_, i) => <Star key={i} size={11} style={{ color: "#d4af37", fill: "#d4af37" }} />)}
                    </div>
                    <p className="text-sm italic leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      &ldquo;Goldenlining transformed our entire digital presence in 90 days. Revenue up 280%, brand perception completely elevated. Best investment we&apos;ve ever made.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 flex items-center justify-center text-xs font-bold shrink-0"
                        style={{
                          background: "rgba(212,175,55,0.12)",
                          border: "1px solid rgba(212,175,55,0.3)",
                          color: "#d4af37",
                          transform: "translateZ(20px)",
                        }}
                      >
                        RP
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Robert Phan</div>
                        <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>CEO, Luminary Capital</div>
                      </div>
                      <div className="ml-auto">
                        <Gem size={20} style={{ color: "rgba(212,175,55,0.2)" }} />
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
