"use client";

import { useEffect, useRef } from "react";

/** Sayfa kaydırma ilerlemesini gösteren ince gradyan çubuk (nav'ın en üstünde). */
export default function NavProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (el) {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = scrollable > 0 ? window.scrollY / scrollable : 0;
        el.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-soft),#608cff)]"
      ref={ref}
    />
  );
}
