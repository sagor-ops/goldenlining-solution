"use client";

import { useRef, useState, useCallback, ReactNode } from "react";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  scale?: number;
  shadow?: string; // optional glow color e.g. "#d4af37"
}

export default function Tilt3D({
  children,
  className = "",
  intensity = 10,
  glare = true,
  scale = 1.03,
  shadow,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, hovered: false });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      setState({
        rx: -dy * intensity,
        ry: dx * intensity,
        gx: ((e.clientX - r.left) / r.width) * 100,
        gy: ((e.clientY - r.top) / r.height) * 100,
        hovered: true,
      });
    },
    [intensity]
  );

  const onLeave = useCallback(() => {
    setState({ rx: 0, ry: 0, gx: 50, gy: 50, hovered: false });
  }, []);

  const glowColor = shadow || "rgba(212,175,55,0.4)";

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: "900px" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          transform: `rotateX(${state.rx}deg) rotateY(${state.ry}deg) scale(${state.hovered ? scale : 1})`,
          transition: state.hovered
            ? "transform 0.08s ease, box-shadow 0.15s ease"
            : "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.55s ease",
          transformStyle: "preserve-3d",
          willChange: "transform",
          position: "relative",
          boxShadow: state.hovered
            ? `0 30px 60px -10px ${glowColor}, 0 10px 24px rgba(0,0,0,0.3)`
            : "none",
        }}
      >
        {children}

        {/* Specular glare — brighter on hover */}
        {glare && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: 10,
              background: `radial-gradient(ellipse at ${state.gx}% ${state.gy}%, rgba(255,255,255,${state.hovered ? 0.15 : 0}) 0%, transparent 60%)`,
              transition: state.hovered ? "background 0.08s ease" : "background 0.55s ease",
            }}
          />
        )}
      </div>
    </div>
  );
}
