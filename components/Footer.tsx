"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const links: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Website Design",      href: "/services" },
    { label: "WordPress Development",href: "/services" },
    { label: "Ecommerce Solutions",  href: "/services" },
    { label: "SEO & AI Visibility",  href: "/services" },
    { label: "Google Ads",           href: "/services" },
    { label: "Branding & Design",    href: "/services" },
  ],
  Company: [
    { label: "About Us",   href: "/about" },
    { label: "Our Team",   href: "/team" },
    { label: "Portfolio",  href: "/portfolio" },
    { label: "Blog",       href: "/blog" },
    { label: "Careers",    href: "/contact" },
  ],
  Support: [
    { label: "Contact Us",       href: "/contact" },
    { label: "Free Consultation",href: "/contact" },
    { label: "Privacy Policy",   href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5" style={{ background: "#0d1f14" }}>
      {/* Background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full blur-3xl opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #d4af37, transparent)" }}
      />

      {/* Top marquee */}
      <div className="border-b border-white/5 py-4 overflow-hidden">
        <div className="flex items-center whitespace-nowrap">
          <div className="marquee-track flex gap-12 items-center">
            {Array(8).fill(0).map((_, i) => (
              <span key={i} className="flex items-center gap-4 shrink-0">
                <span className="text-xs tracking-[0.4em] text-white uppercase">
                  Premium Digital Agency
                </span>
                <span className="w-1 h-1 rounded-full bg-gold-500/40" />
                <span className="text-xs tracking-[0.4em] text-white uppercase">
                  Goldenlining Solution
                </span>
                <span className="w-1 h-1 rounded-full bg-gold-500/40" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <img src="/logo.svg" alt="Goldenlining Solution" className="h-14 w-auto group-hover:opacity-80 transition-opacity" />
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              We build elite digital experiences for serious businesses. Premium strategy, design, and technology for brands that refuse average.
            </p>

            {/* Contact quick */}
            <div className="space-y-2 mb-6">
              <a
                href="tel:+61480684500"
                className="block text-sm text-gray-400 hover:text-gold-400 transition-colors"
              >
                +61 480 684 500
              </a>
              <a
                href="mailto:goldenliningsolution@gmail.com"
                className="block text-sm text-gray-400 hover:text-gold-400 transition-colors"
              >
                goldenliningsolution@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-600 hover:text-gold-400 hover:border-gold-500/20 border border-white/5 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-white tracking-[0.2em] uppercase mb-5">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 animated-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Goldenlining Solution. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">
              Terms of Service
            </a>
            <span className="text-xs text-gray-800 flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#d4af37" }}
              />
              Built for excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
