"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe, Code2, ShoppingCart, Server, Database,
  Search, Target, PenTool, BarChart3, ClipboardList,
  Palette, Aperture, BookOpen, Printer, Camera,
  ArrowRight, ChevronRight
} from "lucide-react";
import dynamic from "next/dynamic";
const ConsultationModal = dynamic(() => import("./ConsultationModal"), { ssr: false });
import Tilt3D from "./Tilt3D";

const categories = [
  {
    id: "digital", label: "Digital Services", color: "#d4af37", bg: "#fffbeb",
    services: [
      { icon: Globe,        title: "Website Design & Development",  description: "Craft modern, high-performance websites designed to elevate brand identity, user experience, and business growth.",           tags: ["UI/UX", "Performance", "Mobile-First"] },
      { icon: Code2,        title: "WordPress Web Design",          description: "Premium WordPress solutions built with flexibility, performance, security, and elegant design standards that stand apart.",       tags: ["WordPress", "Custom Themes", "Security"] },
      { icon: ShoppingCart, title: "Ecommerce Website Design",      description: "Create immersive ecommerce experiences optimised for conversions, customer trust, and scalable growth.",                        tags: ["WooCommerce", "Shopify", "Conversion"] },
      { icon: Server,       title: "Web Hosting & Support",         description: "Reliable hosting and continuous technical support designed for performance, stability, and peace of mind.",                       tags: ["99.9% Uptime", "24/7 Support", "SSL"] },
      { icon: Database,     title: "Custom Database Integration",   description: "Intelligent database systems that streamline workflows and dramatically improve operational efficiency and data flow.",            tags: ["API Integration", "CRM", "Automation"] },
    ],
  },
  {
    id: "marketing", label: "Marketing", color: "#3b82f6", bg: "#eff6ff",
    services: [
      { icon: Search,       title: "SEO & AI Search Visibility",    description: "Improve visibility across search engines and AI-powered discovery platforms with advanced optimisation strategies.",              tags: ["On-Page SEO", "AI Search", "Technical SEO"] },
      { icon: Target,       title: "Google Ads Services",           description: "Performance-driven advertising campaigns focused on visibility, conversions, and measurable business outcomes.",                    tags: ["PPC", "Remarketing", "Analytics"] },
      { icon: PenTool,      title: "Content Writing & Strategy",    description: "Professionally written content designed to communicate authority, trust, and brand messaging that resonates.",                     tags: ["Copywriting", "Strategy", "Brand Voice"] },
      { icon: BarChart3,    title: "Reporting & Analytics",         description: "Advanced performance tracking and actionable insights that help businesses make informed, confident growth decisions.",              tags: ["GA4", "Dashboards", "KPI Tracking"] },
      { icon: ClipboardList,title: "Marketing Audits",              description: "Comprehensive evaluations of digital performance, uncovering opportunities for optimisation across all channels.",                 tags: ["Full Audit", "Competitor Analysis", "Roadmap"] },
    ],
  },
  {
    id: "design", label: "Graphic Design", color: "#8b5cf6", bg: "#f5f3ff",
    services: [
      { icon: Palette,  title: "Graphic Design",          description: "Premium visual communication solutions crafted to strengthen brand identity, drive engagement, and leave lasting impressions.", tags: ["Brand Assets", "Digital Design", "Print"] },
      { icon: Aperture, title: "Logo Design",             description: "Distinctive logo systems designed to establish memorable and timeless brand recognition across every medium and application.",  tags: ["Custom Logo", "Brand Mark", "Variations"] },
      { icon: BookOpen, title: "Branding & Style Guides", description: "Comprehensive branding systems that ensure visual consistency and premium brand positioning across every touchpoint.",          tags: ["Brand Identity", "Style Guide", "Typography"] },
      { icon: Printer,  title: "Publishing & Print",      description: "Professionally designed print and publishing materials with refined attention to presentation, quality, and impact.",            tags: ["Brochures", "Magazines", "Packaging"] },
      { icon: Camera,   title: "Photo Advice",            description: "Strategic visual guidance to help brands present themselves with professionalism and authentic visual storytelling.",            tags: ["Art Direction", "Styling", "Visual Strategy"] },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("digital");
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <>
      <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "#ffffff" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.03) 0%, transparent 60%)" }} />
        {/* Colored top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${active.color}, transparent)` }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] font-semibold uppercase mb-3 block transition-colors duration-300" style={{ color: active.color }}>
              What We Offer
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Premium Digital <span style={{ color: active.color }}>Services</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Every solution built to the highest standard — strategic thinking, creative excellence, and technical precision.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div className="flex justify-center gap-3 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className="px-7 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border"
                style={activeCategory === cat.id
                  ? { background: cat.color, color: "#fff", borderColor: cat.color, boxShadow: `0 4px 20px ${cat.color}45, 0 0 0 4px ${cat.color}15` }
                  : { background: "#fff", color: "#6b7280", borderColor: "#e5e7eb" }}>
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>

              {active.services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title}
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                    <Tilt3D intensity={8} scale={1.04}>
                      <div className="card-light group cursor-pointer p-7 relative overflow-hidden h-full">
                        {/* Top accent bar on hover */}
                        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ background: `linear-gradient(90deg, ${active.color}, ${active.color}80)` }} />

                        {/* 3D Icon box */}
                        <div className="mb-5 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            width: 52, height: 52,
                            borderRadius: 14,
                            background: `${active.color}15`,
                            border: `1.5px solid ${active.color}25`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: `4px 4px 12px ${active.color}15, 0 2px 4px rgba(0,0,0,0.06)`,
                            transform: "translateZ(20px)",
                          }}>
                          <Icon size={22} style={{ color: active.color }} />
                        </div>

                        <h3 className="font-display text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag) => (
                            <span key={tag} className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-semibold"
                              style={{ background: `${active.color}12`, color: active.color, border: `1px solid ${active.color}20` }}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-300"
                          style={{ color: active.color }}>
                          <span>Learn More</span>
                          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Tilt3D>
                  </motion.div>
                );
              })}

              {/* 3D CTA card */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: active.services.length * 0.07 }}>
                <Tilt3D intensity={10} scale={1.05}>
                  <div className="rounded-[14px] group cursor-pointer p-7 flex flex-col items-center justify-center text-center relative overflow-hidden border-2 border-dashed h-full"
                    style={{ borderColor: `${active.color}40`, background: `linear-gradient(135deg, ${active.color}08, ${active.color}04)` }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${active.color}18`, border: `2px solid ${active.color}35`, boxShadow: `0 8px 24px ${active.color}25`, transform: "translateZ(30px)" }}>
                      <ArrowRight size={24} style={{ color: active.color }} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Discover All Solutions</h3>
                    <p className="text-gray-500 text-sm mb-5">Book a free consultation to explore how we can elevate your digital presence.</p>
                    <button onClick={() => setModalOpen(true)}
                      className="text-sm font-semibold tracking-wide px-6 py-2.5 rounded-full text-white transition-all duration-300"
                      style={{ background: active.color, boxShadow: `0 4px 20px ${active.color}45` }}>
                      Get Started
                    </button>
                  </div>
                </Tilt3D>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
