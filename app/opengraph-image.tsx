import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Goldenlining Solution — Premium Web Design & Digital Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1f14",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Gold top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />

        {/* Gold bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />

        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Corner decoration top-left */}
        <div style={{ position: "absolute", top: "32px", left: "40px", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "32px", height: "2px", background: "#d4af37", opacity: 0.5 }} />
          <div style={{ width: "2px", height: "32px", background: "#d4af37", opacity: 0.5 }} />
        </div>

        {/* Corner decoration bottom-right */}
        <div style={{ position: "absolute", bottom: "32px", right: "40px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ width: "32px", height: "2px", background: "#d4af37", opacity: 0.5 }} />
          <div style={{ width: "2px", height: "32px", background: "#d4af37", opacity: 0.5, marginLeft: "auto" }} />
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(212,175,55,0.12)",
            border: "1px solid rgba(212,175,55,0.35)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "28px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#d4af37" }} />
          <span style={{ color: "#d4af37", fontSize: "13px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Premium Digital Agency · Australia &amp; Global
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Goldenlining
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#d4af37",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          Solution
        </div>

        {/* Gold divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ width: "60px", height: "1px", background: "#d4af37" }} />
          <div style={{ width: "6px", height: "6px", background: "#d4af37", transform: "rotate(45deg)" }} />
          <div style={{ width: "60px", height: "1px", background: "#d4af37" }} />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            maxWidth: "640px",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Web Design · SEO · Google Ads · Branding · 600+ Projects
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "13px",
            color: "rgba(212,175,55,0.5)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          goldenliningsolution.com
        </div>
      </div>
    ),
    { ...size }
  );
}
