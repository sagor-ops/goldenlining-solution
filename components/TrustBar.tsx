"use client";

const items = [
  { label: "Website Design",      color: "#d4af37" },
  { label: "Branding",            color: "#3b82f6" },
  { label: "SEO & AI Visibility", color: "#8b5cf6" },
  { label: "Google Ads",          color: "#10b981" },
  { label: "Ecommerce",           color: "#f59e0b" },
  { label: "Logo Design",         color: "#d4af37" },
  { label: "Growth Marketing",    color: "#3b82f6" },
  { label: "WordPress",           color: "#8b5cf6" },
  { label: "UI/UX Design",        color: "#10b981" },
  { label: "Content Strategy",    color: "#f59e0b" },
  { label: "Analytics",           color: "#d4af37" },
  { label: "Digital Transformation", color: "#3b82f6" },
];

export default function TrustBar() {
  return (
    <div className="py-5 overflow-hidden" style={{ background: "linear-gradient(90deg, #0a1628 0%, #0f1f3d 50%, #0a1628 100%)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
      <div className="flex items-center overflow-hidden whitespace-nowrap">
        <div className="marquee-track flex items-center gap-0 shrink-0">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold px-6 py-1 cursor-default transition-colors"
                style={{ color: item.color, opacity: 0.75 }}>
                {item.label}
              </span>
              <span className="w-1 h-1 rounded-full shrink-0" style={{ background: item.color, opacity: 0.4 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
