/* Portfolyo içerik verisi — tasarım dosyasındaki allProjects / faqData ile birebir. */

export type ProjectTag =
  | "Shopify"
  | "React"
  | "React Native"
  | "OpenCart"
  | "WordPress"
  | "Kişisel";

export interface Project {
  name: string;
  url: string | null;
  tech: string;
  kind: string;
  desc: string;
  hue: number;
  /** public/projeler/ altındaki logo yolu (varsa kapakta gösterilir) */
  logo?: string;
  /** Logonun okunması için kapak zemini: koyu logo → "light", açık logo → "dark" */
  logoTheme?: "light" | "dark";
}

export const projects: Project[] = [
  {
    name: "Cras Moda",
    url: "https://www.crasmoda.com",
    tech: "Shopify · Liquid",
    kind: "E-TİCARET",
    desc: "Premium kadın giyim markası için özel Shopify teması: koleksiyon vitrini, renk varyantlı ürün kartları, favoriler, WhatsApp entegrasyonu ve SEO-hazır meta kurgusuyla dönüşüm odaklı bir mağaza.",
    hue: 155,
    logo: "/projeler/crasmoda.avif",
    logoTheme: "dark",
  },
  {
    name: "Xprime Yedek Parça",
    url: "https://www.xprimeyedekparca.com",
    tech: "Shopify · Liquid",
    kind: "E-TİCARET",
    desc: "Beyaz eşya yedek parçasında 600+ ürünlük katalog: derin kategori ağacı, stok durumu, marka vitrini, SSS ve sipariş takibiyle sıfırdan geliştirilmiş özel Shopify teması.",
    hue: 160,
    logo: "/projeler/xprimelogo.webp",
    logoTheme: "dark",
  },
  {
    name: "Voidu",
    url: "https://www.voidu.com",
    tech: "OpenCart",
    kind: "E-TİCARET",
    desc: "Global dijital oyun mağazası; OpenCart üzerinde çok para birimli, yüksek trafikli dijital ürün satış platformu.",
    hue: 260,
    logo: "/projeler/voidulogo.svg",
    logoTheme: "dark",
  },
  {
    name: "Yedek Parçam",
    url: "https://www.yedek-parcam.com",
    tech: "WordPress",
    kind: "E-TİCARET",
    desc: "WordPress + WooCommerce tabanlı yedek parça e-ticaret sitesi; geniş katalog ve arama odaklı kurgu.",
    hue: 230,
    logo: "/projeler/yedekparcam.png",
    logoTheme: "light",
  },
  {
    name: "İstanbul Endüstriyel Mutfak Servisi",
    url: "http://istanbulendustriyelmutfakservisi.com",
    tech: "React",
    kind: "KURUMSAL",
    desc: "Servis işletmesi için React ile geliştirilmiş hızlı kurumsal site.",
    hue: 200,
  },
  {
    name: "Endüstriyel Buzdolabı Tamircisi",
    url: "http://endustriyelbuzdolabitamircisi.com",
    tech: "React",
    kind: "KURUMSAL",
    desc: "Yerel SEO odaklı, React tabanlı hizmet sitesi.",
    hue: 205,
  },
  {
    name: "Atalay Servisi",
    url: "https://atalayservisi.com",
    tech: "Web",
    kind: "KURUMSAL",
    desc: "Servis işletmesi için kurumsal web sitesi.",
    hue: 215,
  },
  {
    name: "Piba Wings Mobility",
    url: "https://www.pibawingsmobility.com",
    tech: "Node.js · TailwindCSS",
    kind: "TURİZM",
    desc: "Tekerlekli sandalye kullanıcıları için engelsiz Türkiye turları platformu. Node.js altyapısı, TailwindCSS arayüzü, çok dilli içerik ve güçlü teknik SEO kurgusu.",
    hue: 190,
    logo: "/projeler/pibawings-logo.png",
    logoTheme: "light",
  },
  {
    name: "Öztiryakiler Yetkili Servisi",
    url: "https://oztiryakileryetkiliservisi.com/",
    tech: "React · Node.js",
    kind: "KURUMSAL",
    desc: "Yetkili servis operasyonu için React + Node.js çözümü.",
    hue: 210,
  },
  {
    name: "Şimşek Çalışma İzni",
    url: "https://www.simsekcalismaizni.com/",
    tech: "React · Node.js",
    kind: "KURUMSAL",
    desc: "Danışmanlık firması için React + Node.js web uygulaması.",
    hue: 220,
    logo: "/projeler/simsekcalismaizni.png",
    logoTheme: "light",
  },
  {
    name: "Oskai",
    url: "https://oskai.com.tr",
    tech: "WordPress",
    kind: "KURUMSAL",
    desc: "WordPress altyapısıyla geliştirilmiş kurumsal web sitesi.",
    hue: 175,
    logo: "/projeler/oskai.png",
    logoTheme: "dark",
  },
  {
    name: "QR Menu List",
    url: "https://www.qrmenulist.com",
    tech: "Kişisel · AI",
    kind: "SAAS",
    desc: "Yapay zekâ destekli QR menü platformu — kişisel SaaS girişimim.",
    hue: 280,
    logo: "/projeler/qrmenulist.png",
    logoTheme: "dark",
  },
  {
    name: "QRCodeShine",
    url: "https://www.qrcodeshine.com",
    tech: "Kişisel",
    kind: "SAAS",
    desc: "QR kod oluşturma platformu.",
    hue: 290,
  },
  {
    name: "Türkiye Nöbetçi Eczane",
    url: "https://www.turkiyenobetcieczane.com",
    tech: "Kişisel",
    kind: "PLATFORM",
    desc: "Türkiye genelinde nöbetçi eczaneleri listeleyen platform.",
    hue: 340,
  },
  {
    name: "Riverside Burgers",
    url: "https://apps.apple.com/tr/iphone/search?l=tr&term=riversideburgers",
    tech: "React Native",
    kind: "MOBİL",
    desc: "iOS ve Android için restoran sipariş uygulaması.",
    hue: 25,
    logo: "/projeler/riversideburgers.webp",
    logoTheme: "dark",
  },
];

export const projectFilters: (ProjectTag | "Tümü")[] = [
  "Tümü",
  "Shopify",
  "React",
  "React Native",
  "OpenCart",
  "WordPress",
  "Kişisel",
];

/** Tasarım dosyasındaki filtre mantığının birebir karşılığı. */
export function filterProjects(
  list: Project[],
  active: string,
): Project[] {
  return list.filter(
    (p) =>
      active === "Tümü" ||
      (p.tech.includes(active) &&
        !(active === "React" && p.tech.includes("React Native"))) ||
      (active === "Kişisel" && p.tech.includes("Kişisel")),
  );
}

export function projectCover(hue: number): string {
  return `linear-gradient(140deg, oklch(0.32 0.06 ${hue}), oklch(0.2 0.04 ${hue + 30}))`;
}

/** Açık logolar için koyu, hafif marka tonlu kapak zemini. */
export function logoCoverDark(hue: number): string {
  return `linear-gradient(140deg, oklch(0.24 0.05 ${hue}), oklch(0.14 0.03 ${hue + 30}))`;
}

export interface CareerItem {
  period: string;
  company: string;
  title: string;
  desc: string;
  active?: boolean;
}

export const career: CareerItem[] = [
  {
    period: "2022 — Bugün",
    company: "Azerion",
    title: "Senior Frontend Developer",
    desc: "Global bir dijital eğlence ve reklam teknolojisi şirketinde büyük ölçekli React uygulamaları geliştiriyorum.",
    active: true,
  },
  {
    period: "2021 — 2022",
    company: "Masse Yapı",
    title: "E-ticaret Yöneticisi",
    desc: "Yapı sektöründe dijital satış kanallarının kurulumu ve yönetimi.",
  },
  {
    period: "2018 — 2021",
    company: "Kurshuni Jewellery",
    title: "E-ticaret Yöneticisi",
    desc: "Mücevher markasının uluslararası e-ticaret operasyonu ve online büyümesi.",
  },
  {
    period: "2017 — 2018",
    company: "Cabani Shoes",
    title: "E-ticaret Yöneticisi",
    desc: "Ayakkabı markasının online satış kanalının yönetimi ve dönüşüm optimizasyonu.",
  },
  {
    period: "2011 — 2017",
    company: "Projesoft Teknoloji",
    title: "UI Tasarımcısı → Tasarım Ekip Lideri → Frontend Developer",
    desc: "Kariyerimin temelleri: tasarım, liderlik ve frontend geliştirmenin bir arada öğrenildiği altı yıl.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqData: Faq[] = [
  {
    q: "Bir Shopify projesi ne kadar sürer?",
    a: "Kapsama göre değişir: hazır tema özelleştirmesi genellikle 2-3 hafta, sıfırdan özel tema geliştirme 4-8 hafta sürer. Keşif görüşmesinden sonra net bir takvim paylaşırım ve ona sadık kalırım.",
  },
  {
    q: "Mevcut altyapımdan Shopify'a geçersem SEO sıralamalarımı kaybeder miyim?",
    a: "Doğru planlanan bir taşımada kayıp yaşanmaz. URL haritası, 301 yönlendirmeleri, meta veriler ve yapılandırılmış veri taşıma sürecinin standart parçasıdır. Daha önce OpenCart ve WordPress'ten yaptığım taşımalarda sıralama korunmuştur.",
  },
  {
    q: "Sadece danışmanlık hizmeti alabilir miyim?",
    a: "Evet. Mevcut mağazanızın denetimi, teknoloji seçimi, ekip yönlendirmesi veya büyüme stratejisi için proje bazlı ya da aylık danışmanlık veriyorum.",
  },
  {
    q: "Proje sonrası destek sağlıyor musunuz?",
    a: "Her projede yayın sonrası destek dönemi vardır. Sonrasında dilerseniz aylık bakım ve geliştirme anlaşmasıyla devam edebiliriz — mağazanız yalnız kalmaz.",
  },
  {
    q: "Fiyatlandırma nasıl çalışıyor?",
    a: "Kapsamı netleştirdikten sonra sabit fiyatlı teklif sunarım; sürpriz maliyet çıkmaz. Danışmanlıkta saatlik veya aylık paketler mevcuttur.",
  },
];

export const techMarquee = [
  "SHOPIFY", "REACT", "NEXT.JS", "TYPESCRIPT", "REACT NATIVE", "NODE.JS",
  "TAILWINDCSS", "OPENCART", "WORDPRESS", "SUPABASE", "FIREBASE", "VERCEL",
  "CLOUDFLARE",
];

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shopify mağazamızı sıfırdan kurdu. Hem hız hem dönüşüm oranımız ilk aydan itibaren gözle görülür şekilde arttı. Süreç boyunca her adımı şeffaflıkla paylaştı.",
    initials: "AK",
    name: "A. K.",
    title: "Moda Markası Kurucusu",
  },
  {
    quote:
      "OpenCart'tan Shopify'a taşınma sürecinde tek bir sıralama kaybı yaşamadık. Teknik SEO bilgisi gerçekten üst düzey; her kararın gerekçesini açıklayarak ilerledi.",
    initials: "MB",
    name: "M. B.",
    title: "Yedek Parça E-ticareti, Genel Müdür",
  },
  {
    quote:
      "React Native uygulamamızı hem iOS hem Android'de sorunsuz yayına aldı. Teslim tarihine gün gün sadık kaldı; sonrasında da desteğini hiç esirgemedi.",
    initials: "SD",
    name: "S. D.",
    title: "Restoran Zinciri Sahibi",
  },
];

export interface SkillGroup {
  label: string;
  items: { name: string; star?: boolean }[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "E-TİCARET & PLATFORMLAR",
    items: [
      { name: "Shopify ★", star: true },
      { name: "OpenCart" },
      { name: "WordPress" },
      { name: "Ödeme Entegrasyonları" },
      { name: "E-ticaret Danışmanlığı" },
    ],
  },
  {
    label: "FRONTEND & MOBİL",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "TailwindCSS" },
      { name: "PWA" },
    ],
  },
  {
    label: "BACKEND & ALTYAPI",
    items: [
      { name: "Node.js" },
      { name: "REST API" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Vercel" },
      { name: "Cloudflare" },
      { name: "Git / GitHub" },
    ],
  },
  {
    label: "SEO & PERFORMANS",
    items: [
      { name: "Teknik SEO" },
      { name: "Core Web Vitals" },
      { name: "Yapılandırılmış Veri" },
      { name: "Google Analytics" },
      { name: "Tag Manager" },
      { name: "Hız Optimizasyonu" },
    ],
  },
];

export interface Service {
  no: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { no: "01", title: "Shopify Mağaza Geliştirme", desc: "Kurulumdan yayına, satışa hazır Shopify mağazaları." },
  { no: "02", title: "React & Next.js Geliştirme", desc: "Modern, hızlı ve ölçeklenebilir web uygulamaları." },
  { no: "03", title: "Kurumsal Web Sitesi", desc: "Markanızı en iyi şekilde temsil eden kurumsal siteler." },
  { no: "04", title: "Mobil Uygulama (React Native)", desc: "iOS ve Android için tek kod tabanlı native deneyim." },
  { no: "05", title: "SEO & Hız Optimizasyonu", desc: "Google'da görünürlük ve Core Web Vitals'ta yeşil skorlar." },
  { no: "06", title: "Teknik Danışmanlık", desc: "E-ticaret altyapısı, teknoloji seçimi ve büyüme stratejisi." },
];

export interface ShopifyThemeOption {
  label: string;
  title: string;
  desc: string;
}

export interface ShopifyCard {
  title: string;
  desc: string;
  wide?: boolean;
  chips?: string[];
  options?: ShopifyThemeOption[];
}

export const shopifyCards: ShopifyCard[] = [
  {
    title: "Tema Geliştirme — Hazır ya da Size Özel",
    desc: "Her projeye tek bir reçete dayatmıyoruz. İki yolla da çalışıyoruz; doğru yaklaşımı hedeflerinize, zaman planınıza ve bütçenize göre birlikte seçiyoruz.",
    wide: true,
    chips: ["Liquid", "Hydrogen", "Theme Kit", "Storefront API"],
    options: [
      {
        label: "SEÇENEK 01",
        title: "Hazır Tema ile",
        desc: "Premium bir Shopify temasını markanıza göre özelleştirir, hızlı ve bütçe-dostu bir açılış sağlarız. Erken satışa başlamak isteyen markalar için ideal.",
      },
      {
        label: "SEÇENEK 02",
        title: "Size Özel Tema ile",
        desc: "Sıfırdan, tamamen markanıza ait bir vitrin: benzersiz tasarım, tam kontrol ve üst düzey performans. Liquid ve Hydrogen ile ölçeklenebilir mağazalar.",
      },
    ],
  },
  {
    title: "Performans & Core Web Vitals",
    desc: "Yavaş mağaza, kaybedilen satıştır. LCP, CLS ve INP metriklerinde ölçülebilir iyileştirme; hız skorunu ciroya dönüştüren optimizasyon.",
  },
  {
    title: "Shopify SEO",
    desc: "Teknik SEO, yapılandırılmış veri ve içerik mimarisiyle mağazanızı Google'da hak ettiği yere taşıyorum.",
  },
  {
    title: "Migrasyon & Kurulum",
    desc: "OpenCart, WooCommerce veya özel altyapılardan Shopify'a veri kaybı ve SEO hasarı olmadan taşınma.",
  },
  {
    title: "Ödeme & Entegrasyonlar",
    desc: "Yerel ödeme sistemleri, kargo, ERP ve pazarlama araçlarıyla sorunsuz entegrasyon; REST API ile özel çözümler.",
  },
];

export interface ProcessStep {
  no: number;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  { no: 1, title: "Keşif", desc: "İşinizi, hedeflerinizi ve müşterinizi dinliyorum. Doğru problemi çözmek her şeyden önce gelir." },
  { no: 2, title: "Planlama & Tasarım", desc: "Kapsam, takvim ve maliyet netleşir. Tasarım onayınız olmadan tek satır kod yazılmaz." },
  { no: 3, title: "Geliştirme", desc: "Düzenli demolarla ilerleyen, test edilmiş, performanslı ve sürdürülebilir kod." },
  { no: 4, title: "Yayın & Büyüme", desc: "Yayına almak son değil, başlangıç. Ölçüm, optimizasyon ve sürekli destek." },
];
