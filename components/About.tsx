"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Zap, Award, Target, Globe } from "lucide-react";
import Tilt3D from "./Tilt3D";

const pillars = [
  { icon: Zap,    label: "Innovation",   color: "#f59e0b" },
  { icon: Award,  label: "Quality",      color: "#d4af37" },
  { icon: Target, label: "Elegance",     color: "#8b5cf6" },
  { icon: Globe,  label: "Global Reach", color: "#3b82f6" },
];

const timeline = [
  { year: "2017", title: "The Beginning",   text: "Founded with a singular vision: to help businesses build digital presences worthy of their ambitions.",               color: "#d4af37" },
  { year: "2019", title: "Going Global",    text: "Expanded across Asia-Pacific markets, delivering elite digital solutions for international brands.",                  color: "#3b82f6" },
  { year: "2021", title: "AI Integration",  text: "Pioneered AI-driven SEO and digital visibility strategies, positioning clients ahead of the evolving search landscape.", color: "#8b5cf6" },
  { year: "2024", title: "Premium Agency",  text: "Recognised as one of the region's leading premium digital agencies, with 200+ successful projects globally.",         color: "#10b981" },
];

const stats = [
  { value: "200+", label: "Projects",     color: "#d4af37" },
  { value: "98%",  label: "Satisfaction", color: "#3b82f6" },
  { value: "50+",  label: "Clients",      color: "#8b5cf6" },
  { value: "7+",   label: "Years",        color: "#10b981" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "#f4f7ff" }}>
      <div className="absolute inset-0 grid-overlay-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 3D Stats bar */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
          style={{ perspective: "800px" }}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          {stats.map((stat, i) => (
            <Tilt3D key={stat.label} intensity={12} scale={1.05}>
              <div className="card-light text-center py-7 px-4 relative overflow-hidden"
                style={{
                  boxShadow: `0 8px 32px ${stat.color}12, 0 2px 8px rgba(0,0,0,0.06)`,
                  border: `1px solid ${stat.color}20`,
                  animation: `float-3d ${5 + i * 0.8}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}>
                <div className="absolute inset-0 surface-light" />
                <div className="text-4xl font-extrabold mb-1 relative z-10"
                  style={{ color: stat.color, textShadow: `2px 3px 8px ${stat.color}30` }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 tracking-wider uppercase font-semibold relative z-10">{stat.label}</div>
              </div>
            </Tilt3D>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.span className="text-xs tracking-[0.3em] text-gold-600 uppercase font-semibold mb-3 block"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>Our Story</motion.span>
            <motion.h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              Digital Excellence<br />With{" "}<span style={{ color: "#d4af37" }}>Human Creativity</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-base leading-relaxed mb-5"
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              Goldenlining Solution was built with one mission: to help businesses transform ideas into world-class digital experiences.
            </motion.p>
            <motion.p className="text-gray-500 text-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25 }}>
              We combine strategy, creativity, technology, branding, and performance marketing to create digital systems that elevate brands globally.
            </motion.p>

            {/* 3D pillar cards */}
            <motion.div className="grid grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Tilt3D key={pillar.label} intensity={8} scale={1.04}>
                    <div className="card-light flex items-center gap-3 px-4 py-3.5 group"
                      style={{ boxShadow: `0 4px 16px ${pillar.color}10` }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${pillar.color}15`, border: `1.5px solid ${pillar.color}25`, boxShadow: `2px 3px 8px ${pillar.color}15`, transform: "translateZ(10px)" }}>
                        <Icon size={16} style={{ color: pillar.color }} />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{pillar.label}</span>
                    </div>
                  </Tilt3D>
                );
              })}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
              <Link href="/team" className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide inline-block">Meet Our Team</Link>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-blue-400/20 to-transparent" />
            <div className="space-y-6 pl-12">
              {timeline.map((item, i) => (
                <motion.div key={item.year} className="relative"
                  initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}>
                  <div className="absolute -left-[2.75rem] top-4 w-3 h-3 rounded-full border-2 bg-white"
                    style={{ borderColor: item.color, boxShadow: `0 0 8px ${item.color}60` }}>
                    <div className="absolute inset-0.5 rounded-full opacity-60" style={{ background: item.color }} />
                  </div>
                  <Tilt3D intensity={6} scale={1.02}>
                    <div className="card-light p-5" style={{ boxShadow: `0 4px 20px ${item.color}10` }}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold tracking-widest px-2.5 py-0.5 rounded-full"
                          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}25` }}>
                          {item.year}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                    </div>
                  </Tilt3D>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
