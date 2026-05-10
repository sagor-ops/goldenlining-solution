"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Globe } from "lucide-react";
import Tilt3D from "./Tilt3D";

const team = [
  {
    name: "Alexandra Chen",
    role: "Creative Director",
    bio: "10+ years shaping brand identity for global luxury and tech companies. Passionate about the intersection of aesthetics and business outcomes.",
    color: "#d4af37",
    initials: "AC",
  },
  {
    name: "Marcus Wright",
    role: "Lead Developer",
    bio: "Full-stack architect with deep expertise in scalable web systems, performance optimisation, and cutting-edge technology stacks.",
    color: "#3b82f6",
    initials: "MW",
  },
  {
    name: "Sofia Martinez",
    role: "Growth Strategist",
    bio: "Data-driven marketing specialist who has driven 500%+ ROAS for enterprise clients across retail, finance, and B2B verticals.",
    color: "#8b5cf6",
    initials: "SM",
  },
  {
    name: "James Okafor",
    role: "SEO & AI Specialist",
    bio: "Pioneer in AI-driven search visibility, helping brands dominate both traditional and emerging AI-powered discovery platforms.",
    color: "#10b981",
    initials: "JO",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1e1b4b 70%, #0f172a 100%)" }}>
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }}
      />
      {/* 3D Orbital rings */}
      <div className="absolute top-16 right-16 w-32 h-32 pointer-events-none hidden xl:block" style={{ perspective: "500px" }}>
        {[
          { color: "rgba(212,175,55,0.4)", dur: 9,  anim: "spin-3d-y" },
          { color: "rgba(139,92,246,0.3)", dur: 14, anim: "spin-3d-x" },
        ].map((r, i) => (
          <div key={i} className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: r.color, animation: `${r.anim} ${r.dur}s linear infinite` }} />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: "#d4af37", boxShadow: "0 0 10px rgba(212,175,55,0.8)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-xs tracking-[0.3em] text-gold-500 uppercase font-medium mb-3 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            The Team
          </motion.span>
          <motion.h2
            className="font-display text-4xl md:text-6xl font-bold text-white mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Exceptional{" "}
            <span className="gold-text-animated text-3d">Minds</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our team of specialists brings deep expertise, creative vision, and relentless drive to every project we undertake.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
            >
              <Tilt3D intensity={9} scale={1.04}>
              <div className="glass group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{ boxShadow: `0 8px 32px ${member.color}15, 0 2px 8px rgba(0,0,0,0.3)` }}>
              <div className="absolute inset-0 surface-light rounded-2xl pointer-events-none" />
              <div className="p-7 relative z-10">
                {/* Avatar */}
                <div className="relative mb-5">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}30, ${member.color}15)`,
                      border: `2px solid ${member.color}35`,
                      boxShadow: `0 6px 20px ${member.color}20`,
                      transform: "translateZ(20px)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2"
                    style={{ background: member.color, borderColor: "#0f172a", boxShadow: `0 0 8px ${member.color}80` }}
                  />
                </div>

                {/* Info */}
                <h3 className="font-display text-base font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-medium mb-3 tracking-wide" style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className="text-xs text-blue-200/60 leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Globe].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-blue-300/50 hover:text-white transition-colors"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <Icon size={12} />
                    </button>
                  ))}
                </div>

                {/* Hover color bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                />
              </div>
              </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-blue-200/60 text-sm mb-4">
            We&apos;re always looking for exceptional talent.
          </p>
          <Link href="/contact" className="btn-outline-gold px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide inline-block">
            Join Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
