"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle, Loader2, ArrowRight, FileText } from "lucide-react";

const roles = [
  "Web Developer",
  "UI/UX Designer",
  "SEO Specialist",
  "Digital Marketing Manager",
  "WordPress Developer",
  "React / Next.js Developer",
  "Project Manager",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#f9f9f9",
  border: "1px solid #e5e5e5",
  color: "#111",
  fontSize: "14px",
  padding: "12px 16px",
  outline: "none",
  borderRadius: "8px",
  transition: "border-color 0.2s",
};

export default function JoinTeamModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    name: "", email: "", location: "", role: "", techStack: "", qualification: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleFile = (file: File | null) => {
    if (!file) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) { alert("Please upload a PDF or Word document."); return; }
    if (file.size > 5 * 1024 * 1024) { alert("File size must be under 5MB."); return; }
    setCvFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (cvFile) fd.append("cv", cvFile);

    try {
      const res = await fetch("/api/careers", { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setForm({ name: "", email: "", location: "", role: "", techStack: "", qualification: "" });
    setCvFile(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{
                background: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: "16px",
                boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
              }}
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 24 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top bar */}
              <div className="h-0.5 w-full rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />

              {/* Header */}
              <div className="flex items-start justify-between px-8 pt-7 pb-5" style={{ borderBottom: "1px solid #f0f0f0" }}>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-1.5" style={{ color: "#d4af37" }}>
                    Careers at Goldenlining
                  </p>
                  <h2 className="font-bold text-xl" style={{ color: "#111" }}>Join Our Team</h2>
                  <p className="text-xs mt-1" style={{ color: "#9ca3af" }}>
                    Fill in your details and we&apos;ll be in touch if there&apos;s a great match.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all ml-4 shrink-0 mt-1"
                  style={{ background: "#f5f5f5", border: "1px solid #e5e5e5" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.1)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#f5f5f5")}
                >
                  <X size={14} style={{ color: "#888" }} />
                </button>
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <CheckCircle size={48} style={{ color: "#d4af37" }} className="mb-4" />
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#111" }}>Application Received!</h3>
                    <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
                      Thanks for your interest. We&apos;ll review your application and reach out if there&apos;s a fit.
                    </p>
                    <button
                      onClick={handleReset}
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: "#d4af37" }}
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Full Name *</label>
                        <input type="text" required placeholder="Your full name" value={form.name}
                          onChange={(e) => set("name", e.target.value)} style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Email *</label>
                        <input type="email" required placeholder="your@email.com" value={form.email}
                          onChange={(e) => set("email", e.target.value)} style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")} />
                      </div>
                    </div>

                    {/* Location + Role */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Location *</label>
                        <input type="text" required placeholder="City, Country" value={form.location}
                          onChange={(e) => set("location", e.target.value)} style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Role Applying For</label>
                        <select value={form.role} onChange={(e) => set("role", e.target.value)}
                          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}>
                          <option value="">Select a role…</option>
                          {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Tech Stack *</label>
                      <textarea required rows={3} placeholder="e.g. React, Next.js, TypeScript, WordPress, Tailwind CSS, Node.js…"
                        value={form.techStack} onChange={(e) => set("techStack", e.target.value)}
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>

                    {/* Qualification */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Qualifications & Experience *</label>
                      <textarea required rows={3} placeholder="Describe your education, years of experience, and key achievements…"
                        value={form.qualification} onChange={(e) => set("qualification", e.target.value)}
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>

                    {/* CV Upload */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>Upload CV / Resume</label>
                      <div
                        className="relative flex flex-col items-center justify-center gap-2 py-6 px-4 cursor-pointer transition-all duration-200"
                        style={{
                          border: `1.5px dashed ${dragOver ? "rgba(212,175,55,0.6)" : "#e0e0e0"}`,
                          borderRadius: "8px",
                          background: dragOver ? "rgba(212,175,55,0.04)" : "#fafafa",
                        }}
                        onClick={() => fileRef.current?.click()}
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setDragOver(false);
                          handleFile(e.dataTransfer.files[0] ?? null);
                        }}
                      >
                        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden"
                          onChange={(e) => handleFile(e.target.files?.[0] ?? null)} />
                        {cvFile ? (
                          <>
                            <FileText size={22} style={{ color: "#d4af37" }} />
                            <span className="text-xs font-medium" style={{ color: "#d4af37" }}>{cvFile.name}</span>
                            <span className="text-[10px]" style={{ color: "#9ca3af" }}>
                              {(cvFile.size / 1024).toFixed(0)} KB — click to change
                            </span>
                          </>
                        ) : (
                          <>
                            <Upload size={20} style={{ color: "#c0c0c0" }} />
                            <span className="text-xs" style={{ color: "#9ca3af" }}>
                              Drag & drop or <span style={{ color: "#d4af37" }}>browse</span>
                            </span>
                            <span className="text-[10px]" style={{ color: "#bbb" }}>PDF or Word · Max 5MB</span>
                          </>
                        )}
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-xs" style={{ color: "#f87171" }}>Something went wrong — please try again.</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group self-start flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-wide transition-all hover:opacity-90 disabled:opacity-60 mt-1"
                      style={{
                        background: "#d4af37",
                        color: "#000",
                        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                        boxShadow: "0 8px 28px rgba(212,175,55,0.3)",
                      }}
                    >
                      {status === "loading" ? (
                        <><Loader2 size={15} className="animate-spin" /> Submitting…</>
                      ) : (
                        <>Submit Application <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </button>
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
