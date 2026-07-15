import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Spotlight from "@/components/Spotlight";
import { Eyebrow } from "@/components/ui";
import { posts, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — E-ticaret ve Frontend Notları",
  description:
    "Shopify, Next.js, teknik SEO ve e-ticaret performansı üzerine deneyime dayalı yazılar.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Gökhan Yıldırım",
    description:
      "Shopify, Next.js, teknik SEO ve e-ticaret performansı üzerine yazılar.",
    url: `${site.url}/blog`,
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen overflow-x-clip bg-bg">
      <Nav />
      <main className="mx-auto max-w-[1200px] px-8 py-24">
        <div className="flex flex-col gap-4">
          <Eyebrow>BLOG</Eyebrow>
          <h1 className="m-0 max-w-[20ch] font-sora text-[clamp(34px,5vw,56px)] font-bold tracking-[-0.03em] text-balance">
            E-ticaret ve frontend üzerine notlar
          </h1>
          <p className="m-0 max-w-[60ch] text-[17px] leading-[1.7] text-muted">
            Shopify, Next.js, teknik SEO ve performans üzerine sahadan süzülmüş
            yazılar. Yeni içerikler zamanla eklenecek.
          </p>
          <span className="gy-underline" />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((p) => (
            <Spotlight
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col gap-4 p-8"
            >
              <div className="flex items-center gap-3 font-mono text-[11.5px]">
                <span className="rounded-md border border-accent/20 bg-accent/[0.08] px-2.5 py-1 text-accent">
                  {p.meta.category}
                </span>
                <span className="text-faint">{p.meta.readTime}</span>
              </div>
              <div className="font-sora text-[19px] font-semibold leading-[1.35] tracking-[-0.01em] text-balance transition-colors group-hover:text-accent">
                {p.meta.title}
              </div>
              <p className="m-0 text-sm leading-[1.65] text-muted">
                {p.meta.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-mono text-[12px] text-faint">
                  {formatDate(p.meta.date)}
                </span>
                <span className="flex items-center gap-1.5 text-[13.5px] font-bold text-accent">
                  Oku
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Spotlight>
          ))}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
