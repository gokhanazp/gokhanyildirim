"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";

/**
 * İmleci takip eden parıltıya sahip kart yüzeyi.
 * href verilirse <a>, verilmezse <div> olarak render edilir.
 */
export default function Spotlight({
  children,
  className = "",
  href,
  external = false,
  accent = false,
  style,
  dataReveal = false,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  accent?: boolean;
  style?: CSSProperties;
  dataReveal?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const cls = `gy-card ${accent ? "gy-card-accent" : ""} ${className}`;
  const revealProps = dataReveal ? { "data-reveal": true } : {};

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onPointerMove={onMove}
        className={cls}
        style={style}
        {...revealProps}
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
      >
        <span className="gy-spot" aria-hidden />
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onPointerMove={onMove}
      className={cls}
      style={style}
      {...revealProps}
    >
      <span className="gy-spot" aria-hidden />
      {children}
    </div>
  );
}
