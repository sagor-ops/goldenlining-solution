"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";
import ConsultationModal from "./ConsultationModal";

const stats = [
  { value: "200+", label: "Projects Delivered", color: "#d4af37" },
  { value: "98%",  label: "Client Satisfaction", color: "#3b82f6" },
  { value: "50+",  label: "Global Clients",       color: "#8b5cf6" },
  { value: "7+",   label: "Years Experience",     color: "#10b981" },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setMouse({
      x: (e.clientX - r.width / 2) / r.width,
      y: (e.clientY - r.height / 2) / r.height,
    });
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #050d1f 0%, #0a1628 40%, #0f1f3d 70%, #050d1f 100%)" }}
        onMouseMove={handleMouseMove}
      >
        <ParticleBackground />

        {/* 3D Perspective floor grid — CSS-only foreshortening */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none overflow-hidden">
          <div className="perspective-grid-floor absolute inset-0" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        {/* Parallax blobs — each at different depth/speed */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 65%)",
              transform: `translate(${mouse.x * 25}px, ${mouse.y * 25}px)`,
              transition: "transform 0.6s ease",
            }} />
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)",
              transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)`,
              transition: "transform 0.5s ease",
            }} />
          <div className="absolute bottom-[10%] left-[25%] w-[600px] h-[350px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)",
              transform: `translate(${mouse.x * 15}px, ${mouse.y * -20}px)`,
              transition: "transform 0.8s ease",
            }} />
        </div>

        {/* 3D Orbital rings decoration (top-right) */}
        <div className="absolute top-24 right-12 w-32 h-32 pointer-events-none hidden lg:block" style={{ perspective: "400px" }}>
          {[
            { color: "rgba(212,175,55,0.4)", delay: 0,   dur: 9,  anim: "spin-3d-y" },
            { color: "rgba(59,130,246,0.3)",  delay: 0,   dur: 13, anim: "spin-3d-x" },
            { color: "rgba(139,92,246,0.25)", delay: 0,   dur: 17, anim: "spin-3d-z" },
          ].map((r, i) => (
            <div key={i} className="absolute inset-0 rounded-full border"
              style={{
                borderColor: r.color,
                animation: `${r.anim} ${r.dur}s linear infinite`,
                animationDelay: `${r.delay}s`,
              }} />
          ))}
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-400 opacity-70 blur-[1px]" />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center"
          style={{
            transform: `perspective(1200px) rotateX(${mouse.y * -2}deg) rotateY(${mouse.x * 2}deg)`,
            transition: "transform 0.4s ease",
          }}>

          {/* Badge */}
          <motion.div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse-gold" />
            <span className="text-xs text-gold-400 tracking-[0.2em] uppercase font-semibold">Premium Digital Agency</span>
            <div className="flex gap-0.5 ml-1">{[0,1,2,3,4].map(i => <Star key={i} size={9} className="text-gold-400 fill-gold-400" />)}</div>
          </motion.div>

          {/* Headline with 3D text depth */}
          <motion.h1
            className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-6"
            style={{ transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}>
            <span className="text-white block" style={{ transform: "translateZ(0px)" }}>Turning Vision Into</span>
            <span className="gold-text-animated block text-3d" style={{ transform: "translateZ(30px)", display: "block" }}>Elite Digital</span>
            <span className="text-white block" style={{ transform: "translateZ(0px)" }}>Experiences</span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-3 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            We help ambitious businesses grow with world-class websites, branding, SEO, and intelligent digital systems.
          </motion.p>
          <motion.p className="text-sm text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
            From strategy to execution — we deliver results that elevate brands and accelerate growth.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <button onClick={() => setModalOpen(true)}
              className="btn-gold group flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold tracking-wide"
              style={{ boxShadow: "0 8px 32px rgba(212,175,55,0.35), 0 2px 8px rgba(0,0,0,0.3)" }}>
              Get Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/services"
              className="btn-outline-gold flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide">
              Explore Services
            </Link>
          </motion.div>

          {/* Trust micro-copy */}
          <motion.div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
            {["No lock-in contracts", "Free initial consultation", "Results guaranteed"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-60" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* 3D floating stat cards */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto"
            style={{ perspective: "800px", transformStyle: "preserve-3d" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                className="text-center glass rounded-2xl py-5 px-3 relative overflow-hidden"
                style={{
                  transform: `translateZ(${[20, 40, 30, 50][i]}px)`,
                  animation: `float-3d ${5 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${stat.color}20`,
                  border: `1px solid ${stat.color}20`,
                }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.1 }}>
                {/* Surface highlight */}
                <div className="absolute inset-0 surface-light rounded-2xl" />
                <div className="text-3xl md:text-4xl font-extrabold mb-1 relative z-10"
                  style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}50` }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 tracking-wider uppercase font-medium relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050d1f] to-transparent pointer-events-none" />

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase font-medium">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gold-500/40 to-transparent" />
          </div>
        </motion.div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
