export const site = {
  name: "Gökhan Yıldırım",
  role: "Senior Frontend Developer & Shopify Partner",
  /** SEO odaklı ana sayfa başlığı (marka değil, aranan kelime önde) */
  titleDefault:
    "Shopify Uzmanı & Özel Tema Geliştirme — Gökhan Yıldırım | İstanbul",
  url: "https://gokhan-yildirim.com",
  email: "info@gokhan-yildirim.com",
  phoneDisplay: "+90 537 510 20 84",
  phoneE164: "+905375102084",
  whatsapp: "https://wa.me/905375102084",
  location: "İstanbul, Türkiye",
  locale: "tr_TR",
  social: {
    instagram: "https://instagram.com/gokhanazp",
    linkedin: "https://www.linkedin.com/in/gokhanazp/",
  },
  description:
    "İstanbul'da Shopify uzmanı ve Shopify Partner: özel tema geliştirme, mağaza kurulumu, platform taşıma, Shopify SEO ve hız optimizasyonu. 14+ yıllık React & Next.js deneyimi.",
  /** Schema.org ProfessionalService için hizmet listesi */
  serviceTypes: [
    "Shopify tema geliştirme",
    "Shopify mağaza kurulumu",
    "Shopify'a platform taşıma",
    "Shopify SEO",
    "Shopify hız optimizasyonu",
    "E-ticaret web tasarım",
    "React & Next.js geliştirme",
    "React Native mobil uygulama",
    "E-ticaret danışmanlığı",
  ],
  accent: "#35D07F",
} as const;

export const navLinks = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#shopify", label: "Shopify" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/#projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
] as const;
