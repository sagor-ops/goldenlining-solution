"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const outlinePos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animateOutline = () => {
      const dx = pos.current.x - outlinePos.current.x;
      const dy = pos.current.y - outlinePos.current.y;
      outlinePos.current.x += dx * 0.12;
      outlinePos.current.y += dy * 0.12;

      if (outlineRef.current) {
        const size = isHovering ? 60 : 36;
        outlineRef.current.style.transform = `translate(${outlinePos.current.x - size / 2}px, ${outlinePos.current.y - size / 2}px)`;
        outlineRef.current.style.width = `${size}px`;
        outlineRef.current.style.height = `${size}px`;
      }
      rafRef.current = requestAnimationFrame(animateOutline);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "hover"
      ) {
        setIsHovering(true);
        outlineRef.current?.style.setProperty("border-color", "rgba(212,175,55,0.8)");
      } else {
        setIsHovering(false);
        outlineRef.current?.style.setProperty("border-color", "rgba(212,175,55,0.5)");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    rafRef.current = requestAnimationFrame(animateOutline);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, isHovering]);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ willChange: "transform" }} />
      <div ref={outlineRef} className="cursor-outline" style={{ willChange: "transform" }} />
    </>
  );
}
