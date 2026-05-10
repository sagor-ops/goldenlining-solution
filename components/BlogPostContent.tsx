"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

function renderContent(markdown: string) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-display text-2xl md:text-3xl font-bold text-white mt-12 mb-4 leading-tight">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-display text-xl font-semibold text-white mt-8 mb-3 leading-tight">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-white mb-3">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="text-gray-300 mb-2 flex gap-3">
          <span className="text-gold-500 mt-1 shrink-0">▸</span>
          <span>{line.slice(2)}</span>
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      // Handle inline bold
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={key++} className="text-gray-300 text-base leading-[1.9] mb-1">
          {parts.map((part, pi) =>
            pi % 2 === 1
              ? <strong key={pi} className="text-white font-semibold">{part}</strong>
              : part
          )}
        </p>
      );
    }
  }
  return elements;
}

export default function BlogPostContent({ post, related }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${post.color}, transparent)` }}
        />
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${post.color}60, transparent)` }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold-400 transition-colors mb-8 group">
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Category + meta */}
          <motion.div className="flex flex-wrap items-center gap-3 mb-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full"
              style={{ background: `${post.color}18`, color: post.color, border: `1px solid ${post.color}30` }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <Clock size={11} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600">
              <Calendar size={11} /> {post.date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display font-bold text-3xl md:text-5xl text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            {post.excerpt}
          </motion.p>

          {/* Author */}
          <motion.div className="flex items-center gap-3 pt-6 border-t border-white/5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
              style={{ background: `${post.color}20`, color: post.color, border: `1px solid ${post.color}30` }}>
              {post.author.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-4xl mx-auto px-6">
        <div className="h-full" style={{ background: `linear-gradient(90deg, transparent, ${post.color}30, transparent)` }} />
      </div>

      {/* Article body */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="prose-goldenlining"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ul className="list-none p-0 m-0">
              {renderContent(post.content)}
            </ul>
          </motion.div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-2">
            {[post.category, "Digital Strategy", "Goldenlining"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-wider uppercase text-gray-600 px-3 py-1 rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 border-t border-white/5" style={{ background: "#050d1f" }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              More <span className="gold-text">Insights</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((rp, i) => (
                <motion.div key={rp.slug}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/blog/${rp.slug}`} className="gradient-border group block p-5 hover:glass-gold transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full"
                        style={{ color: rp.color, background: `${rp.color}12`, border: `1px solid ${rp.color}25` }}>
                        {rp.category}
                      </span>
                      <span className="text-gray-700 text-[9px] flex items-center gap-1">
                        <Clock size={9} />{rp.readTime}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white leading-snug mb-2 group-hover:text-gold-300 transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{rp.excerpt}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs font-medium" style={{ color: rp.color }}>
                      Read article <ArrowUpRight size={12} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
