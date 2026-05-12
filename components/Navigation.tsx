"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConsultationModal from "./ConsultationModal";

const navLinks = [
  { label: "Services",  href: "/services",  num: "01" },
  { label: "Portfolio", href: "/portfolio", num: "02" },
  { label: "About",     href: "/about",     num: "03" },
  { label: "Team",      href: "/team",      num: "04" },
  { label: "Blog",      href: "/blog",      num: "05" },
  { label: "Contact",   href: "/contact",   num: "06" },
];

export default function Navigation() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Gold announcement strip ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 text-center py-1.5 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] uppercase font-bold overflow-hidden whitespace-nowrap"
        style={{ background: "#000000", color: "#d4af37" }}
      >
        <span className="sm:hidden">Premium Digital Agency&nbsp;·&nbsp;Australia</span>
        <span className="hidden sm:inline">Web Development &amp; Digital Agency&nbsp;&nbsp;·&nbsp;&nbsp;Australia &amp; Global&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2017</span>
      </div>

      {/* ── Main header (offset by strip) ── */}
      <motion.header
        className="fixed left-0 right-0 z-40"
        style={{ top: 30 }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className="transition-all duration-500"
          style={
            scrolled
              ? {
                  background: "rgba(13,31,20,0.97)",
                  backdropFilter: "blur(20px)",
                  borderBottom: "1px solid rgba(212,175,55,0.25)",
                  padding: "12px 0",
                }
              : { background: "transparent", padding: "22px 0" }
          }
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">

            {/* Logo with gold accent bar */}
            <Link href="/" className="group flex items-center gap-3 shrink-0">
              <div
                className="transition-all duration-400"
                style={{
                  width: 3,
                  height: 36,
                  background: "#d4af37",
                  boxShadow: "0 0 10px rgba(212,175,55,0.6)",
                }}
              />
              <img
                src="/logo.svg"
                alt="Goldenlining Solution"
                className="h-10 w-auto group-hover:opacity-90 transition-opacity"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative px-5 py-2 flex items-center gap-1.5 text-sm font-medium tracking-wide transition-all duration-300"
                    style={{ color: active ? "#d4af37" : "rgba(255,255,255,0.65)" }}
                  >
                    <span
                      className="font-mono text-[8px] tracking-widest opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      style={{ color: "#d4af37" }}
                    >
                      {link.num}
                    </span>
                    <span className="group-hover:text-white transition-colors">{link.label}</span>
                    {active && (
                      <span
                        className="absolute bottom-0 left-5 right-5 h-px"
                        style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA — angled clip-path */}
            <div className="hidden lg:block shrink-0">
              <button
                onClick={() => setModalOpen(true)}
                className="group flex items-center gap-2 px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:opacity-90"
                style={{
                  background: "#d4af37",
                  color: "#000000",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                  boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
                }}
              >
                Free Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden border-t"
              style={{ background: "rgba(13,31,20,0.98)", borderColor: "rgba(212,175,55,0.2)" }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 py-3 border-b text-sm font-medium transition-colors"
                      style={{
                        borderColor: "rgba(212,175,55,0.1)",
                        color: pathname === link.href ? "#d4af37" : "rgba(255,255,255,0.75)",
                      }}
                    >
                      <span className="font-mono text-[9px] tracking-widest" style={{ color: "#d4af37" }}>
                        {link.num}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                  className="mt-4 py-3 text-sm font-bold tracking-wide text-center"
                  style={{ background: "#d4af37", color: "#000" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  Book Free Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
