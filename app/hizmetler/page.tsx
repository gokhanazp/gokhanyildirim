import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClientEffects from "@/components/ClientEffects";
import Spotlight from "@/components/Spotlight";
import { Eyebrow } from "@/components/ui";
import { topLevelServices, childServices } from "@/lib/services";
import { site } from "@/lib/site";
import { breadcrumb, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hizmetler — Shopify Tema, Kurulum ve SEO",
  description:
    "Shopify tema geliştirme, mağaza kurulumu, Shopify SEO, hız optimizasyonu ve platform taşıma. İstanbul'da Shopify Partner ve e-ticaret geliştirici.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    type: "website",
    title: "Hizmetler — Gökhan Yıldırım",
    description:
      "Shopify tema geliştirme, mağaza kurulumu, Shopify SEO, hız optimizasyonu ve platform taşıma.",
    url: `${site.url}/hizmetler`,
    images: [{ url: "/gokhan-yildirim.jpeg", width: 1200, height: 630, alt: "Hizmetler" }],
  },
};

/** Ana sayfadaki bölümlere işaret eden, henüz ayrı sayfası olmayan hizmetler */
const upcoming = [
  { label: "React & Next.js Geliştirme", href: "/#hizmetler" },
  { label: "Kurumsal Web Sitesi", href: "/#hizmetler" },
  { label: "Mobil Uygulama (React Native)", href: "/#hizmetler" },
  { label: "E-ticaret Danışmanlığı", href: "/#hizmetler" },
];

export default function ServicesHub() {
  const jsonLd = graph([
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/hizmetler#page`,
      name: "Hizmetler",
      url: `${site.url}/hizmetler`,
      inLanguage: "tr-TR",
      about: { "@id": `${site.url}/#business` },
    },
    {
      "@type": "ItemList",
      name: "Hizmetler",
      itemListElement: topLevelServices.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.navLabel,
        url: `${site.url}/hizmetler/${s.slug}`,
      })),
    },
    breadcrumb([
      { name: "Ana sayfa", path: "/" },
      { name: "Hizmetler", path: "/hizmetler" },
    ]),
  ]);

  return (
    <div className="min-h-screen overflow-x-clip bg-bg">
      <Nav />

      <main>
        <header className="relative overflow-clip border-b border-white/[0.06]">
          <div
            className="gy-glow left-[-6%] top-[-10%] h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(53,208,127,0.10),transparent_65%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-14 sm:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-mono text-[12px] text-faint"
            >
              <Link href="/" className="transition-colors hover:text-accent">
                Ana sayfa
              </Link>
              <span aria-hidden>/</span>
              <span className="text-muted">Hizmetler</span>
            </nav>

            <div className="mt-8 flex flex-col gap-5">
              <Eyebrow>HİZMETLER</Eyebrow>
              <h1 className="m-0 max-w-[24ch] font-sora text-[clamp(34px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.035em] text-balance">
                Shopify ve e-ticaret geliştirme hizmetleri
              </h1>
              <p className="m-0 max-w-[62ch] text-[18px] leading-[1.7] text-muted text-pretty">
                Her hizmetin kapsamı, süreci, teknik derinliği ve fiyat
                çerçevesi kendi sayfasında yazılı. Hangisinin işinizi
                göreceğinden emin değilseniz keşif görüşmesinde birlikte
                karar veriyoruz.
              </p>
            </div>
          </div>
        </header>

        <section className="py-[88px]">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              {topLevelServices.map((s, i) => {
                const kids = childServices(s.slug);
                return (
                  <div
                    key={s.slug}
                    data-reveal
                    style={{ transitionDelay: `${(i % 2) * 70}ms` }}
                    className="gy-card flex flex-col gap-3 p-8"
                  >
                    <div className="font-mono text-[11.5px] tracking-[0.1em] text-accent">
                      {s.eyebrow}
                    </div>
                    <h2 className="m-0 font-sora text-[20px] font-semibold leading-[1.3]">
                      <Link
                        href={`/hizmetler/${s.slug}`}
                        className="transition-colors hover:text-accent"
                      >
                        {s.navLabel}
                      </Link>
                    </h2>
                    <p className="m-0 text-[14.5px] leading-[1.7] text-muted text-pretty">
                      {s.summary}
                    </p>

                    {kids.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-2">
                        {kids.map((k) => (
                          <Link
                            key={k.slug}
                            href={`/hizmetler/${k.slug}`}
                            className="rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-[12.5px] font-medium text-chip transition-colors hover:border-accent/40 hover:text-accent"
                          >
                            {k.navLabel}
                          </Link>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[13.5px] font-semibold text-accent transition-colors hover:text-ink"
                    >
                      Detaylı bilgi <span aria-hidden>→</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div
              data-reveal
              className="mt-12 rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-8"
            >
              <div className="mb-4 font-sora text-[16.5px] font-semibold">
                Diğer çalıştığım alanlar
              </div>
              <p className="m-0 mb-5 max-w-[62ch] text-[14.5px] leading-[1.7] text-muted">
                Bu başlıkların ayrıntılı sayfaları hazırlanıyor. Şimdilik ana
                sayfadaki hizmetler bölümünde özetleri var — aklınızdaki iş
                bunlardan biriyse doğrudan yazın.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {upcoming.map((u) => (
                  <Link
                    key={u.label}
                    href={u.href}
                    className="rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-chip transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {u.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ClientEffects />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
