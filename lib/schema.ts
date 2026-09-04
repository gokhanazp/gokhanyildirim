import { site } from "@/lib/site";

/** Sayfa içinde <script type="application/ld+json"> için hazır string */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data);
}

export const PERSON_ID = `${site.url}/#person`;
export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

/** Tüm sayfalarda ortak: WebSite + Person + ProfessionalService */
export function siteGraph() {
  return [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: site.url,
      name: `${site.name} — Shopify Uzmanı`,
      inLanguage: "tr-TR",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      image: `${site.url}/gokhan-yildirim.jpeg`,
      email: site.email,
      telephone: site.phoneE164,
      sameAs: [site.social.instagram, site.social.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      knowsAbout: [
        "Shopify",
        "Shopify Liquid",
        "Shopify Hydrogen",
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        "E-ticaret",
        "Teknik SEO",
        "Core Web Vitals",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: `${site.name} — Shopify Uzmanı & E-ticaret Geliştirici`,
      url: site.url,
      image: `${site.url}/gokhan-yildirim.jpeg`,
      description: site.description,
      email: site.email,
      telephone: site.phoneE164,
      founder: { "@id": PERSON_ID },
      priceRange: "₺₺",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      areaServed: [
        { "@type": "City", name: "İstanbul" },
        { "@type": "Country", name: "Türkiye" },
      ],
      serviceType: [...site.serviceTypes],
      sameAs: [site.social.instagram, site.social.linkedin],
    },
  ];
}

/** BreadcrumbList — items: [{ name, path }] ; path "/" ile başlar */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

/** FAQPage — SADECE gerçek SSS bölümü içeren sayfalarda kullanılmalı */
export function faqPage(
  faqs: readonly { q: string; a: string }[],
  pageUrl: string,
) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
