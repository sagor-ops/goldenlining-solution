"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowUpRight, Share2, Twitter, Linkedin, Link2 } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog-posts";

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

function renderContent(markdown: string) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="my-6 space-y-2 list-none p-0">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <div key={key++} className="mt-14 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5" style={{ background: "#d4af37" }} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight" style={{ color: "#111" }}>
            {line.slice(3)}
          </h2>
        </div>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="font-display text-xl font-semibold mt-10 mb-4 leading-snug" style={{ color: "#1a1a1a" }}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      flushList();
      elements.push(
        <div key={key++} className="my-5 pl-5 border-l-4 py-2" style={{ borderColor: "#d4af37" }}>
          <p className="font-semibold text-base" style={{ color: "#0d1f14" }}>
            {line.slice(2, -2)}
          </p>
        </div>
      );
    } else if (line.startsWith("- ")) {
      inList = true;
      const text = line.slice(2);
      const parts = text.split(/\*\*(.*?)\*\*/g);
      listItems.push(
        <li key={key++} className="flex gap-3 items-start text-gray-700 text-base leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#d4af37" }} />
          <span>
            {parts.map((part, pi) =>
              pi % 2 === 1
                ? <strong key={pi} className="font-semibold" style={{ color: "#0d1f14" }}>{part}</strong>
                : part
            )}
          </span>
        </li>
      );
    } else if (line.trim() === "") {
      flushList();
      elements.push(<div key={key++} className="h-3" />);
    } else {
      flushList();
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={key++} className="text-gray-700 text-base md:text-[17px] leading-[1.85] mb-1">
          {parts.map((part, pi) =>
            pi % 2 === 1
              ? <strong key={pi} className="font-semibold" style={{ color: "#0d1f14" }}>{part}</strong>
              : part
          )}
        </p>
      );
    }
  }
  flushList();
  return elements;
}

function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 font-medium mr-1">Share</span>
      <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
        style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.18)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.08)")}>
        <Twitter size={13} style={{ color: "#d4af37" }} />
      </a>
      <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
        style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.18)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.08)")}>
        <Linkedin size={13} style={{ color: "#d4af37" }} />
      </a>
      <button onClick={copyLink}
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
        style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.18)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.08)")}>
        {copied
          ? <span className="text-[9px] font-bold" style={{ color: "#d4af37" }}>✓</span>
          : <Link2 size={13} style={{ color: "#d4af37" }} />}
      </button>
    </div>
  );
}

export default function BlogPostContent({ post, related }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left"
        style={{ scaleX, background: "linear-gradient(90deg, #d4af37, #fbbf24)" }}
      />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-36 pb-20"
        style={{ background: "#0d1f14" }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-[0.15] pointer-events-none" />

        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #d4af37 40%, #d4af37 60%, transparent)" }} />

        {/* Glow blob */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-[0.08] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${post.color}, transparent)` }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-3xl opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #d4af37, transparent)" }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-10 transition-colors group"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4af37")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}>
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Category badge + meta row */}
          <motion.div className="flex flex-wrap items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5"
              style={{ background: `${post.color}18`, color: post.color, border: `1px solid ${post.color}40` }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
              <Clock size={11} style={{ color: "#d4af37" }} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
              <Calendar size={11} style={{ color: "#d4af37" }} /> {post.date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display font-bold text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            {post.title}
          </motion.h1>

          {/* Excerpt / standfirst */}
          <motion.p
            className="text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.55)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            {post.excerpt}
          </motion.p>

          {/* Author + share row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center text-sm font-bold"
                style={{ background: `${post.color}20`, color: post.color, border: `1px solid ${post.color}35` }}>
                {post.author.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{post.author.role} · Goldenlining Solution</p>
              </div>
            </div>
            <ShareButtons title={post.title} />
          </motion.div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #d4af37 25%, #d4af37 75%, transparent 100%)" }} />

      {/* ── ARTICLE BODY ── */}
      <section className="relative" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto px-6 py-16 lg:py-20">

          {/* Article content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {renderContent(post.content)}
          </motion.article>

          {/* Tags */}
          <div className="mt-14 pt-8 flex flex-wrap gap-2" style={{ borderTop: "1px solid #f0f0f0" }}>
            {[post.category, "Digital Strategy", "Goldenlining Solution"].map((tag) => (
              <span key={tag}
                className="text-[10px] tracking-widest uppercase font-semibold px-4 py-1.5"
                style={{ color: "#d4af37", background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom share + author card */}
          <div className="mt-10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ background: "#f9f9f9", border: "1px solid #ebebeb" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: `${post.color}15`, color: post.color, border: `1px solid ${post.color}30` }}>
                {post.author.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{post.author.name}</p>
                <p className="text-xs text-gray-400">{post.author.role}</p>
              </div>
            </div>
            <ShareButtons title={post.title} />
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="relative overflow-hidden py-16" style={{ background: "#0d1f14" }}>
          {/* Gold top border */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #d4af37 40%, #d4af37 60%, transparent)" }} />
          <div className="absolute inset-0 grid-overlay opacity-[0.12] pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl opacity-[0.06] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #d4af37, transparent)" }} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-2" style={{ color: "#d4af37" }}>
                  Continue Reading
                </p>
                <h2 className="font-display font-bold text-white text-2xl md:text-3xl">
                  More <span style={{ color: "#d4af37" }}>Insights</span>
                </h2>
              </div>
              <Link href="/blog"
                className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-70"
                style={{ color: "#d4af37" }}>
                All Articles <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((rp, i) => (
                <motion.div key={rp.slug}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}>
                  <Link href={`/blog/${rp.slug}`}
                    className="group block h-full transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }}>
                    {/* Color top strip */}
                    <div className="h-0.5 w-full" style={{ background: rp.color }} />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[9px] tracking-wider uppercase font-bold px-2 py-0.5"
                          style={{ color: rp.color, background: `${rp.color}12`, border: `1px solid ${rp.color}25` }}>
                          {rp.category}
                        </span>
                        <span className="text-[10px] flex items-center gap-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                          <Clock size={9} /> {rp.readTime}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white leading-snug mb-3 group-hover:text-yellow-200 transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                      <p className="text-xs leading-relaxed line-clamp-3 mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {rp.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: rp.color }}>
                        Read article
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gold bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #d4af37 40%, #d4af37 60%, transparent)" }} />
        </section>
      )}
    </>
  );
}
