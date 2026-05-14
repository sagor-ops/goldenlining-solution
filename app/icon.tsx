import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1f14",
          borderRadius: "6px",
          border: "1.5px solid #d4af37",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 900,
            color: "#d4af37",
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
          }}
        >
          GL
        </span>
      </div>
    ),
    { ...size }
  );
}
