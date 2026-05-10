"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, AlertCircle, Calendar, Clock, Shield } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const services = [
  "Website Design & Development",
  "WordPress Web Design",
  "Ecommerce Website Design",
  "Web Hosting & Support",
  "Custom Database Integration",
  "SEO & AI Search Visibility",
  "Google Ads Services",
  "Content Writing & Strategy",
  "Reporting & Analytics",
  "Marketing Audits",
  "Graphic Design",
  "Logo Design",
  "Branding & Style Guides",
  "Full Digital Transformation",
  "Other / Multiple Services",
];

const budgets = [
  "Prefer to discuss",
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "consultation-modal" }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #050d1f 100%)",
                border: "1px solid rgba(212,175,55,0.15)",
                boxShadow: "0 0 60px rgba(212,175,55,0.1), 0 40px 80px rgba(0,0,0,0.6)",
              }}
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-8 pb-6 border-b border-white/5">
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                  }}
                />

                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full glass flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 border border-white/10 transition-all duration-200"
                >
                  <X size={14} />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.25)" }}
                  >
                    <Calendar size={15} className="text-gold-400" />
                  </div>
                  <span className="text-xs tracking-[0.3em] text-gold-500 uppercase font-medium">
                    Free Consultation
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold text-white mb-1">
                  Book Your Free 30-Minute Session
                </h2>
                <p className="text-gray-400 text-sm">
                  Tell us about your project and we&apos;ll prepare a personalised strategy discussion.
                </p>

                {/* Trust badges */}
                <div className="flex gap-4 mt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} className="text-gold-600" />
                    Same-day response
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield size={11} className="text-gold-600" />
                    100% confidential
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-gold-600" />
                    No obligation
                  </div>
                </div>
              </div>

              {/* Form or Success */}
              <div className="p-8">
                {status === "success" ? (
                  <motion.div
                    className="text-center py-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "rgba(212,175,55,0.1)", border: "2px solid rgba(212,175,55,0.3)" }}
                    >
                      <CheckCircle size={36} className="text-gold-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      Your Consultation Request Has Been Received
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      Our team will contact you shortly to confirm your session details and prepare personalised insights for your business.
                    </p>
                    <p className="text-xs text-gray-600">
                      Expected response: <span className="text-white">Within 2 business hours</span>
                    </p>
                    <button
                      onClick={onClose}
                      className="btn-gold mt-8 px-8 py-3 rounded-full text-sm font-semibold"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5 block">
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
                        <label className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5 block">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="premium-input w-full rounded-xl px-4 py-3 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5 block">
                          Email Address *
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
                        <label className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5 block">
                          Phone Number
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

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5 block">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="premium-input w-full rounded-xl px-4 py-3 text-sm appearance-none bg-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s} style={{ background: "#0a1628" }}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5 block">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="premium-input w-full rounded-xl px-4 py-3 text-sm appearance-none bg-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} style={{ background: "#0a1628" }}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-gray-500 tracking-widest uppercase mb-1.5 block">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your project, goals, and any specific challenges you're facing..."
                        className="premium-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`w-full py-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
                        status === "error"
                          ? "bg-red-500/15 text-red-400 border border-red-500/30"
                          : "btn-gold"
                      }`}
                    >
                      {status === "loading" && (
                        <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                      )}
                      {status === "error" && <AlertCircle size={16} />}
                      {status === "idle" && <Send size={16} />}

                      {status === "idle" && "Book Free Consultation"}
                      {status === "loading" && "Submitting Your Request..."}
                      {status === "error" && "Something Went Wrong — Try Again"}
                    </button>

                    <p className="text-[10px] text-gray-700 text-center">
                      By submitting, you agree to our Privacy Policy. We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
