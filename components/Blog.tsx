import Link from "next/link";
import { posts } from "@/lib/posts";
import { SectionHeader } from "./ui";
import Spotlight from "./Spotlight";

export default function Blog() {
  const featured = posts.slice(0, 3);

  return (
    <section
      id="blog"
      className="relative overflow-clip border-t border-white/[0.06] bg-bg-alt"
    >
      <div className="gy-dots" aria-hidden />
      <div
        className="gy-glow left-[-6%] top-[6%] h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(53,208,127,0.10),transparent_65%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-8 py-[120px]">
        <SectionHeader
          eyebrow="BLOG"
          title="E-ticaret ve frontend üzerine notlar"
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((post, i) => (
            <Spotlight
              key={post.slug}
              href={`/blog/${post.slug}`}
              dataReveal
              className="group flex flex-col gap-4 p-8"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="flex items-center gap-3 font-mono text-[11.5px]">
                <span className="rounded-md border border-accent/20 bg-accent/[0.08] px-2.5 py-1 text-accent">
                  {post.meta.category}
                </span>
                <span className="text-faint">{post.readTime}</span>
              </div>
              <div className="font-sora text-[19px] font-semibold leading-[1.35] tracking-[-0.01em] text-balance transition-colors group-hover:text-accent">
                {post.meta.title}
              </div>
              <p className="m-0 text-sm leading-[1.65] text-muted">
                {post.meta.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-1.5 text-[13.5px] font-bold text-accent">
                Okumaya devam et
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Spotlight>
          ))}
        </div>

        <div data-reveal className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="rounded-full border border-white/[0.14] px-7 py-3.5 text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.04]"
          >
            Tüm yazıları gör
          </Link>
        </div>
      </div>
    </section>
  );
}
