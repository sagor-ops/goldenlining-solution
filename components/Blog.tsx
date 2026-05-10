"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import Tilt3D from "./Tilt3D";

const categories = ["All", "Strategy", "Design", "SEO", "Technology", "Branding"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <section id="blog" ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.span className="text-xs tracking-[0.3em] text-gold-600 uppercase font-semibold mb-3 block"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>Insights</motion.span>
            <motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              Premium <span style={{ color: "#d4af37" }}>Insights</span>
            </motion.h2>
          </div>
          <motion.div className="flex gap-2.5 flex-wrap"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border"
                style={activeCategory === cat
                  ? { background: "#d4af37", color: "#030712", borderColor: "#d4af37", boxShadow: "0 4px 16px rgba(212,175,55,0.3)" }
                  : { background: "#fff", color: "#6b7280", borderColor: "#e5e7eb" }}>
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {featured && (
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured — 3D tilt */}
            <motion.div className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              <Tilt3D intensity={5} scale={1.02}>
                <Link href={`/blog/${featured.slug}`} className="card-light group block overflow-hidden"
                  style={{ boxShadow: `0 12px 40px ${featured.color}12, 0 4px 16px rgba(0,0,0,0.06)` }}>
                  {/* Image area */}
                  <div className="relative h-56 overflow-hidden rounded-t-[14px]"
                    style={{ background: `linear-gradient(135deg, ${featured.color}25 0%, ${featured.color}08 50%, #f4f7ff 100%)` }}>
                    <div className="absolute inset-0 dot-pattern opacity-30" />
                    <div className="absolute top-6 left-6 text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                      style={{ color: featured.color, background: `${featured.color}18`, border: `1px solid ${featured.color}30`, transform: "translateZ(20px)" }}>
                      FEATURED
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-100">
                      <Clock size={10} /> {featured.readTime}
                    </div>
                    {/* 3D large letter decoration */}
                    <div className="absolute bottom-0 right-6 text-[9rem] font-black leading-none opacity-[0.05] select-none"
                      style={{ color: featured.color, transform: "perspective(300px) rotateY(-15deg)" }}>
                      {featured.category[0]}
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] tracking-wider font-bold uppercase px-2.5 py-1 rounded-full"
                        style={{ color: featured.color, background: `${featured.color}12`, border: `1px solid ${featured.color}20` }}>
                        {featured.category}
                      </span>
                      <span className="text-gray-400 text-xs font-medium">{featured.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gold-700 transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs font-bold" style={{ color: featured.color }}>
                      Read Article <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Tilt3D>
            </motion.div>

            {/* Side posts */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {rest.slice(0, 4).map((post, i) => (
                <motion.div key={post.slug}
                  initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}>
                  <Tilt3D intensity={6} scale={1.03}>
                    <Link href={`/blog/${post.slug}`} className="card-light group flex gap-4 p-5 block"
                      style={{ boxShadow: `0 4px 20px ${post.color}08` }}>
                      <div className="w-1 rounded-full shrink-0 self-stretch"
                        style={{ background: `linear-gradient(180deg, ${post.color}, ${post.color}40)` }} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[9px] tracking-wider font-bold uppercase" style={{ color: post.color }}>{post.category}</span>
                          <span className="text-gray-400 text-[9px] flex items-center gap-0.5 font-medium"><Clock size={9} /> {post.readTime}</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 group-hover:text-gold-700 transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                      </div>
                      <ArrowUpRight size={14} className="text-gray-300 group-hover:text-gold-500 transition-colors shrink-0 mt-1" />
                    </Link>
                  </Tilt3D>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <motion.div className="text-center mt-12"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}>
          <Link href="/blog" className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide inline-block">
            Explore All Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
