import Link from "next/link";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const links = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-8 py-12">
        <div className="flex flex-col gap-1.5">
          <Logo size={25} />
          <div className="text-[13px] text-faint">
            © 2026 Gökhan Yıldırım — Senior Frontend Developer &amp; Shopify
            Partner
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 sm:items-end">
          <div className="flex gap-6 text-[13.5px] font-semibold text-muted">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <SocialIcons size={38} iconSize={18} />
        </div>
      </div>
    </footer>
  );
}
