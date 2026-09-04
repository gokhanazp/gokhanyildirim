import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts, latestUpdate } from "@/lib/posts";

export const dynamic = "force-static";

/**
 * changefreq ve priority bilerek yok — Google bu alanları yok sayıyor.
 * lastmod gerçek içerik tarihlerinden türetiliyor (sabit tarih değil).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const newest = latestUpdate();

  return [
    { url: site.url, lastModified: newest },
    { url: `${site.url}/blog`, lastModified: newest },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.updated),
    })),
  ];
}
