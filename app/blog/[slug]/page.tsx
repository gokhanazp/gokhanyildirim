import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { posts, getPost, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { BUSINESS_ID, PERSON_ID, breadcrumb, graph } from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${site.url}/blog/${slug}`;
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.excerpt,
      url,
      publishedTime: post.meta.date,
      modifiedTime: post.updated,
      authors: [site.name],
      images: [{ url: "/gokhan-yildirim.jpeg", width: 1200, height: 630, alt: post.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
      images: ["/gokhan-yildirim.jpeg"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Content } = post;
  const url = `${site.url}/blog/${slug}`;
  const others = posts.filter((p) => p.slug !== slug).slice(0, 2);
  // Bu yazıyı ilgili gösteren hizmet sayfaları — iç link ağı
  const linkedServices = services
    .filter((sv) => sv.relatedPosts.includes(slug))
    .slice(0, 3);

  // NOT: FAQPage şeması bilerek yok — blog yazılarında SSS bölümü bulunmuyor.
  const jsonLd = graph([
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.meta.title,
      description: post.meta.excerpt,
      url,
      datePublished: post.meta.date,
      dateModified: post.updated,
      inLanguage: "tr-TR",
      wordCount: post.words,
      image: [`${site.url}/gokhan-yildirim.jpeg`],
      author: { "@id": PERSON_ID },
      publisher: { "@id": BUSINESS_ID },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: post.meta.category,
    },
    breadcrumb([
      { name: "Ana sayfa", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.meta.title, path: `/blog/${slug}` },
    ]),
  ]);

  return (
    <div className="min-h-screen overflow-x-clip bg-bg">
      <Nav />
      <main className="mx-auto max-w-[760px] px-6 py-20 sm:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden>←</span> Tüm yazılar
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[12px]">
          <span className="rounded-md border border-accent/20 bg-accent/[0.08] px-2.5 py-1 text-accent">
            {post.meta.category}
          </span>
          <span className="text-faint">{formatDate(post.meta.date)}</span>
          <span className="text-faint">·</span>
          <span className="text-faint">{post.readTime}</span>
        </div>

        <h1 className="mt-5 font-sora text-[clamp(30px,4.5vw,46px)] font-bold leading-[1.12] tracking-[-0.03em] text-balance">
          {post.meta.title}
        </h1>
        <p className="mt-4 text-[18px] leading-[1.7] text-muted text-pretty">
          {post.meta.excerpt}
        </p>
        <span className="mt-6 block gy-underline" />

        <article className="mt-4">
          <Content />
        </article>

        {/* İlgili hizmetler */}
        {linkedServices.length > 0 && (
          <div className="mt-16">
            <div className="mb-5 font-mono text-[12.5px] tracking-[0.12em] text-accent">
              BU KONUDA VERDİĞİM HİZMET
            </div>
            <div className="flex flex-col gap-3">
              {linkedServices.map((sv) => (
                <Link
                  key={sv.slug}
                  href={`/hizmetler/${sv.slug}`}
                  className="gy-card group flex flex-col gap-1.5 p-6"
                >
                  <div className="font-sora text-[16.5px] font-semibold transition-colors group-hover:text-accent">
                    {sv.navLabel}
                  </div>
                  <p className="m-0 text-[14px] leading-[1.65] text-muted">
                    {sv.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-[20px] border border-accent/20 bg-[linear-gradient(140deg,rgba(53,208,127,0.08),rgba(255,255,255,0.015))] p-8">
          <div className="font-sora text-[20px] font-semibold">
            Benzer bir projeniz mi var?
          </div>
          <p className="m-0 text-[15px] leading-[1.7] text-muted">
            Shopify, React veya e-ticaret danışmanlığı — aklınızdakini bir
            mesajla anlatın.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14.5px] font-extrabold text-whatsapp-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(53,208,127,0.35)]"
          >
            WhatsApp&apos;tan Yazın →
          </a>
        </div>

        {/* Diğer yazılar */}
        {others.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 font-mono text-[12.5px] tracking-[0.12em] text-accent">
              DEVAMINI OKU
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/blog/${o.slug}`}
                  className="gy-card group flex flex-col gap-2 p-6"
                >
                  <div className="font-mono text-[11px] text-accent">
                    {o.meta.category}
                  </div>
                  <div className="font-sora text-[16.5px] font-semibold leading-[1.35] transition-colors group-hover:text-accent">
                    {o.meta.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
