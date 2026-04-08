"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

export default function FinalBossWrapper({ children }: { children: React.ReactNode }) {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [particles, setParticles] = useState<
    { id: number; top: number; left: number; delay: number }[]
  >([]);

  useEffect(() => {
    // ✅ LENIS SCROLL
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🎯 Mouse Glow
    const moveGlow = (e: MouseEvent) => {
      if (!glowRef.current) return;

      gsap.to(glowRef.current, {
        x: e.clientX - 100,
        y: e.clientY - 100,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveGlow);

    // ✨ Generate particles AFTER mount (fix hydration)
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: i * 0.3,
    }));

    setParticles(generated);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* 🌟 Mouse Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] bg-orange-400 opacity-20 blur-3xl rounded-full pointer-events-none z-0"
      />

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {children}
    </div>
  );
}