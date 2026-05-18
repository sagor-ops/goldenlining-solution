"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ConsultationModal = dynamic(() => import("./ConsultationModal"), { ssr: false });


const trustItems = ["No lock-in contracts", "Free initial consultation", "Results guaranteed"];

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
        onMouseMove={handleMouseMove}
      >

        {/* ── Full-screen hero image (preloaded in layout <head>) ── */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-strip.jpg.png')",
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 40%",
            filter: "saturate(1.2) brightness(0.75)",
            animation: "hero-pan 25s linear infinite alternate",
            willChange: "background-position",
          }}
        />

        {/* ── Gradient overlays for text readability ── */}
        {/* Top-down dark overlay so text is readable */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(13,20,10,0.88) 0%, rgba(13,20,10,0.55) 45%, rgba(13,20,10,0.70) 75%, rgba(13,20,10,0.92) 100%)",
          }}
        />
        {/* Gold-tinted vignette edges */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Left/right dark fade */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(13,20,10,0.4) 0%, transparent 20%, transparent 80%, rgba(13,20,10,0.4) 100%)",
          }}
        />

        {/* ── Subtle grid overlay on top of image ── */}
        <div className="absolute inset-0 z-[3] grid-overlay pointer-events-none" style={{ opacity: 0.15 }} />

        {/* ── Parallax mouse-tracking blobs — image-palette colours ── */}
        <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(40,90,25,0.25) 0%, transparent 65%)",
              transform: `translate(${mouse.x * 28}px, ${mouse.y * 28}px)`,
              transition: "transform 0.7s ease",
            }}
          />
          <div
            className="absolute top-[5%] right-[-8%] w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(15,100,110,0.2) 0%, transparent 65%)",
              transform: `translate(${mouse.x * -32}px, ${mouse.y * -32}px)`,
              transition: "transform 0.55s ease",
            }}
          />
          <div
            className="absolute bottom-[20%] left-[30%] w-[450px] h-[250px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 65%)",
              transform: `translate(${mouse.x * 18}px, ${mouse.y * -18}px)`,
              transition: "transform 0.85s ease",
            }}
          />
        </div>

        {/* ── 3D Orbital rings — gold ── */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[12%] w-48 h-48 pointer-events-none hidden lg:block z-[4]"
          style={{ perspective: "400px" }}
        >
          {[
            { color: "rgba(212,175,55,0.65)", dur: 9, anim: "spin-3d-y", w: 2 },
            { color: "rgba(212,175,55,0.35)", dur: 14, anim: "spin-3d-x", w: 1 },
            { color: "rgba(212,175,55,0.2)", dur: 19, anim: "spin-3d-z", w: 1 },
          ].map((r, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{ border: `${r.w}px solid ${r.color}`, animation: `${r.anim} ${r.dur}s linear infinite` }}
            />
          ))}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{ background: "#d4af37", boxShadow: "0 0 16px rgba(212,175,55,1), 0 0 32px rgba(212,175,55,0.5)" }}
          />
        </div>

        {/* Small orbital bottom-left */}
        <div
          className="absolute bottom-40 left-12 w-16 h-16 pointer-events-none hidden xl:block z-[4]"
          style={{ perspective: "300px" }}
        >
          {["rgba(212,175,55,0.45)", "rgba(212,175,55,0.22)"].map((color, i) => (
            <div key={i} className="absolute inset-0 rounded-full border"
              style={{ borderColor: color, animation: `${i === 0 ? "spin-3d-x" : "spin-3d-z"} ${8 + i * 5}s linear infinite` }}
            />
          ))}
        </div>

        {/* ── Main content — left-aligned ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 pt-28 sm:pt-36 lg:pt-44 pb-14 sm:pb-20 lg:pb-24">
          <div
            className="max-w-2xl"
            style={{
              transform: `perspective(1200px) rotateX(${mouse.y * -1.2}deg) rotateY(${mouse.x * 1.2}deg)`,
              transition: "transform 0.4s ease",
            }}
          >
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-px w-8" style={{ background: "#d4af37" }} />
              <span className="text-[10px] tracking-[0.35em] uppercase font-bold" style={{ color: "#d4af37" }}>
                Web Development &amp; Digital Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display font-bold leading-[1.02] tracking-tight mb-6"
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <span
                className="block text-white"
                style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", transform: "translateZ(0px)" }}
              >
                We Build Digital
              </span>
              <span
                className="block gold-text-animated"
                style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)", transform: "translateZ(30px)", lineHeight: 1 }}
              >
                Experiences
              </span>
              <span
                className="block text-white"
                style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)", transform: "translateZ(0px)", opacity: 0.9 }}
              >
                That Elevate Brands
              </span>
            </motion.h1>

            {/* Gold divider */}
            <motion.div
              className="flex items-center gap-4 mb-7"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              style={{ transformOrigin: "left" }}
            >
              <div className="h-px w-16" style={{ background: "#d4af37" }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#d4af37" }} />
              <div className="h-px w-32" style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }} />
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-base md:text-lg max-w-lg mb-10 leading-relaxed font-light"
              style={{ color: "rgba(255,255,255,0.72)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              From strategy to execution — websites, branding, SEO &amp; AI-powered digital systems for ambitious businesses worldwide.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="group flex items-center justify-center gap-3 px-9 py-4 text-sm font-bold tracking-wide transition-all hover:opacity-90"
                style={{
                  background: "#d4af37",
                  color: "#0d1a08",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                  boxShadow: "0 8px 32px rgba(212,175,55,0.45)",
                }}
              >
                Book Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/portfolio"
                className="group flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide border transition-all hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.3)" }}
              >
                View Our Work
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust items */}
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs font-medium tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span className="w-1 h-1 rotate-45 shrink-0" style={{ background: "#d4af37" }} />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to top, #0d1f14, transparent)" }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] tracking-[0.4em] uppercase font-medium" style={{ color: "rgba(212,175,55,0.6)" }}>Scroll</span>
            <div className="w-px h-9" style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)" }} />
          </div>
        </motion.div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}