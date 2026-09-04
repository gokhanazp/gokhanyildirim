import Link from "next/link";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { topLevelServices, childServices } from "@/lib/services";

const siteLinks = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/#projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/#sss", label: "SSS" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Footer() {
  const migrations = childServices("shopifya-gecis");

  return (
    <footer className="border-t border-white/[0.06]">
      {/* Hizmet linkleri — iç link ağı */}
      <div className="mx-auto max-w-[1200px] px-8 pt-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-3.5">
            <div className="font-mono text-[11.5px] tracking-[0.1em] text-accent">
              HİZMETLER
            </div>
            {topLevelServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="text-[13.5px] text-muted transition-colors hover:text-accent"
              >
                {s.navLabel}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="font-mono text-[11.5px] tracking-[0.1em] text-accent">
              PLATFORM TAŞIMA
            </div>
            {migrations.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="text-[13.5px] text-muted transition-colors hover:text-accent"
              >
                {s.navLabel}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="font-mono text-[11.5px] tracking-[0.1em] text-accent">
              SİTE
            </div>
            {siteLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13.5px] text-muted transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="font-mono text-[11.5px] tracking-[0.1em] text-accent">
              İLETİŞİM
            </div>
            <a
              href="https://wa.me/905375102084"
              target="_blank"
              rel="noopener"
              className="text-[13.5px] text-muted transition-colors hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href="mailto:info@gokhan-yildirim.com"
              className="text-[13.5px] text-muted transition-colors hover:text-accent"
            >
              info@gokhan-yildirim.com
            </a>
            <span className="text-[13.5px] text-faint">İstanbul, Türkiye</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap items-center justify-between gap-6 border-t border-white/[0.06] px-8 py-10">
        <div className="flex flex-col gap-1.5">
          <Logo size={25} />
          <div className="text-[13px] text-faint">
            © 2026 Gökhan Yıldırım — Senior Frontend Developer &amp; Shopify
            Partner
          </div>
        </div>
        <SocialIcons size={38} iconSize={18} />
      </div>
    </footer>
  );
}
