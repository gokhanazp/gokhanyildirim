"use client";

import { useRef, type ReactNode } from "react";

/**
 * İmlece doğru hafifçe çekilen "magnetik" buton. İçerik bir <a> olarak render edilir.
 */
export default function MagneticButton({
  href,
  external = false,
  className = "",
  strength = 0.35,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  strength?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={className}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,0.61,0.36,1)" }}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
    </a>
  );
}
