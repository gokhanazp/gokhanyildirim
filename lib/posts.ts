import type { ComponentType } from "react";
import * as shopifyHatalar from "@/content/blog/shopify-magaza-yavaslatan-7-hata.mdx";
import * as nextSeo from "@/content/blog/nextjs-app-router-seo-metadata.mdx";
import * as platformTasima from "@/content/blog/platform-tasima-shopify-gecis.mdx";

export interface PostMeta {
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
}

export interface PostEntry {
  slug: string;
  meta: PostMeta;
  Content: ComponentType;
}

const registry: { slug: string; mod: { meta: PostMeta; default: ComponentType } }[] =
  [
    { slug: "shopify-magaza-yavaslatan-7-hata", mod: shopifyHatalar },
    { slug: "nextjs-app-router-seo-metadata", mod: nextSeo },
    { slug: "platform-tasima-shopify-gecis", mod: platformTasima },
  ];

export const posts: PostEntry[] = registry
  .map((r) => ({ slug: r.slug, meta: r.mod.meta, Content: r.mod.default }))
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getPost(slug: string): PostEntry | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
