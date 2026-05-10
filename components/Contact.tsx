"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import Tilt3D from "./Tilt3D";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+61 480 684 500",
    href: "tel:+61480684500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sobur112@gmail.com",
    href: "mailto:sobur112@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Australia & Global",
    href: null,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #050d1f 0%, #0f172a 40%, #0a1628 100%)" }}>
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
      />
      {/* 3D Orbital rings top-right */}
      <div className="absolute top-12 right-12 w-28 h-28 pointer-events-none hidden xl:block" style={{ perspective: "500px" }}>
        {[
          { color: "rgba(212,175,55,0.35)", dur: 11, anim: "spin-3d-y" },
          { color: "rgba(59,130,246,0.25)",  dur: 17, anim: "spin-3d-x" },
        ].map((r, i) => (
          <div key={i} className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: r.color, animation: `${r.anim} ${r.dur}s linear infinite` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.span
              className="text-xs tracking-[0.3em] text-gold-500 uppercase font-medium mb-3 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              Get In Touch
            </motion.span>

            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Ready to Elevate
              <br />
              Your{" "}
              <span className="gold-text">Digital Presence?</span>
            </motion.h2>

            <motion.p
              className="text-gray-400 text-base leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Connect with our team and discover premium digital solutions tailored specifically to your business goals and ambitions.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                          <Icon size={16} className="text-gold-500" />
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-600 uppercase tracking-wider">{item.label}</div>
                          <div className="text-sm font-medium text-white group-hover:text-gold-300 transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-gold-500" />
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-600 uppercase tracking-wider">{item.label}</div>
                          <div className="text-sm font-medium text-white">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Response time */}
            <motion.div
              className="glass-gold rounded-xl p-4 inline-flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-400">
                Average response time: <span className="text-white font-medium">Under 2 hours</span>
              </span>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="gradient-border p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="premium-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase mb-1.5 block">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="premium-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase mb-1.5 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="premium-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase mb-1.5 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+61 xxx xxx xxx"
                    className="premium-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 tracking-wider uppercase mb-1.5 block">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="premium-input w-full rounded-xl px-4 py-3 text-sm appearance-none"
                >
                  <option value="">Select a service</option>
                  <option>Website Design & Development</option>
                  <option>WordPress Web Design</option>
                  <option>Ecommerce Website Design</option>
                  <option>SEO & AI Search Visibility</option>
                  <option>Google Ads Services</option>
                  <option>Branding & Logo Design</option>
                  <option>Content Writing & Strategy</option>
                  <option>Full Digital Transformation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500 tracking-wider uppercase mb-1.5 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project and goals..."
                  className="premium-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : status === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "btn-gold"
                }`}
              >
                {status === "loading" && (
                  <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                )}
                {status === "success" && <CheckCircle size={16} />}
                {status === "error" && <AlertCircle size={16} />}
                {status === "idle" && <Send size={16} />}
                {status === "idle" && "Send Message"}
                {status === "loading" && "Sending..."}
                {status === "success" && "Message Sent Successfully"}
                {status === "error" && "Failed — Please Try Again"}
              </button>

              <p className="text-[10px] text-gray-600 text-center">
                Your information is kept strictly confidential. We respond within 2 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
