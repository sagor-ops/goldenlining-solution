"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConsultationModal from "./ConsultationModal";

const navLinks = [
  { label: "Services",   href: "/services" },
  { label: "Portfolio",  href: "/portfolio" },
  { label: "About Us",   href: "/about" },
  { label: "Our Team",   href: "/team" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact",    href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className="transition-all duration-500"
          style={scrolled
            ? { background: "rgba(5,13,31,0.92)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "12px 0" }
            : { background: "transparent", padding: "24px 0" }}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <img
                src="/logo.svg"
                alt="Goldenlining Solution"
                className="h-12 w-auto group-hover:opacity-90 transition-opacity"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 animated-underline ${
                      active ? "text-gold-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
              >
                Free 30-Min Consultation
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2"
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
              className="lg:hidden glass-dark border-t border-white/5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-base py-2 border-b border-white/5 transition-colors ${
                        pathname === link.href
                          ? "text-gold-400"
                          : "text-gray-200 hover:text-gold-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                  className="btn-gold px-6 py-3 rounded-full text-sm font-semibold mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Free 30-Min Consultation
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
