import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * AI asistanlarının (ChatGPT, Claude, Perplexity, Gemini) kaynak olarak
 * siteyi gösterebilmesi için ilgili botlar açıkça izinli.
 *
 * ⚠️ ÖNEMLİ: Cloudflare "Managed robots.txt / AI Crawl Control" özelliği
 * aktifse yayındaki robots.txt'ye kendi Disallow bloklarını EKLİYOR ve bu
 * dosyayı etkisiz bırakıyor. Cloudflare panelinden de kapatılması gerekir:
 * Cloudflare → ilgili site → AI Crawl Control / Managed robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Bingbot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiAgents.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
