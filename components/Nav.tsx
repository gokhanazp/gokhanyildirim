"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavProgress from "./NavProgress";
import SocialIcons from "./SocialIcons";
import { navLinks } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();

  // Scroll durumu (pill'i küçültüp koyulaştırmak için)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: görünürdeki bölümü aktif linke bağla (ana sayfadaki #id'ler)
  useEffect(() => {
    const ids = navLinks
      .map((l) => (l.href.includes("#") ? l.href.split("#")[1] : null))
      .filter(Boolean) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const isLinkActive = (href: string) => {
    // Route linkleri (ör. /hizmetler, /blog) pathname'e göre
    if (!href.includes("#")) return pathname.startsWith(href);
    // Anchor linkleri yalnızca ana sayfada scroll-spy ile
    return pathname === "/" && href.split("#")[1] === active;
  };

  // Menü açıkken scroll kilidi + Esc
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <NavProgress />
      <div
        className={`mx-auto flex items-center justify-between gap-4 rounded-full border backdrop-blur-[18px] transition-all duration-300 ${
          scrolled
            ? "max-w-[1000px] border-white/[0.1] bg-[rgba(13,15,17,0.85)] py-2 pl-5 pr-2 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.07)]"
            : "max-w-[1200px] border-white/[0.06] bg-[rgba(11,12,14,0.5)] py-2.5 pl-5 pr-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        }`}
      >
        <Logo size={24} />

        {/* Masaüstü linkleri — pill segmentler + aktif vurgu */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                isLinkActive(l.href)
                  ? "bg-accent/[0.12] text-accent"
                  : "text-muted hover:bg-white/[0.05] hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Masaüstü sağ küme */}
        <div className="hidden items-center gap-3 md:flex">
          <SocialIcons />
          <span className="h-6 w-px bg-white/10" aria-hidden />
          <Link
            href="/#iletisim"
            className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#ffffff,#e8eaee)] px-5 py-2.5 text-[13.5px] font-bold text-bg shadow-[0_8px_22px_-10px_rgba(255,255,255,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(255,255,255,0.55)]"
          >
            Proje Başlat
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Hamburger (mobil) */}
        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-ink transition-colors hover:border-accent/50 md:hidden"
        >
          <span className="relative block h-[14px] w-[20px]">
            <span
              className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobil menü arka planı */}
      <button
        type="button"
        aria-hidden={!open}
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 cursor-default bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Mobil menü paneli */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-3 top-full z-40 mt-2 origin-top overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(13,15,17,0.97)] backdrop-blur-[18px] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.9)] transition-all duration-300 sm:inset-x-4 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-sora text-[17px] font-semibold transition-colors ${
                isLinkActive(l.href)
                  ? "bg-accent/[0.12] text-accent"
                  : "text-ink hover:bg-white/[0.04]"
              }`}
            >
              {l.label}
              <span className="text-faint">→</span>
            </Link>
          ))}

          <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-5">
            <SocialIcons size={40} iconSize={18} />
            <Link
              href="/#iletisim"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-extrabold text-whatsapp-ink"
            >
              Proje Başlat →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
