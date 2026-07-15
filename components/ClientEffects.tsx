"use client";

import { useEffect } from "react";

/**
 * Tasarım dosyasındaki componentDidMount davranışının birebir karşılığı:
 * - [data-reveal] elemanları IntersectionObserver (threshold 0.12) ile görünür olur.
 * - [data-counter] sayaçları threshold 0.5'te 1400ms ease-out-cubic ile artar.
 * - prefers-reduced-motion aktifse animasyonlar atlanır.
 */
export default function ClientEffects() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const counterEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]"),
    );

    if (reduce) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      counterEls.forEach((el) => {
        el.textContent = el.getAttribute("data-counter") ?? "0";
      });
      return;
    }

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => revealIO.observe(el));

    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute("data-counter") ?? "0", 10);
      const t0 = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target as HTMLElement);
            counterIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counterEls.forEach((el) => counterIO.observe(el));

    return () => {
      revealIO.disconnect();
      counterIO.disconnect();
    };
  }, []);

  return null;
}
