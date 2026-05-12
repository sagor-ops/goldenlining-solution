"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Tilt3D from "./Tilt3D";
import JoinTeamModal from "./JoinTeamModal";

const team = [
  {
    name: "ABS",
    role: "Creative Director",
    bio: "10+ years shaping brand identity for global luxury and tech companies. Passionate about the intersection of aesthetics and business outcomes.",
    color: "#d4af37",
    initials: "AB",
  },
  {
    name: "DAS",
    role: "Lead Developer",
    bio: "Full-stack architect with deep expertise in scalable web systems, performance optimisation, and cutting-edge technology stacks.",
    color: "#3b82f6",
    initials: "DA",
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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="team" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: "#ffffff", borderTop: "1px solid #f0f0f0" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

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
            className="font-display text-4xl md:text-6xl font-bold mb-5"
            style={{ color: "#111111" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Exceptional{" "}
            <span style={{ color: "#d4af37" }}>Minds</span>
          </motion.h2>
          <motion.p
            className="max-w-lg mx-auto text-base leading-relaxed"
            style={{ color: "#6b7280" }}
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
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-300"
                style={{ background: "#ffffff", border: "1px solid #ebebeb", boxShadow: `0 4px 24px ${member.color}10, 0 1px 4px rgba(0,0,0,0.06)` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${member.color}40`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${member.color}18, 0 2px 8px rgba(0,0,0,0.08)`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#ebebeb"; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${member.color}10, 0 1px 4px rgba(0,0,0,0.06)`; }}>
              <div className="absolute inset-0 rounded-2xl pointer-events-none" />
              <div className="p-7 relative z-10">
                {/* Avatar */}
                <div className="relative mb-5">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-2xl font-display transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}20, ${member.color}08)`,
                      border: `2px solid ${member.color}35`,
                      color: member.color,
                      boxShadow: `0 6px 20px ${member.color}15`,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2"
                    style={{ background: member.color, borderColor: "#ffffff", boxShadow: `0 0 8px ${member.color}60` }}
                  />
                </div>

                {/* Info */}
                <h3 className="font-display text-base font-bold mb-1 transition-colors" style={{ color: "#111111" }}>
                  {member.name}
                </h3>
                <p className="text-[11px] font-semibold mb-3 tracking-[0.08em] uppercase" style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className="text-[13px] leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                  {member.bio}
                </p>


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
          <p className="text-sm mb-4" style={{ color: "#9ca3af" }}>
            We&apos;re always looking for exceptional talent.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-outline-gold px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide inline-block"
          >
            Join Our Team
          </button>
        </motion.div>
      </div>

      <JoinTeamModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
