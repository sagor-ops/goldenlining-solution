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
                background: "#ffffff",
                border: "1px solid #e5e5e5",
                boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
              }}
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top bar */}
              <div className="h-0.5 w-full rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />

              {/* Header */}
              <div className="relative p-8 pb-6" style={{ borderBottom: "1px solid #f0f0f0" }}>
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: "#f5f5f5", border: "1px solid #e5e5e5" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.1)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#f5f5f5")}
                >
                  <X size={14} style={{ color: "#888" }} />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)" }}>
                    <Calendar size={15} style={{ color: "#d4af37" }} />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase font-bold" style={{ color: "#d4af37" }}>
                    Free Consultation
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold mb-1" style={{ color: "#111" }}>
                  Book Your Free 30-Minute Session
                </h2>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Tell us about your project and we&apos;ll prepare a personalised strategy discussion.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mt-4 text-xs" style={{ color: "#9ca3af" }}>
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} style={{ color: "#d4af37" }} /> Same-day response
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield size={11} style={{ color: "#d4af37" }} /> 100% confidential
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={11} style={{ color: "#d4af37" }} /> No obligation
                  </div>
                </div>
              </div>

              {/* Form or Success */}
              <div className="p-8">
                {status === "success" ? (
                  <motion.div className="text-center py-10"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "rgba(212,175,55,0.08)", border: "2px solid rgba(212,175,55,0.3)" }}>
                      <CheckCircle size={36} style={{ color: "#d4af37" }} />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2" style={{ color: "#111" }}>
                      Consultation Request Received!
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6b7280" }}>
                      Our team will contact you shortly to confirm your session details and prepare personalised insights.
                    </p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>
                      Expected response: <span style={{ color: "#111", fontWeight: 600 }}>Within 2 business hours</span>
                    </p>
                    <button onClick={onClose} className="btn-gold mt-8 px-8 py-3 rounded-full text-sm font-semibold">
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      [{ label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", required: true },
                       { label: "Company Name", name: "company", type: "text", placeholder: "Your company", required: false }],
                      [{ label: "Email Address *", name: "email", type: "email", placeholder: "your@email.com", required: true },
                       { label: "Phone Number", name: "phone", type: "tel", placeholder: "+61 xxx xxx xxx", required: false }],
                    ].map((row, ri) => (
                      <div key={ri} className="grid sm:grid-cols-2 gap-4">
                        {row.map((field) => (
                          <div key={field.name}>
                            <label className="text-[10px] tracking-[0.25em] uppercase font-bold block mb-1.5" style={{ color: "rgba(212,175,55,0.8)" }}>
                              {field.label}
                            </label>
                            <input type={field.type} name={field.name}
                              value={formData[field.name as keyof typeof formData]}
                              onChange={handleChange} required={field.required}
                              placeholder={field.placeholder}
                              className="w-full rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400"
                              style={{ background: "#f9f9f9", border: "1px solid #e5e5e5", outline: "none" }}
                              onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                              onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")} />
                          </div>
                        ))}
                      </div>
                    ))}

                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { label: "Service Interested In", name: "service", options: services, placeholder: "Select a service" },
                        { label: "Project Budget", name: "budget", options: budgets, placeholder: "Select budget range" },
                      ].map((sel) => (
                        <div key={sel.name}>
                          <label className="text-[10px] tracking-[0.25em] uppercase font-bold block mb-1.5" style={{ color: "rgba(212,175,55,0.8)" }}>
                            {sel.label}
                          </label>
                          <select name={sel.name} value={formData[sel.name as keyof typeof formData]}
                            onChange={handleChange}
                            className="w-full rounded-xl px-4 py-3 text-sm text-gray-800 appearance-none cursor-pointer"
                            style={{ background: "#f9f9f9", border: "1px solid #e5e5e5", outline: "none" }}
                            onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                            onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}>
                            <option value="">{sel.placeholder}</option>
                            {sel.options.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase font-bold block mb-1.5" style={{ color: "rgba(212,175,55,0.8)" }}>
                        Tell Us About Your Project *
                      </label>
                      <textarea name="message" value={formData.message} onChange={handleChange}
                        required rows={4} placeholder="Describe your project, goals, and any specific challenges..."
                        className="w-full rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none"
                        style={{ background: "#f9f9f9", border: "1px solid #e5e5e5", outline: "none" }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")} />
                    </div>

                    <button type="submit" disabled={status === "loading"}
                      className={`w-full py-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
                        status === "error" ? "" : "btn-gold"
                      }`}
                      style={status === "error" ? { background: "#fef2f2", color: "#ef4444", border: "1px solid #fecaca" } : {}}>
                      {status === "loading" && <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />}
                      {status === "error" && <AlertCircle size={16} />}
                      {status === "idle" && <Send size={16} />}
                      {status === "idle" && "Book Free Consultation"}
                      {status === "loading" && "Submitting..."}
                      {status === "error" && "Something Went Wrong — Try Again"}
                    </button>

                    <p className="text-[10px] text-center" style={{ color: "#bbb" }}>
                      By submitting, you agree to our Privacy Policy. We never share your information.
                    </p>
                  </form>
                )}
              </div>

              {/* Gold bottom bar */}
              <div className="h-0.5 w-full rounded-b-2xl" style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
