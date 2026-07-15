import type { Metadata, Viewport } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { faqData } from "@/lib/data";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} | İstanbul`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Shopify Partner",
    "Senior Frontend Developer",
    "React",
    "Next.js",
    "E-ticaret danışmanlığı",
    "Shopify tema geliştirme",
    "Teknik SEO",
    "İstanbul",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role} | İstanbul`,
    description: site.description,
    images: [
      {
        url: "/gokhan-yildirim.jpeg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: ["/gokhan-yildirim.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0C0E",
  colorScheme: "dark",
};

function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        image: `${site.url}/gokhan-yildirim.jpeg`,
        email: site.email,
        sameAs: [site.social.instagram, site.social.linkedin],
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR",
        },
        knowsAbout: [
          "Shopify",
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
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: `${site.name} — ${site.role}`,
        url: site.url,
        founder: { "@id": `${site.url}/#person` },
        areaServed: "Global",
        description: site.description,
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqData.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${sora.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
