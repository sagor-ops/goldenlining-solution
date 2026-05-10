"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Star, CheckCircle } from "lucide-react";
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

export default function ConsultationCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <section ref={sectionRef} className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 35%, #1e1b4b 65%, #0f172a 100%)" }}>

        <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

        {/* 3D Orbital rings — centred background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none" style={{ perspective: "500px" }}>
          {[
            { color: "rgba(212,175,55,0.12)", dur: 10, anim: "spin-3d-y" },
            { color: "rgba(99,102,241,0.10)", dur: 15, anim: "spin-3d-x" },
            { color: "rgba(59,130,246,0.08)", dur: 20, anim: "spin-3d-z" },
          ].map((r, i) => (
            <div key={i} className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: r.color, animation: `${r.anim} ${r.dur}s linear infinite` }} />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div className="flex gap-1 mb-6"
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
                {Array(5).fill(0).map((_, i) => <Star key={i} size={16} className="text-gold-400 fill-gold-400" />)}
              </motion.div>
              <motion.span className="text-xs tracking-[0.3em] text-gold-400 uppercase font-semibold mb-4 block"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}>
                Start Your Transformation
              </motion.span>
              <motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05]"
                initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
                Let&apos;s Build Something{" "}
                <span className="gold-text-animated text-3d">Exceptional</span>
              </motion.h2>
              <motion.p className="text-blue-200/80 text-base md:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25 }}>
                Book a free 30-minute consultation and discover how Goldenlining Solution can elevate your digital presence and accelerate your growth.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.35 }}>
                <button onClick={() => setModalOpen(true)}
                  className="btn-gold group flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-semibold tracking-wide"
                  style={{ boxShadow: "0 8px 32px rgba(212,175,55,0.4), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  Book Free Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
              <motion.div className="flex flex-wrap gap-5 text-xs text-blue-300/70"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.45 }}>
                <div className="flex items-center gap-2"><Calendar size={13} className="text-gold-400" /><span className="font-medium">Free 30-Minute Session</span></div>
                <div className="flex items-center gap-2"><Clock size={13} className="text-gold-400" /><span className="font-medium">Same-Day Response</span></div>
                <div className="flex items-center gap-2"><Star size={13} className="text-gold-400 fill-gold-400" /><span className="font-medium">No Obligation</span></div>
              </motion.div>
            </div>

            {/* Right: 3D cards */}
            <div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
                <Tilt3D intensity={6} scale={1.02}>
                  <div className="glass-blue rounded-2xl p-7 mb-6"
                    style={{ boxShadow: "0 12px 40px rgba(30,58,138,0.35), 0 0 0 1px rgba(96,165,250,0.15)" }}>
                    <p className="text-sm font-bold text-gold-400 mb-4 tracking-wide uppercase">Services Covered</p>
                    <div className="grid grid-cols-2 gap-3">
                      {benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-blue-100/80 font-medium">
                          <CheckCircle size={13} className="text-gold-400 shrink-0" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt3D>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.35 }}>
                <Tilt3D intensity={8} scale={1.03}>
                  <div className="glass rounded-2xl p-6"
                    style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)" }}>
                    <div className="flex gap-0.5 mb-3">
                      {Array(5).fill(0).map((_, i) => <Star key={i} size={11} className="text-gold-400 fill-gold-400" />)}
                    </div>
                    <p className="text-blue-100/80 text-sm leading-relaxed mb-4 italic">
                      &ldquo;Goldenlining transformed our entire digital presence in 90 days. Revenue up 280%, brand perception completely elevated. Best investment we made.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold-500/20 flex items-center justify-center text-xs font-bold text-gold-400 border border-gold-500/30"
                        style={{ boxShadow: "0 4px 12px rgba(212,175,55,0.2)", transform: "translateZ(15px)" }}>
                        RP
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Robert Phan</div>
                        <div className="text-[10px] text-blue-300/60">CEO, Luminary Capital</div>
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
