"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const services = [
  "Web Design & Development",
  "SEO & AI Search Visibility",
  "Google Ads Management",
  "Ecommerce Development",
  "Branding & Logo Design",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "homepage-strip" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "14px",
    padding: "13px 16px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0d1f14" }}
    >
      {/* Top border matching footer */}
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Gold glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.04), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4" style={{ color: "#d4af37" }}>
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Ready to Elevate<br />
              <span style={{ color: "#d4af37" }}>Your Brand?</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)", maxWidth: "340px" }}>
              Tell us about your project — we&apos;ll get back to you within 24 hours with a tailored strategy.
            </p>
            <div className="flex flex-col gap-3">
              {["Free initial consultation", "No lock-in contracts", "Same-day response"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span className="w-1.5 h-1.5 rotate-45 shrink-0" style={{ background: "#d4af37" }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center text-center py-12 px-8"
                style={{ border: "1px solid rgba(212,175,55,0.25)", background: "rgba(212,175,55,0.04)" }}
              >
                <CheckCircle size={40} style={{ color: "#d4af37" }} className="mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#d4af37" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Service Interested In</label>
                  <select
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  >
                    <option value="" style={{ background: "#050d1f" }}>Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ background: "#050d1f" }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Message *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs" style={{ color: "#f87171" }}>Something went wrong — please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full sm:w-auto sm:self-start flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wide transition-all hover:opacity-90 disabled:opacity-60"
                  style={{
                    background: "#d4af37",
                    color: "#000",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                    boxShadow: "0 8px 28px rgba(212,175,55,0.35)",
                  }}
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send Message <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom border matching footer */}
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }} />
    </section>
  );
}
