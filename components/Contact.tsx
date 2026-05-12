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
  "Content Strategy & Creation",
  "UI/UX Design",
  "WordPress Development",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
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
        body: JSON.stringify({ ...form, source: "contact-page" }),
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
    background: "#f9f9f9",
    border: "1px solid #e5e5e5",
    color: "#111",
    fontSize: "14px",
    padding: "13px 16px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Gold top line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)" }} />

      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4" style={{ color: "#d4af37" }}>
              Get In Touch
            </p>
            <h2 className="font-display font-bold leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#111" }}>
              Ready to Elevate<br />
              <span style={{ color: "#d4af37" }}>Your Brand?</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b7280", maxWidth: "360px" }}>
              Tell us about your project — we&apos;ll get back to you within 24 hours with a tailored strategy.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { label: "Phone",    value: "+61 480 684 500",              href: "tel:+61480684500" },
                { label: "Email",    value: "goldenliningsolution@gmail.com", href: "mailto:goldenliningsolution@gmail.com" },
                { label: "Location", value: "Croydon Park, SA 5008", href: "https://www.google.com/maps/search/?api=1&query=Croydon+Park+South+Australia+5008" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-[10px] tracking-widest uppercase font-bold w-16 shrink-0" style={{ color: "#d4af37" }}>
                    {item.label}
                  </span>
                  <span className="h-px w-4" style={{ background: "rgba(212,175,55,0.4)" }} />
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium transition-colors"
                      style={{ color: "#111" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4af37")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#111")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-medium" style={{ color: "#111" }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-6 border-t" style={{ borderColor: "#f0f0f0" }}>
              <div className="flex gap-1.5">
                {[32, 16, 8].map((w, n) => (
                  <div key={n} className="h-1" style={{ width: w, background: "#d4af37", opacity: 1 - n * 0.28 }} />
                ))}
              </div>
              <span className="text-[10px] tracking-widest uppercase" style={{ color: "#9ca3af" }}>
                Average response: Under 24 hours
              </span>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 px-8"
                style={{ border: "1px solid rgba(212,175,55,0.2)", background: "rgba(212,175,55,0.03)" }}
              >
                <CheckCircle size={44} style={{ color: "#d4af37" }} className="mb-4" />
                <h3 className="font-bold text-xl mb-2" style={{ color: "#111" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>
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
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Name *</label>
                    <input
                      type="text" required placeholder="Your name"
                      value={form.name} onChange={(e) => set("name", e.target.value)}
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                      onBlur={(e)  => (e.target.style.borderColor = "#e5e5e5")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Email *</label>
                    <input
                      type="email" required placeholder="your@email.com"
                      value={form.email} onChange={(e) => set("email", e.target.value)}
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                      onBlur={(e)  => (e.target.style.borderColor = "#e5e5e5")}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Service Interested In</label>
                  <select
                    value={form.service} onChange={(e) => set("service", e.target.value)}
                    style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#d4af37")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(212,175,55,0.2)")}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Message *</label>
                  <textarea
                    required rows={4} placeholder="Tell us about your project…"
                    value={form.message} onChange={(e) => set("message", e.target.value)}
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#d4af37")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(212,175,55,0.2)")}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs" style={{ color: "#f87171" }}>Something went wrong — please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group self-start flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-wide transition-all hover:opacity-90 disabled:opacity-60"
                  style={{
                    background: "#d4af37",
                    color: "#000",
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                    boxShadow: "0 8px 28px rgba(212,175,55,0.35)",
                  }}
                >
                  {status === "loading"
                    ? <><Loader2 size={15} className="animate-spin" /> Sending…</>
                    : <>Send Message <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></>
                  }
                </button>

                <p className="text-[10px]" style={{ color: "#bbb" }}>
                  Your information is kept strictly confidential. We respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      {/* Gold bottom line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)" }} />
    </section>
  );
}
