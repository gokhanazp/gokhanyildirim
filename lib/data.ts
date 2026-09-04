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
    tech: "Next.js 16 · React 19 · TypeScript · Tailwind CSS 4",
    kind: "KURUMSAL",
    desc: "Servis işletmesi için Next.js 16 App Router ile geliştirilmiş hızlı kurumsal site.",
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
    name: "Endüstriyel Bulaşık Makinesi Servisi",
    url: "https://endustriyelbulasikmakinesiservisi.com/",
    tech: "Node.js · React 19 · Tailwind CSS",
    kind: "KURUMSAL",
    desc: "Endüstriyel bulaşık makinesi servisi için Node.js + React ile geliştirilmiş, yerel SEO odaklı hızlı hizmet sitesi.",
    hue: 198,
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
    tech: "Node.js 20 · Express 4 · React 19 · Tailwind CSS 3",
    kind: "TURİZM",
    desc: "Tekerlekli sandalye kullanıcıları için engelsiz Türkiye turları platformu. Node.js 20 + Express 4 altyapısı, React 19 + Tailwind arayüzü, çok dilli içerik ve güçlü teknik SEO kurgusu.",
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
    tech: "Next.js 15 · React 19 · TypeScript · Tailwind CSS 4",
    kind: "KURUMSAL",
    desc: "Danışmanlık firması için Next.js 15 App Router ile geliştirilmiş web uygulaması.",
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
  {
    name: "Semiha Çınar Beauty",
    url: "https://semihacinarbeauty.com",
    tech: "HTML · Tailwind CSS · Teknik SEO",
    kind: "GÜZELLİK",
    desc: "Bahçeşehir'deki güzellik merkezi için hizmet odaklı tanıtım sitesi: cilt bakımı, microblading ve kirpik lifting sayfaları, WhatsApp randevu akışı ve yerel SEO kurgusu.",
    hue: 330,
    logo: "/projeler/semihacinarbeauty.png",
  },
  {
    name: "ST Global Textile",
    url: "https://www.stglobaltextile.com",
    tech: "HTML · Tailwind CSS · TR/EN i18n",
    kind: "TEKSTİL",
    desc: "Global markalara üretim yapan tekstil firması için iki dilli (TR/EN) kurumsal site; JS tabanlı i18n altyapısı, ürün ve operasyon vitrinleriyle build gerektirmeyen hafif bir yapı.",
    hue: 245,
    logo: "/projeler/stglobaltextile.png",
  },
  {
    name: "İnoksan Servisi",
    url: "http://inoksanservisi.tr",
    tech: "HTML · Tailwind CSS · Yerel SEO",
    kind: "KURUMSAL",
    desc: "İnoksan endüstriyel mutfak ekipmanlarına bakım-onarım veren teknik servis için hızlı, yerel SEO odaklı hizmet sitesi; ekipman bazında servis sayfaları ve doğrudan iletişim akışı.",
    hue: 0,
    logo: "/projeler/inoksanservisi.png",
    logoTheme: "light",
  },
  {
    name: "Akabe Turizm",
    url: "https://akabeturizm.com.tr",
    tech: "HTML · Tailwind CSS · GTM",
    kind: "TURİZM",
    desc: "Hac, umre ve yurt içi kültür turları düzenleyen TÜRSAB üyesi acente için tur vitrini: fiyat ve program kartları, blog rehberleri, WhatsApp danışma ve GTM ölçümleme.",
    hue: 45,
    logo: "/projeler/akabeturizm.png",
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

/** Projeler bölümü artık yeteneğe göre gruplanır (filtre yerine). */
export interface ProjectGroup {
  id: string;
  label: string;
  intro: string;
  names: string[];
}

export const projectGroups: ProjectGroup[] = [
  {
    id: "ecommerce",
    label: "Shopify & E-ticaret",
    intro:
      "Shopify, OpenCart ve WooCommerce üzerinde dönüşüm odaklı, ölçeklenebilir mağazalar.",
    names: ["Cras Moda", "Xprime Yedek Parça", "Voidu", "Yedek Parçam"],
  },
  {
    id: "mobile",
    label: "Mobil Uygulama",
    intro:
      "iOS ve Android için React Native ile geliştirilen native mobil deneyimler.",
    names: ["Riverside Burgers"],
  },
  {
    id: "corporate",
    label: "React & Kurumsal Siteler",
    intro:
      "Kurumsal web siteleri ve React/Node.js tabanlı özel web uygulamaları.",
    names: [
      "Piba Wings Mobility",
      "ST Global Textile",
      "Akabe Turizm",
      "Semiha Çınar Beauty",
      "İnoksan Servisi",
      "Şimşek Çalışma İzni",
      "Oskai",
      "İstanbul Endüstriyel Mutfak Servisi",
      "Endüstriyel Buzdolabı Tamircisi",
      "Endüstriyel Bulaşık Makinesi Servisi",
      "Öztiryakiler Yetkili Servisi",
      "Atalay Servisi",
    ],
  },
  {
    id: "personal",
    label: "Kişisel & SaaS Projeler",
    intro:
      "Kendi girişimlerim: yapay zekâ destekli araçlar ve kullanışlı platformlar.",
    names: ["QR Menu List", "QRCodeShine", "Türkiye Nöbetçi Eczane"],
  },
];

/** Bir gruptaki projeleri, names sırasına göre döndürür. */
export function projectsInGroup(group: ProjectGroup): Project[] {
  return group.names
    .map((n) => projects.find((p) => p.name === n))
    .filter((p): p is Project => Boolean(p));
}

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

/**
 * Ölçülebilir sonuç kartları — uydurma müşteri yorumu yerine, portfolyodaki
 * gerçek projelerden doğrulanabilir çıktılar.
 *
 * ⚠️ Her kartın `metric` değeri yayına almadan önce teyit edilmeli.
 * Gerçek müşteri yorumu toplandığında bu bölümün altına ayrı bir
 * "Referanslar" bloğu eklenebilir.
 */
export interface ResultCard {
  metric: string;
  metricLabel: string;
  title: string;
  desc: string;
  project: string;
  projectUrl?: string;
}

export const resultCards: ResultCard[] = [
  {
    metric: "0",
    metricLabel: "sıralama kaybı",
    title: "Platform taşımada SEO koruması",
    desc: "OpenCart ve WordPress'ten Shopify'a yaptığım taşımalarda URL haritası, 301 yönlendirmeleri ve yapılandırılmış veri baştan planlandı; organik sıralamalar korundu.",
    project: "Voidu · Yedek Parçam",
  },
  {
    metric: "600+",
    metricLabel: "ürünlük katalog",
    title: "Derin katalogda performans",
    desc: "Beyaz eşya yedek parçasında 600+ ürün, derin kategori ağacı, stok durumu ve sipariş takibi — sıfırdan geliştirilmiş özel Shopify teması üzerinde.",
    project: "Xprime Yedek Parça",
    projectUrl: "https://www.xprimeyedekparca.com",
  },
  {
    metric: "14 yıl",
    metricLabel: "20 yayında proje",
    title: "Hem geliştirici hem e-ticaret yöneticisi",
    desc: "2011'den bu yana kod tarafında; 2017—2022 arasında Cabani Shoes, Kurshuni Jewellery ve Masse Yapı'da e-ticaret yöneticisi olarak satış tarafında. Kararları iki taraftan da görmüş bir bakış.",
    project: "Cabani · Kurshuni · Masse Yapı"
  },
  {
    metric: "Yeşil",
    metricLabel: "Core Web Vitals",
    title: "Hız doğrudan satış",
    desc: "LCP, CLS ve INP metriklerinde ölçülebilir iyileştirme; tema ve uygulama katmanında gereksiz script, font ve görsel yükünün temizlenmesi.",
    project: "Shopify hız optimizasyonu",
  },
  {
    metric: "Çok dilli",
    metricLabel: "teknik SEO kurulumu",
    title: "Uluslararası görünürlük",
    desc: "Node.js + React tabanlı turizm platformunda çok dilli içerik mimarisi, hreflang kurgusu ve teknik SEO altyapısı.",
    project: "Piba Wings Mobility",
    projectUrl: "https://www.pibawingsmobility.com",
  },
  {
    metric: "iOS + Android",
    metricLabel: "tek kod tabanı",
    title: "Mobil uygulama teslimi",
    desc: "React Native ile iki platformda tek kod tabanından yayına alınan restoran sipariş uygulaması; mağaza süreçleri dahil uçtan uca teslim.",
    project: "Riverside Burgers",
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
  /** Hizmet detay sayfası — anchor değil gerçek URL */
  href: string;
}

export const services: Service[] = [
  {
    no: "01",
    title: "Shopify Mağaza Kurulumu",
    desc: "Ödeme, kargo, vergi ve katalog dahil satışa hazır teslim.",
    href: "/hizmetler/shopify-magaza-kurulumu",
  },
  {
    no: "02",
    title: "Shopify Tema Geliştirme",
    desc: "Sıfırdan özel tema ya da premium temanın birebir uyarlanması.",
    href: "/hizmetler/shopify-tema-gelistirme",
  },
  {
    no: "03",
    title: "Shopify SEO",
    desc: "URL yapısı, yapılandırılmış veri ve koleksiyon mimarisi.",
    href: "/hizmetler/shopify-seo",
  },
  {
    no: "04",
    title: "Hız & Core Web Vitals",
    desc: "LCP, CLS ve INP ölçümü; öncesi/sonrası raporlu iyileştirme.",
    href: "/hizmetler/shopify-hiz-optimizasyonu",
  },
  {
    no: "05",
    title: "Shopify'a Geçiş",
    desc: "Veri kaybı ve sıralama kaybı olmadan platform taşıma.",
    href: "/hizmetler/shopifya-gecis",
  },
  {
    no: "06",
    title: "React, Next.js & Danışmanlık",
    desc: "Kurumsal siteler, React Native uygulamalar ve e-ticaret danışmanlığı.",
    href: "/hizmetler",
  },
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
