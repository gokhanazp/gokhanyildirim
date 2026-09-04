import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import * as shopifyHatalar from "@/content/blog/shopify-magaza-yavaslatan-7-hata.mdx";
import * as nextSeo from "@/content/blog/nextjs-app-router-seo-metadata.mdx";
import * as platformTasima from "@/content/blog/platform-tasima-shopify-gecis.mdx";
import * as shopifyPartner from "@/content/blog/shopify-partner-nedir.mdx";
import * as shopifyEticaret from "@/content/blog/shopify-ile-e-ticaret.mdx";
import * as shopifySite from "@/content/blog/shopify-ile-site-yaptirmak.mdx";

export interface PostMeta {
  title: string;
  category: string;
  excerpt: string;
  /** Yayın tarihi (ISO) */
  date: string;
  /** Son güncelleme tarihi (ISO). Yoksa `date` kullanılır. */
  updated?: string;
}

export interface PostEntry {
  slug: string;
  meta: PostMeta;
  Content: ComponentType;
  /** MDX gövdesinden hesaplanan gerçek kelime sayısı */
  words: number;
  /** Kelime sayısından türetilen okuma süresi — elle yazılmıyor */
  readTime: string;
  /** dateModified için: meta.updated ?? meta.date */
  updated: string;
}

/** Türkçe okuma hızı varsayımı (kelime/dakika) */
const WPM = 200;

/**
 * MDX kaynağını build sırasında okuyup gerçek kelime sayısını hesaplar.
 * Bu modül yalnızca server component'lardan import edilmelidir.
 */
function analyze(slug: string): { words: number; readTime: string } {
  const file = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  let raw: string;
  try {
    raw = fs.readFileSync(file, "utf8");
  } catch {
    return { words: 0, readTime: "1 dk okuma" };
  }

  const body = raw
    // meta bloğunu çıkar
    .replace(/export\s+const\s+meta\s*=\s*\{[\s\S]*?\n\};?/, " ")
    // kod blokları ve inline kod
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    // görseller ve linkler (link metni kalsın)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    // JSX / HTML etiketleri
    .replace(/<[^>]+>/g, " ")
    // markdown işaretleri
    .replace(/[#>*_~|]+/g, " ")
    .replace(/^\s*[-+]\s+/gm, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = body ? body.split(" ").filter(Boolean).length : 0;
  const minutes = Math.max(1, Math.round(words / WPM));
  return { words, readTime: `${minutes} dk okuma` };
}

const registry: { slug: string; mod: { meta: PostMeta; default: ComponentType } }[] =
  [
    { slug: "shopify-partner-nedir", mod: shopifyPartner },
    { slug: "shopify-ile-e-ticaret", mod: shopifyEticaret },
    { slug: "shopify-ile-site-yaptirmak", mod: shopifySite },
    { slug: "shopify-magaza-yavaslatan-7-hata", mod: shopifyHatalar },
    { slug: "nextjs-app-router-seo-metadata", mod: nextSeo },
    { slug: "platform-tasima-shopify-gecis", mod: platformTasima },
  ];

export const posts: PostEntry[] = registry
  .map((r) => {
    const { words, readTime } = analyze(r.slug);
    return {
      slug: r.slug,
      meta: r.mod.meta,
      Content: r.mod.default,
      words,
      readTime,
      updated: r.mod.meta.updated ?? r.mod.meta.date,
    };
  })
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getPost(slug: string): PostEntry | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Sitemap ve şemalar için: en son güncellenen yazının tarihi */
export function latestUpdate(): Date {
  const times = posts.map((p) => new Date(p.updated).getTime());
  return new Date(times.length ? Math.max(...times) : Date.now());
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
