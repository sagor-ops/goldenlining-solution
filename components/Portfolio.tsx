"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Tilt3D from "./Tilt3D";

const categories = [
  "All",
  "Finance",
  "Technology",
  "Healthcare",
  "Education",
  "Web Design",
  "Industry",
  "Ecommerce",
  "Hospitality",
  "Non-Profit",
];

const projects = [
  { id:1,  title:"Ask CSS",                   url:"https://www.askcss.com.au/",                    category:"Non-Profit",  accent:"#10b981", pattern:"cross", size:"normal", desc:"Community support services platform connecting clients with disability and welfare support across Australia." },
  { id:2,  title:"Equifund",                  url:"https://equifund.com.au/",                      category:"Finance",     accent:"#3b82f6", pattern:"grid",  size:"large",  desc:"Australian equity funding platform with investor portal and professional deal flow management system." },
  { id:3,  title:"Maricc",                    url:"https://maricc.com/",                           category:"Web Design",  accent:"#ec4899", pattern:"dots",  size:"normal", desc:"Modern corporate website with premium branding, smooth animations and lead generation architecture." },
  { id:4,  title:"De La Mar Academy",         url:"https://delamaracademy.co.uk/",                 category:"Education",   accent:"#8b5cf6", pattern:"lines", size:"normal", desc:"UK performing arts academy with course enrolment, events calendar and multimedia showcase." },
  { id:5,  title:"SB Event Horizon",          url:"https://sbeventhorizon.com/",                   category:"Hospitality", accent:"#f97316", pattern:"cross", size:"normal", desc:"Event management platform with booking system and immersive visual experience design." },
  { id:6,  title:"Halstein",                  url:"https://halstein.qodeinteractive.com/",         category:"Web Design",  accent:"#d4af37", pattern:"grid",  size:"large",  desc:"Premium lifestyle brand digital experience with editorial design and seamless ecommerce integration." },
  { id:7,  title:"HRM Tech",                  url:"http://www.hrmtech.co.uk/",                     category:"Technology",  accent:"#0ea5e9", pattern:"dots",  size:"normal", desc:"UK HR technology company showcasing workforce management solutions and enterprise SaaS platform." },
  { id:8,  title:"FS Partners NC",            url:"https://fspartnersnc.com/",                     category:"Finance",     accent:"#34d399", pattern:"lines", size:"normal", desc:"Financial services partnership with professional brand identity and client engagement tools." },
  { id:9,  title:"AEPP LLC",                  url:"https://www.aeppllc.com/",                      category:"Industry",    accent:"#fb923c", pattern:"cross", size:"normal", desc:"Professional services company with clean corporate identity and comprehensive service portfolio." },
  { id:10, title:"Infotech Group",            url:"https://infotechgroup.com/",                    category:"Technology",  accent:"#3b82f6", pattern:"grid",  size:"normal", desc:"IT solutions group with service architecture, case studies and high-conversion digital strategy." },
  { id:11, title:"Vita Consulting",           url:"https://www.vitaconsulting.co.uk/",             category:"Finance",     accent:"#d4af37", pattern:"dots",  size:"large",  desc:"UK business consulting firm with thought leadership content and premium client engagement tools." },
  { id:12, title:"Digital Kiwi Tech",         url:"https://digitalkiwitech.co.nz/",                category:"Technology",  accent:"#10b981", pattern:"lines", size:"normal", desc:"New Zealand digital technology agency showcasing web design, app development and cloud services." },
  { id:13, title:"Solo Rack",                 url:"https://solo-rack.com/",                        category:"Ecommerce",   accent:"#f59e0b", pattern:"cross", size:"normal", desc:"Premium ecommerce store with product showcase, inventory management and checkout optimisation." },
  { id:14, title:"Daniel Pays",               url:"https://danielpays.com/",                       category:"Finance",     accent:"#6366f1", pattern:"grid",  size:"normal", desc:"Fintech payments platform with modern UI, seamless onboarding flows and trust-building design." },
  { id:15, title:"KDFSB",                     url:"https://kdfsb.org/",                            category:"Non-Profit",  accent:"#0ea5e9", pattern:"dots",  size:"normal", desc:"Faith-based community organisation with events management, giving portal and outreach tools." },
  { id:16, title:"CMM Renovations",           url:"https://cmmrenovations.com.au/",                category:"Industry",    accent:"#fb923c", pattern:"lines", size:"large",  desc:"Australian residential renovation company with project gallery and online quote request system." },
  { id:17, title:"Tier 1 Business Group",     url:"https://tier1businessgroup.com/",               category:"Finance",     accent:"#d4af37", pattern:"cross", size:"normal", desc:"Business advisory group with premium brand positioning, service showcase and lead capture system." },
  { id:18, title:"Elite Tooling Services",    url:"https://elitetoolingservices.com/",             category:"Industry",    accent:"#94a3b8", pattern:"grid",  size:"normal", desc:"Industrial tooling and manufacturing services with product catalogue and RFQ management." },
  { id:19, title:"Abilities RC",              url:"https://abilitiesrc.com/",                      category:"Healthcare",  accent:"#34d399", pattern:"dots",  size:"normal", desc:"Disability resource centre with NDIS service listings, participant portal and referral tools." },
  { id:20, title:"Overland Speech Therapy",   url:"https://www.overlandspeechtherapy.com.au/",    category:"Healthcare",  accent:"#a78bfa", pattern:"lines", size:"normal", desc:"Speech pathology practice with online booking, resource library and telehealth access." },
  { id:21, title:"RPM Engineering",           url:"https://www.rpmengineering.com.au/",            category:"Industry",    accent:"#f59e0b", pattern:"cross", size:"normal", desc:"Australian engineering consultancy with project showcase, capability statements and enquiry." },
  { id:22, title:"Caladonna",                 url:"https://caladonna.com.au/",                     category:"Ecommerce",   accent:"#ec4899", pattern:"grid",  size:"large",  desc:"Premium Australian brand with immersive ecommerce experience and lifestyle editorial content." },
  { id:23, title:"My Daily Support Service",  url:"https://mydailysupportservice.com/",            category:"Healthcare",  accent:"#10b981", pattern:"dots",  size:"normal", desc:"NDIS support services provider with participant intake, service catalogue and team showcase." },
  { id:24, title:"Asset Training Enrol",      url:"https://assettrainingenrol.com.au/",            category:"Education",   accent:"#3b82f6", pattern:"lines", size:"normal", desc:"Australian RTO training enrolment platform with course listings, intake forms and compliance." },
  { id:25, title:"Key 2 Driving",             url:"https://key2driving.com/",                      category:"Education",   accent:"#fbbf24", pattern:"cross", size:"normal", desc:"Driving school platform with lesson booking, instructor profiles and student progress tracking." },
  { id:26, title:"JR Book Accounting",        url:"https://jrbookaccounting.com/",                 category:"Finance",     accent:"#d4af37", pattern:"grid",  size:"normal", desc:"Boutique accounting practice with service packages, tax tips blog and client portal." },
];

function getDomain(url: string) {
  try { return new URL(url).hostname.replace("www.", ""); } catch { return url; }
}

function getInitials(title: string) {
  return title.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function PatternBg({ type, color }: { type: string; color: string }) {
  if (type === "grid") return (
    <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
  );
  if (type === "dots") return (
    <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(${color} 1.5px, transparent 1.5px)`, backgroundSize: "24px 24px" }} />
  );
  if (type === "lines") return (
    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `repeating-linear-gradient(45deg, ${color} 0, ${color} 1px, transparent 0, transparent 50%)`, backgroundSize: "20px 20px" }} />
  );
  return (
    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`, backgroundSize: "48px 48px", backgroundPosition: "24px 24px" }} />
  );
}

function SiteLogo({ url, title, accent, large }: { url: string; title: string; accent: string; large: boolean }) {
  const domain = getDomain(url);
  const initials = getInitials(title);
  const size = large ? 72 : 56;

  return (
    <div
      className="relative flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
      style={{
        width: size,
        height: size,
        background: "rgba(255,255,255,0.92)",
        boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15), 0 0 40px ${accent}30`,
        backdropFilter: "blur(8px)",
      }}
    >
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt={title}
        width={large ? 48 : 36}
        height={large ? 48 : 36}
        className="object-contain rounded"
        onError={(e) => {
          const img = e.currentTarget;
          // Try Google favicon as fallback
          if (!img.dataset.fallback) {
            img.dataset.fallback = "1";
            img.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
          } else {
            // Final fallback: hide img, show initials via sibling
            img.style.display = "none";
            const parent = img.parentElement;
            if (parent) {
              parent.innerHTML = `<span style="font-size:${large ? 22 : 16}px;font-weight:800;color:${accent};font-family:sans-serif;letter-spacing:-1px">${initials}</span>`;
            }
          }
        }}
      />
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isLarge = project.size === "large";
  const domain = getDomain(project.url);

  return (
    <motion.div
      className={`group ${isLarge ? "md:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layout
    >
      <Tilt3D intensity={7} scale={1.03}>
        <div className="relative rounded-2xl overflow-hidden"
          style={{ boxShadow: `0 4px 24px ${project.accent}15, 0 1px 4px rgba(0,0,0,0.08)`, border: "1px solid #ebebeb" }}>

          {/* Visual area */}
          <div className="relative overflow-hidden" style={{ paddingBottom: isLarge ? "46%" : "68%" }}>
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{ background: `linear-gradient(135deg, ${project.accent}18 0%, #050d1f 60%, #030712 100%)` }}
            >
              <PatternBg type={project.pattern} color={project.accent} />

              {/* Glow blob */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ width: isLarge ? 380 : 240, height: isLarge ? 380 : 240, background: `radial-gradient(circle, ${project.accent}40 0%, transparent 70%)` }}
              />

              {/* Corner marks */}
              <div className="absolute top-5 left-5 opacity-40">
                <div className="w-7 h-px" style={{ background: project.accent }} />
                <div className="w-px h-7" style={{ background: project.accent }} />
              </div>
              <div className="absolute bottom-5 right-5 opacity-40 flex flex-col items-end">
                <div className="w-7 h-px" style={{ background: project.accent }} />
                <div className="w-px h-7 ml-auto" style={{ background: project.accent }} />
              </div>

              {/* ── Site logo centred ── */}
              <div className="absolute inset-0 flex items-center justify-center">
                <SiteLogo url={project.url} title={project.title} accent={project.accent} large={isLarge} />
              </div>

              {/* Domain watermark */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="text-[10px] tracking-[0.3em] opacity-20 uppercase" style={{ color: project.accent }}>
                  {domain}
                </span>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}35`, backdropFilter: "blur(8px)" }}>
                {project.category}
              </span>
            </div>

            {/* Hover overlay */}
            <div
              className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-400"
              style={{ background: "linear-gradient(to top, rgba(3,7,18,0.96) 0%, rgba(3,7,18,0.55) 55%, transparent 100%)" }}
            >
              <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-gray-300 text-xs leading-relaxed mb-3 max-w-sm">{project.desc}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full transition-all"
                  style={{ background: project.accent, color: "#030712" }}
                >
                  <ExternalLink size={11} />
                  Visit Live Site
                </a>
              </div>
            </div>

            {/* Top-left arrow on hover */}
            <div className="absolute top-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: project.accent }}>
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Card footer */}
          <div className="px-5 py-4 flex items-center gap-3"
            style={{ background: "#f9f9f9", borderTop: `1px solid ${project.accent}20` }}>
            {/* Mini logo */}
            <div
              className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
              style={{ background: "white", border: `1px solid ${project.accent}25`, boxShadow: `0 2px 8px ${project.accent}15` }}
            >
              <img
                src={`https://logo.clearbit.com/${domain}`}
                alt={project.title}
                width={20}
                height={20}
                className="object-contain"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
                  } else {
                    img.style.display = "none";
                  }
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">{project.title}</h3>
              <p className="text-[10px] text-gray-400 mt-0.5 tracking-wider truncate">{domain}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shrink-0"
              style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}35` }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} style={{ color: project.accent }} />
            </a>
          </div>
        </div>
      </Tilt3D>
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filtered = projects.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch = search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      getDomain(p.url).includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.15), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.1), transparent)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Search */}
        <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="relative max-w-md">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search projects by name or category..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400"
              style={{ background: "#f5f5f5", border: "1px solid #e5e5e5", outline: "none", transition: "border-color 0.2s" }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")} />
          </div>
        </motion.div>

        {/* Category filter */}
        <motion.div className="flex gap-2 flex-wrap mb-10"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-[0.08em] uppercase transition-all duration-300 overflow-hidden ${
                active === cat ? "text-black" : "text-gray-500 bg-white border border-gray-200 hover:text-gray-800 hover:border-gray-400"
              }`}
              style={active === cat ? { background: "linear-gradient(135deg, #d4af37, #fbbf24)", boxShadow: "0 0 20px rgba(212,175,55,0.35)" } : {}}>
              {active === cat && (
                <motion.span layoutId="active-pill" className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg,#d4af37,#fbbf24)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Count + clear */}
        <motion.div className="mb-6 flex items-center justify-between"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
          <p className="text-xs text-gray-500 tracking-wider">
            Showing <span className="font-semibold" style={{ color: "#d4af37" }}>{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
            {active !== "All" && <span> in <span className="text-gray-800 font-medium">{active}</span></span>}
          </p>
          {(active !== "All" || search) && (
            <button onClick={() => { setActive("All"); setSearch(""); }}
              className="text-[10px] text-gray-400 hover:text-gray-700 transition-colors tracking-wider uppercase">
              Clear ×
            </button>
          )}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" layout>
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div className="text-center py-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#f5f5f5", border: "1px solid #ebebeb" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.6)" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <p className="text-gray-500 text-sm mb-3">No projects found matching <span className="text-gray-800 font-medium">&ldquo;{search}&rdquo;</span></p>
              <button onClick={() => { setActive("All"); setSearch(""); }} className="text-xs font-medium transition-colors" style={{ color: "#d4af37" }}>
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Bottom CTA */}
      <motion.div
        className="relative overflow-hidden mt-16"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #0d1f14 50%, #050d1f 100%)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)" }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-14 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3" style={{ color: "#d4af37" }}>
                Ready to Get Started?
              </p>
              <h3 className="font-display font-bold text-white leading-tight mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Like what you see?
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", maxWidth: "400px" }}>
                We&apos;d love to build something exceptional for your business too. Let&apos;s talk about your project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wide transition-all hover:opacity-90"
                style={{
                  background: "#d4af37",
                  color: "#000",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                  boxShadow: "0 8px 28px rgba(212,175,55,0.35)",
                }}
              >
                Start a Project
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#d4af37")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                or book a free consultation →
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)" }} />
      </motion.div>
    </section>
  );
}
