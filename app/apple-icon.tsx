import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1f14",
          borderRadius: "36px",
          border: "4px solid #d4af37",
        }}
      >
        <span
          style={{
            fontSize: "80px",
            fontWeight: 900,
            color: "#d4af37",
            fontFamily: "sans-serif",
            letterSpacing: "-4px",
          }}
        >
          GL
        </span>
      </div>
    ),
    { ...size }
  );
}
