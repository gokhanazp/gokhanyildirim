import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClientEffects from "@/components/ClientEffects";
import Spotlight from "@/components/Spotlight";
import { Eyebrow } from "@/components/ui";
import { services, getService, childServices } from "@/lib/services";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { breadcrumb, faqPage, graph, serviceSchema } from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  const path = `/hizmetler/${slug}`;
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: svc.metaTitle,
      description: svc.metaDescription,
      url: `${site.url}${path}`,
      images: [{ url: "/gokhan-yildirim.jpeg", width: 1200, height: 630, alt: svc.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: svc.metaTitle,
      description: svc.metaDescription,
      images: ["/gokhan-yildirim.jpeg"],
    },
  };
}

/** Bölüm sarmalayıcı — tutarlı dikey ritim */
function Section({
  id,
  eyebrow,
  title,
  children,
  alt = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={
        alt
          ? "border-y border-white/[0.06] bg-bg-alt py-[88px]"
          : "py-[88px]"
      }
    >
      <div className="mx-auto max-w-[900px] px-6 sm:px-8">
        <div data-reveal className="mb-10 flex flex-col gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="m-0 font-sora text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.03em] text-balance">
            {title}
          </h2>
          <span className="gy-underline" />
        </div>
        {children}
      </div>
    </section>
  );
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const path = `/hizmetler/${slug}`;
  const children = childServices(slug);
  const relatedServices = svc.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedPosts = svc.relatedPosts
    .map((p) => posts.find((post) => post.slug === p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const crumbs = svc.parent
    ? [
        { name: "Ana sayfa", path: "/" },
        { name: "Hizmetler", path: "/hizmetler" },
        {
          name: getService(svc.parent)?.navLabel ?? "Hizmet",
          path: `/hizmetler/${svc.parent}`,
        },
        { name: svc.navLabel, path },
      ]
    : [
        { name: "Ana sayfa", path: "/" },
        { name: "Hizmetler", path: "/hizmetler" },
        { name: svc.navLabel, path },
      ];

  const jsonLd = graph([
    serviceSchema({
      name: svc.h1,
      description: svc.metaDescription,
      path,
      serviceType: svc.keywords,
      offers: svc.includes,
    }),
    // FAQPage yalnızca gerçek SSS bölümü olan sayfalarda
    faqPage(svc.faqs, `${site.url}${path}`),
    breadcrumb(crumbs),
  ]);

  return (
    <div className="min-h-screen overflow-x-clip bg-bg">
      <Nav />

      <main>
        {/* Hero */}
        <header className="relative overflow-clip border-b border-white/[0.06]">
          <div
            className="gy-glow left-[-6%] top-[-10%] h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(53,208,127,0.10),transparent_65%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-16 pt-14 sm:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-faint"
            >
              {crumbs.map((c, i) => (
                <span key={c.path} className="flex items-center gap-2">
                  {i < crumbs.length - 1 ? (
                    <Link
                      href={c.path}
                      className="transition-colors hover:text-accent"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-muted">{c.name}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </span>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-5">
              <Eyebrow>{svc.eyebrow}</Eyebrow>
              <h1 className="m-0 max-w-[24ch] font-sora text-[clamp(32px,4.6vw,52px)] font-bold leading-[1.1] tracking-[-0.035em] text-balance">
                {svc.h1}
              </h1>
              <p className="m-0 max-w-[62ch] text-[18px] leading-[1.7] text-muted text-pretty">
                {svc.summary}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-extrabold text-whatsapp-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(53,208,127,0.35)]"
                >
                  WhatsApp&apos;tan Yazın <span aria-hidden>→</span>
                </a>
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-accent/50 hover:bg-white/[0.04]"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Giriş + kime uygun */}
        <section className="py-[88px]">
          <div className="mx-auto max-w-[900px] px-6 sm:px-8">
            <div data-reveal className="flex flex-col gap-5">
              {svc.intro.map((para, i) => (
                <p
                  key={i}
                  className={`m-0 text-pretty ${
                    i === 0
                      ? "text-[19px] leading-[1.7] text-chip"
                      : "text-[16.5px] leading-[1.8] text-muted"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div
                data-reveal
                className="rounded-[18px] border border-accent/20 bg-[linear-gradient(160deg,rgba(53,208,127,0.07),rgba(255,255,255,0.012))] p-7"
              >
                <div className="mb-4 font-sora text-[16.5px] font-semibold text-ink">
                  Bu hizmet kime uygun
                </div>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {svc.suitedFor.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-[15px] leading-[1.65] text-muted"
                    >
                      <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                        ✓
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-reveal
                style={{ transitionDelay: "80ms" }}
                className="rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-7"
              >
                <div className="mb-4 font-sora text-[16.5px] font-semibold text-ink">
                  Kime uygun değil
                </div>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {svc.notSuitedFor.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-[15px] leading-[1.65] text-muted"
                    >
                      <span aria-hidden className="mt-0.5 shrink-0 text-faint">
                        —
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neler dahil */}
        <Section id="kapsam" eyebrow="KAPSAM" title="Neler dahil?" alt>
          <div className="grid gap-px overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
            {svc.includes.map((b, i) => (
              <div
                key={b.title}
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 70}ms` }}
                className="flex flex-col gap-2 bg-bg-alt p-7"
              >
                <div className="font-sora text-[16.5px] font-semibold">
                  {b.title}
                </div>
                <p className="m-0 text-[14.5px] leading-[1.7] text-muted">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Süreç */}
        <Section id="surec" eyebrow="SÜREÇ" title="Nasıl ilerliyoruz?">
          <ol className="m-0 flex list-none flex-col gap-0 p-0">
            {svc.process.map((st, i) => (
              <li
                key={st.title}
                data-reveal
                className="relative flex gap-6 border-l border-white/[0.1] pb-9 pl-8 last:border-transparent last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-accent/30 bg-bg font-mono text-[12.5px] font-semibold text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2 pt-0.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-sora text-[17.5px] font-semibold">
                      {st.title}
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11.5px] text-faint">
                      {st.duration}
                    </span>
                  </div>
                  <p className="m-0 max-w-[62ch] text-[15px] leading-[1.75] text-muted text-pretty">
                    {st.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Teknik derinlik */}
        <Section
          id="teknik"
          eyebrow="TEKNİK DERİNLİK"
          title="Kapağın altında ne var?"
          alt
        >
          <div className="flex flex-col gap-4">
            {svc.technical.map((t, i) => (
              <Spotlight
                key={t.title}
                dataReveal
                className="flex flex-col gap-2 p-7"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className="font-sora text-[16.5px] font-semibold text-ink">
                  {t.title}
                </div>
                <p className="m-0 text-[15px] leading-[1.75] text-muted text-pretty">
                  {t.desc}
                </p>
              </Spotlight>
            ))}
          </div>
        </Section>

        {/* Vaka / kanıt */}
        <Section id="vaka" eyebrow="KANIT" title="Bu işi nerede yaptım?">
          <div className="grid gap-5 sm:grid-cols-2">
            {svc.cases.map((c) => (
              <div
                key={c.name}
                data-reveal
                className="gy-card flex flex-col gap-3 p-7"
              >
                <div className="font-sora text-[17px] font-semibold">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener"
                      className="transition-colors hover:text-accent"
                    >
                      {c.name} <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    c.name
                  )}
                </div>
                <p className="m-0 text-[14.5px] leading-[1.7] text-muted text-pretty">
                  {c.result}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/#projeler"
            className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-accent transition-colors hover:text-ink"
          >
            Tüm projeleri gör <span aria-hidden>→</span>
          </Link>
        </Section>

        {/* Migrasyon alt sayfaları */}
        {children.length > 0 && (
          <Section
            id="platformlar"
            eyebrow="PLATFORMLAR"
            title="Hangi platformdan geliyorsunuz?"
            alt
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {children.map((c) => (
                <Spotlight
                  key={c.slug}
                  href={`/hizmetler/${c.slug}`}
                  dataReveal
                  className="flex flex-col gap-2 p-7"
                >
                  <div className="font-sora text-[17px] font-semibold">
                    {c.navLabel}
                  </div>
                  <p className="m-0 text-[14.5px] leading-[1.7] text-muted">
                    {c.summary}
                  </p>
                  <span className="mt-2 text-[13px] font-semibold text-accent">
                    Detaylı bilgi →
                  </span>
                </Spotlight>
              ))}
            </div>
            <p className="mt-6 m-0 text-[14.5px] leading-[1.7] text-faint">
              Ticimax, İdeaSoft, İkas, T-Soft ve Magento taşımaları da aynı
              yöntemle yürüyor — kaynak platformunuz listede yoksa yazın,
              veri ihracat yeteneğine bakıp süreci birlikte planlayalım.
            </p>
          </Section>
        )}

        {/* Fiyat çerçevesi */}
        <Section
          id="fiyat"
          eyebrow="FİYAT ÇERÇEVESİ"
          title="Fiyatlandırma nasıl çalışıyor?"
        >
          <div
            data-reveal
            className="rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-8"
          >
            {svc.pricing.from && (
              <div className="mb-4 font-sora text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.02em] text-accent">
                {svc.pricing.from}
              </div>
            )}
            <p className="m-0 text-[16px] leading-[1.8] text-muted text-pretty">
              {svc.pricing.note}
            </p>
          </div>
        </Section>

        {/* SSS */}
        <Section id="sss" eyebrow="SSS" title="Sık sorulan sorular" alt>
          <div className="flex flex-col gap-3">
            {svc.faqs.map((f) => (
              <details
                key={f.q}
                data-reveal
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors open:border-accent/35 open:bg-[linear-gradient(180deg,rgba(53,208,127,0.06),rgba(255,255,255,0.015))] hover:border-white/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-[22px] font-sora text-[16.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className="shrink-0 text-[18px] text-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    ＋
                  </span>
                </summary>
                <p className="m-0 px-7 pb-6 text-[15px] leading-[1.75] text-muted text-pretty">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="py-[88px]">
          <div className="mx-auto max-w-[900px] px-6 sm:px-8">
            <div
              data-reveal
              className="flex flex-col items-start gap-4 rounded-[22px] border border-accent/20 bg-[linear-gradient(140deg,rgba(53,208,127,0.09),rgba(255,255,255,0.015))] p-9"
            >
              <div className="font-sora text-[clamp(22px,2.6vw,28px)] font-bold tracking-[-0.02em]">
                Projenizi 15 dakikada konuşalım
              </div>
              <p className="m-0 max-w-[56ch] text-[16px] leading-[1.7] text-muted text-pretty">
                Kapsamı netleştirmek için ücretsiz bir keşif görüşmesi
                yapıyoruz. Bu hizmet size uygun değilse bunu da söylerim —
                gereksiz iş satmıyorum.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-extrabold text-whatsapp-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(53,208,127,0.35)]"
                >
                  WhatsApp&apos;tan Yazın <span aria-hidden>→</span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-accent/50 hover:bg-white/[0.04]"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* İlgili hizmetler + yazılar */}
        <section className="border-t border-white/[0.06] bg-bg-alt py-[88px]">
          <div className="mx-auto max-w-[900px] px-6 sm:px-8">
            <div className="mb-8 font-mono text-[12.5px] tracking-[0.12em] text-accent">
              İLGİLİ HİZMETLER
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedServices.map((r) => (
                <Spotlight
                  key={r.slug}
                  href={`/hizmetler/${r.slug}`}
                  dataReveal
                  className="flex flex-col gap-2 p-6"
                >
                  <div className="font-sora text-[15.5px] font-semibold leading-[1.35]">
                    {r.navLabel}
                  </div>
                  <span className="text-[13px] text-faint">Detaylı bilgi →</span>
                </Spotlight>
              ))}
            </div>

            {relatedPosts.length > 0 && (
              <>
                <div className="mb-6 mt-14 font-mono text-[12.5px] tracking-[0.12em] text-accent">
                  İLGİLİ YAZILAR
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="gy-card group flex flex-col gap-2 p-6"
                    >
                      <div className="font-mono text-[11px] text-accent">
                        {p.meta.category}
                      </div>
                      <div className="font-sora text-[16px] font-semibold leading-[1.35] transition-colors group-hover:text-accent">
                        {p.meta.title}
                      </div>
                      <span className="text-[12.5px] text-faint">
                        {p.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}

            <Link
              href="/hizmetler"
              className="mt-12 inline-flex items-center gap-2 text-[14px] font-semibold text-muted transition-colors hover:text-accent"
            >
              <span aria-hidden>←</span> Tüm hizmetler
            </Link>
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
