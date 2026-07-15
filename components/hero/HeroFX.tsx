"use client";

import { useEffect, useRef } from "react";

/**
 * Hero arka plan efekt sahnesi (hepsi pointer-events-none):
 *  - Aurora mesh gradyan bulutları
 *  - Perspektif ızgara + kayan ışık taraması
 *  - İmleci takip eden spotlight
 *  - İnteraktif partikül ağı (canvas)
 */
export default function HeroFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.min(72, Math.floor((w * h) / 17000)));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };
    resize();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const inside = x >= 0 && x <= w && y >= 0 && y <= h;
      mouse.active = inside;
      mouse.x = x;
      mouse.y = y;
      wrap.style.setProperty("--mx", `${x}px`);
      wrap.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const MAX = 132;
    const MMAX = 180;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 150 && d > 0.01) {
            p.x += (dx / d) * 0.5;
            p.y += (dy / d) * 0.5;
          }
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX) {
            const o = (1 - dist / MAX) * 0.45;
            ctx.strokeStyle = `rgba(53,208,127,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (mouse.active) {
          const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (dm < MMAX) {
            const o = (1 - dm / MMAX) * 0.7;
            ctx.strokeStyle = `rgba(127,232,180,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        ctx.fillStyle = "rgba(214,255,235,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="gy-grain pointer-events-none absolute inset-0 overflow-hidden [--mx:50%] [--my:30%]"
    >
      {/* Aurora bulutları */}
      <div className="gy-motion absolute left-[12%] top-[-24%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(53,208,127,0.20),transparent_62%)] blur-[46px] animate-[gy-aurora_18s_ease-in-out_infinite]" />
      <div className="gy-motion absolute right-[-12%] top-[4%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(96,140,255,0.16),transparent_62%)] blur-[46px] animate-[gy-aurora_24s_ease-in-out_infinite_reverse]" />
      <div className="gy-motion absolute bottom-[-30%] left-[38%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(127,232,180,0.12),transparent_65%)] blur-[50px] animate-[gy-aurora_30s_ease-in-out_infinite]" />

      {/* Perspektif ızgara */}
      <div
        className="gy-motion absolute inset-x-0 bottom-0 top-1/3 animate-[gy-grid-pan_6s_linear_infinite] opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          transform: "perspective(520px) rotateX(58deg)",
          transformOrigin: "bottom center",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 100%, #000 20%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 50% 100%, #000 20%, transparent 72%)",
        }}
      />

      {/* Işık taraması */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gy-motion absolute inset-x-0 top-0 h-[42%] bg-[linear-gradient(180deg,transparent,rgba(53,208,127,0.10),transparent)] animate-[gy-scan_7s_ease-in-out_infinite]" />
      </div>

      {/* İmleç spotlight'ı */}
      <div className="absolute inset-0 bg-[radial-gradient(340px_circle_at_var(--mx)_var(--my),rgba(53,208,127,0.14),transparent_60%)] transition-[background] duration-200" />

      {/* Partikül ağı */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Alt geçiş */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,var(--color-bg))]" />
    </div>
  );
}
