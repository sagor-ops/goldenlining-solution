"use client";

const items = [
  "Website Design",
  "Branding",
  "SEO & AI Visibility",
  "Google Ads",
  "Ecommerce",
  "Logo Design",
  "Growth Marketing",
  "WordPress",
  "UI/UX Design",
  "Content Strategy",
  "Analytics",
  "Digital Transformation",
];

export default function TrustBar() {
  return (
    <div
      className="py-4 overflow-hidden"
      style={{
        background: "#0a1a10",
        borderTop: "1px solid rgba(212,175,55,0.2)",
        borderBottom: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      <div className="flex items-center overflow-hidden whitespace-nowrap">
        <div className="marquee-track flex items-center gap-0 shrink-0">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span
                className="text-[10px] tracking-[0.25em] uppercase font-bold px-7 cursor-default"
                style={{ color: "rgba(212,175,55,0.65)" }}
              >
                {item}
              </span>
              <span
                className="w-1 h-1 rotate-45 shrink-0"
                style={{ background: "rgba(212,175,55,0.35)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
