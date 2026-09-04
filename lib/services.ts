/**
 * Hizmet sayfaları — içerik veri modeli.
 *
 * Her sayfa SEO yol haritasındaki §4.1 şablonunu takip eder:
 * H1 → giriş → kime uygun/uygun değil → kapsam → süreç → teknik derinlik →
 * vaka → fiyat çerçevesi → SSS → CTA → ilgili hizmetler.
 *
 * Yeni hizmet eklemek için: bu dosyaya bir kayıt ekle. Route, sitemap,
 * şema ve iç linkler otomatik oluşur.
 */

export interface ServiceStep {
  title: string;
  duration: string;
  desc: string;
}

export interface ServiceBlock {
  title: string;
  desc: string;
}

export interface ServiceCase {
  name: string;
  url?: string;
  result: string;
}

export interface ServicePage {
  slug: string;
  /** Menü ve kartlarda görünen kısa ad */
  navLabel: string;
  /** H1 — hedef anahtar kelimeyi doğal biçimde içerir */
  h1: string;
  /** <title> — 60-62 karakter hedefi */
  metaTitle: string;
  metaDescription: string;
  /** Kart ve hub sayfasındaki tek satırlık özet */
  summary: string;
  eyebrow: string;
  /** Şemadaki serviceType + sayfanın hedef kelime kümesi */
  keywords: string[];
  intro: string[];
  suitedFor: string[];
  notSuitedFor: string[];
  includes: ServiceBlock[];
  process: ServiceStep[];
  technical: ServiceBlock[];
  cases: ServiceCase[];
  /** Fiyat çerçevesi. `from` doldurulursa sayfada gösterilir. */
  pricing: { note: string; from?: string };
  faqs: { q: string; a: string }[];
  /** Kardeş hizmet slug'ları */
  related: string[];
  /** İlgili blog yazısı slug'ları */
  relatedPosts: string[];
  /** Migrasyon alt sayfaları için üst sayfa slug'ı */
  parent?: string;
  /** Hub sayfasında öne çıkar */
  featured?: boolean;
}

export const services: ServicePage[] = [
  {
    slug: "shopify-tema-gelistirme",
    navLabel: "Shopify Tema Geliştirme",
    h1: "Shopify tema geliştirme — özel tema ve Liquid geliştirme",
    metaTitle: "Shopify Tema Geliştirme — Özel Tema & Liquid",
    metaDescription:
      "Sıfırdan özel Shopify teması veya premium temanın markanıza uyarlanması. Liquid, Online Store 2.0, metafield ve Hydrogen ile ölçeklenebilir mağaza vitrinleri. İstanbul.",
    summary:
      "Sıfırdan özel tema ya da premium temanın birebir uyarlanması — Liquid, Online Store 2.0 ve Hydrogen ile.",
    eyebrow: "SHOPIFY TEMA",
    keywords: [
      "shopify tema geliştirme",
      "shopify özel tema",
      "özel shopify teması",
      "shopify liquid geliştirme",
      "shopify hydrogen geliştirme",
      "figma to shopify",
    ],
    intro: [
      "Shopify'da tema, mağazanın vitrini değil satış motorudur. Hazır bir temanın ayarlarıyla oynayarak elde edilen mağazalar bir yere kadar iş görür; koleksiyon filtreleri, varyant mantığı, beden tablosu, kampanya kurgusu ya da ürün sayfasındaki güven unsurları devreye girdiğinde temanın sınırlarına çarpılır. O noktadan sonra ya tema özelleştirilir ya sıfırdan yazılır.",
      "İki yolla da çalışıyorum ve doğru yolu birlikte seçiyoruz. Premium bir temayı markanıza uyarlamak, erken satışa başlamak isteyen markalar için hızlı ve bütçe-dostudur. Sıfırdan özel tema ise tasarımın tamamen sizin olduğu, üçüncü parti uygulama yükünün minimumda kaldığı ve performansın kontrol altında olduğu yoldur.",
      "Her iki durumda da teslim ettiğim şey aynı: mağaza yöneticisinin bana ihtiyaç duymadan içerik değiştirebildiği, Online Store 2.0 bölümleriyle kurulmuş, hızlı ve okunabilir bir tema.",
    ],
    suitedFor: [
      "Hazır temanın ayarlarıyla çözülemeyen tasarım veya işlev ihtiyacı olan markalar",
      "Figma'da tasarımı hazır olan, birebir koda dökülmesini isteyen ekipler",
      "Uygulama yığınını azaltıp mağazayı hızlandırmak isteyen mağazalar",
      "Koleksiyon, varyant veya ürün sayfası mantığı standart dışı olan katalog sahipleri",
    ],
    notSuitedFor: [
      "Henüz ürün ve içerik hazır olmayan, ilk satışı test etmek isteyen projeler — orada hazır temayla başlamak daha akıllı",
      "Sadece renk ve logo değişikliği yeterli olan mağazalar",
      "Temanın kendisi değil pazarlama tarafı sorunlu olan mağazalar — bunu ilk görüşmede söylerim",
    ],
    includes: [
      {
        title: "Tasarımdan koda birebir uyarlama",
        desc: "Figma veya Adobe XD dosyanız varsa piksel düzeyinde uyarlanır; yoksa mevcut markanızın diline uygun bir arayüz kurgusu birlikte çıkarılır.",
      },
      {
        title: "Online Store 2.0 bölüm mimarisi",
        desc: "Her sayfa türü JSON şablonlarıyla kurulur; içerik yöneticisi bölümleri sürükleyip bırakarak yeni sayfa üretebilir. Kodun kilitlediği bir tema teslim etmiyorum.",
      },
      {
        title: "Ürün ve koleksiyon sayfası kurgusu",
        desc: "Varyant seçimi, stok durumu, beden/ölçü tablosu, çapraz satış blokları, koleksiyon filtreleri ve sıralama.",
      },
      {
        title: "Sepet ve ödeme akışı",
        desc: "Yan panel sepet, sepet içi kampanya bildirimi, kargo eşiği göstergesi ve ödeme adımına giden en kısa yol.",
      },
      {
        title: "Çok dilli ve çok para birimli yapı",
        desc: "Shopify Markets ile dil ve para birimi kurulumu, çeviri anahtarlarının temaya doğru bağlanması.",
      },
      {
        title: "Performans ve teknik SEO temeli",
        desc: "Görsel boyutlandırma, tembel yükleme, kritik CSS, yapılandırılmış veri ve semantik başlık hiyerarşisi tema seviyesinde kurulur.",
      },
      {
        title: "Yönetim dokümanı ve devir",
        desc: "Temanın hangi bölümünün nereden yönetildiğini anlatan kısa bir kılavuz + ekranla anlatım. Tema sizde kalır, bana bağımlı olmazsınız.",
      },
    ],
    process: [
      {
        title: "Keşif ve kapsam",
        duration: "3-5 gün",
        desc: "Katalog yapısı, varyant mantığı, kampanya ihtiyaçları ve mevcut mağazanın sorunları konuşulur. Hazır tema mı özel tema mı kararı burada verilir ve kapsam yazılı olarak netleşir.",
      },
      {
        title: "Bilgi mimarisi ve tasarım",
        duration: "1-2 hafta",
        desc: "Sayfa türleri, bölüm envanteri ve arayüz kararları. Tasarım onayı olmadan tema kodu yazılmaz.",
      },
      {
        title: "Tema geliştirme",
        duration: "2-6 hafta",
        desc: "Liquid şablonları, bölümler, app block'lar ve metafield yapıları. Geliştirme boyunca ayrı bir tema kopyası üzerinde çalışılır; canlı mağaza etkilenmez. Haftalık demo linki paylaşırım.",
      },
      {
        title: "Test ve içerik girişi",
        duration: "3-7 gün",
        desc: "Mobil ve masaüstü tarayıcı testleri, varyant/stok senaryoları, sipariş testi, Core Web Vitals ölçümü ve içeriğin gerçek verilerle doldurulması.",
      },
      {
        title: "Yayın ve destek",
        duration: "1 gün + 30 gün destek",
        desc: "Tema yayına alınır, ölçüm kurulumu kontrol edilir. Yayın sonrası 30 gün boyunca çıkan sorunlar kapsam dahilindedir.",
      },
    ],
    technical: [
      {
        title: "Liquid ve Online Store 2.0",
        desc: "JSON şablonları, dinamik bölümler, blok tabanlı içerik ve app block'lar. Şablon başına bölüm envanteri kurulur, böylece pazarlama ekibi yeni açılış sayfasını kod istemeden çıkarır.",
      },
      {
        title: "Metafield ve metaobject",
        desc: "Ürün özellikleri, beden tabloları, malzeme bilgileri ve marka içerikleri metafield/metaobject olarak modellenir — tema koduna gömülü metin bırakmam.",
      },
      {
        title: "Hydrogen ve Storefront API",
        desc: "Headless bir vitrin gerçekten mantıklıysa Hydrogen + Storefront API ile çalışıyorum. Mantıklı olmadığı durumu da söylüyorum; çoğu mağaza için Online Store 2.0 daha doğru karar.",
      },
      {
        title: "Uygulama yükünün azaltılması",
        desc: "Aynı işi yapan üçüncü parti uygulamalar tema içinde native olarak çözülür. Her kaldırılan uygulama hem aylık maliyet hem sayfa ağırlığı kazancıdır.",
      },
      {
        title: "Yapılandırılmış veri",
        desc: "Product, Offer, AggregateRating, BreadcrumbList ve Organization şemaları tema katmanında, uygulama eklemeden üretilir.",
      },
    ],
    cases: [
      {
        name: "Cras Moda",
        url: "https://www.crasmoda.com",
        result:
          "Premium kadın giyim markası için sıfırdan özel Shopify teması: koleksiyon vitrini, renk varyantlı ürün kartları, favoriler ve SEO-hazır meta kurgusu.",
      },
      {
        name: "Xprime Yedek Parça",
        url: "https://www.xprimeyedekparca.com",
        result:
          "600+ ürünlük beyaz eşya yedek parça kataloğu: derin kategori ağacı, stok durumu, marka vitrini ve sipariş takibi — hepsi özel temada.",
      },
    ],
    pricing: {
      note: "Kapsam netleştikten sonra sabit fiyatlı teklif veriyorum; saat sayarak ilerlemiyorum. Fiyatı belirleyen ana kalemler: sayfa türü sayısı, bölüm envanterinin genişliği, varyant/katalog karmaşıklığı, çok dil/çok para birimi ihtiyacı ve tasarımın hazır olup olmaması. Hazır temanın uyarlanması ile sıfırdan özel tema arasında ciddi bir fark var — ilk görüşmede hangisinin işinizi göreceğini net söylerim.",
    },
    faqs: [
      {
        q: "Hazır tema mı özel tema mı benim için doğru?",
        a: "Kısa yol şu: tasarımınız hazır değilse, katalog basitse ve hızlı satışa başlamak istiyorsanız premium temayı uyarlamak doğru karar. Tasarımınız belliyse, uygulama yığınından kurtulmak istiyorsanız veya standart dışı bir varyant/koleksiyon mantığınız varsa özel tema kendini amorti eder. İlk görüşmede kataloğunuza bakıp hangisi olduğunu söylüyorum.",
      },
      {
        q: "Özel tema geliştirme ne kadar sürer?",
        a: "Hazır temanın markaya uyarlanması genellikle 2-3 hafta. Sıfırdan özel tema, sayfa türü sayısına göre 4-8 hafta. Tasarım hazır geldiğinde bu süre kısalır; tasarım da benim tarafımda üretilecekse 1-2 hafta eklenir.",
      },
      {
        q: "Figma tasarımım var, birebir koda dökülür mü?",
        a: "Evet, birebir uyarlama yaptığım işlerin çoğu böyle başlıyor. Tasarımda Shopify'ın veri modeliyle çelişen bir yer varsa (örneğin varyantla çözülemeyecek bir seçim mantığı) bunu geliştirmeye başlamadan söylüyorum ve alternatif öneriyorum.",
      },
      {
        q: "Tema geliştirilirken mağazam kapanacak mı?",
        a: "Hayır. Geliştirme ayrı bir tema kopyası üzerinde yapılır; canlı mağaza satışa devam eder. Yayına alma tek bir tema yayınlama işlemidir ve dakikalar sürer. Geri dönüş gerekirse eski tema yerinde durur.",
      },
      {
        q: "Temayı sonradan kendim yönetebilir miyim?",
        a: "Amaç bu. Bölüm ve blok yapısı, metin ve görsellerin tema editöründen yönetilebileceği şekilde kurulur; sabit metin gömmüyorum. Teslimde hangi alanın nereden düzenlendiğini anlatan kısa bir kılavuz ve ekran kaydı veriyorum.",
      },
      {
        q: "Hydrogen ile headless yapmalı mıyım?",
        a: "Çoğu mağaza için hayır. Headless, gerçekten özel bir arayüz ihtiyacı, ayrı bir içerik kaynağı veya çok yüksek trafikli bir kurgu varsa mantıklı; aksi halde geliştirme ve bakım maliyetini artırır, tema editörünün kolaylığını kaybettirir. İhtiyacınız gerçekten headless'a işaret ediyorsa Hydrogen ve Storefront API ile çalışıyorum.",
      },
      {
        q: "Tema Türkçe'ye çevrilecek mi?",
        a: "Evet. Premium temaların çoğu İngilizce geliyor; çeviri anahtarları, tarih/para birimi biçimleri ve kargo-iade metinleri Türkçe'ye uyarlanır. Çok dilli mağazalarda Shopify Markets üzerinden dil bazlı içerik kurulur.",
      },
    ],
    related: [
      "shopify-magaza-kurulumu",
      "shopify-hiz-optimizasyonu",
      "shopify-seo",
    ],
    relatedPosts: [
      "shopify-ile-site-yaptirmak",
      "shopify-magaza-yavaslatan-7-hata",
    ],
    featured: true,
  },
  {
    slug: "shopify-magaza-kurulumu",
    navLabel: "Shopify Mağaza Kurulumu",
    h1: "Shopify mağaza kurulumu — satışa hazır teslim",
    metaTitle: "Shopify Mağaza Kurulumu — Satışa Hazır Teslim",
    metaDescription:
      "Sıfırdan Shopify mağaza kurulumu: ödeme, kargo, vergi, alan adı, ürün girişi ve tema kurgusu. Shopify Partner ile satışa hazır teslim. İstanbul.",
    summary:
      "Alan adından ilk siparişe: ödeme, kargo, vergi, katalog ve tema — satışa hazır teslim.",
    eyebrow: "MAĞAZA KURULUMU",
    keywords: [
      "shopify mağaza kurulumu",
      "shopify kurulum hizmeti",
      "shopify mağaza açma",
      "shopify uzmanı",
      "shopify partner türkiye",
    ],
    intro: [
      "Shopify'da mağaza açmak kolaydır; doğru açmak değil. Yanlış kurulan bir mağazanın bedeli genellikle ilk aylarda görünmez: ödeme sağlayıcısı yanlış seçildiği için komisyon fazla ödenir, kargo kuralları eksik olduğu için her siparişte elle müdahale gerekir, vergi ayarı hatalı olduğu için fatura tutmaz, koleksiyon yapısı düşünülmediği için altı ay sonra kategori ağacı baştan kurulur.",
      "Bu hizmet, mağazayı ilk siparişi alabilecek durumda teslim etmek üzerine kurulu. Kurulum boyunca aldığım kararların gerekçesini yazıyorum — hangi ödeme sağlayıcısını neden seçtiğimizi, kargo eşiğini neden o rakama koyduğumuzu altı ay sonra da okuyabilirsiniz.",
      "2017'den 2022'ye kadar Cabani Shoes, Kurshuni Jewellery ve Masse Yapı'da e-ticaret yöneticisiydim. Kurulum kararlarını sadece geliştirici tarafından değil, o kararlarla her gün çalışan tarafından da biliyorum.",
    ],
    suitedFor: [
      "İlk kez online satışa geçen, fiziksel mağazası veya toptan işi olan markalar",
      "Instagram üzerinden satarken kendi mağazasına geçmek isteyen işletmeler",
      "Kurulumu kendi başlatıp yarıda kalmış, düzeltilmesi gereken mağazalar",
      "Türkiye'den yurt dışına satış yapacak, çok para birimli kurulum isteyen markalar",
    ],
    notSuitedFor: [
      "Ürün, fotoğraf ve fiyat bilgisi henüz hazır olmayan projeler — kurulum bunları bekler",
      "Sadece pazaryeri satışı yapacak, kendi vitrinine ihtiyacı olmayan işletmeler",
      "Mevcut mağazası çalışan ve yalnızca tema değişikliği isteyen markalar — o iş tema geliştirme kapsamında",
    ],
    includes: [
      {
        title: "Mağaza ve alan adı kurulumu",
        desc: "Shopify planı seçimi, alan adı bağlama, e-posta yönlendirme, SSL ve yönlendirme kontrolleri.",
      },
      {
        title: "Ödeme altyapısı",
        desc: "Türkiye'ye uygun ödeme sağlayıcısı seçimi ve kurulumu (Shopify Payments uygunluğu, iyzico, PayTR, Param), taksit kurgusu, havale/kapıda ödeme seçenekleri ve test siparişi.",
      },
      {
        title: "Kargo ve teslimat kuralları",
        desc: "Bölge bazlı kargo tarifeleri, ücretsiz kargo eşiği, ağırlık/desi kuralları ve kargo firması entegrasyonu.",
      },
      {
        title: "Vergi ve fatura ayarları",
        desc: "KDV kurgusu, fiyata dahil/hariç gösterim, yurt dışı satışta vergi davranışı ve e-fatura entegrasyonuna hazır veri alanları.",
      },
      {
        title: "Katalog mimarisi",
        desc: "Kategori ağacı, koleksiyon kuralları (otomatik/manuel), varyant yapısı, ürün adlandırma standardı ve ürün girişi ya da toplu içe aktarma.",
      },
      {
        title: "Tema kurulumu ve markalaşma",
        desc: "Premium temanın seçimi ve markanıza uyarlanması, ana sayfa kurgusu, ürün ve koleksiyon sayfası düzeni, kurumsal sayfalar.",
      },
      {
        title: "Yasal sayfalar ve politikalar",
        desc: "Mesafeli satış, iade ve gizlilik metinlerinin mağazaya doğru bağlanması ve ödeme akışında görünür olması.",
      },
      {
        title: "Ölçüm kurulumu",
        desc: "Google Analytics 4, Search Console, Meta ve Google reklam pikselleri, dönüşüm olayları ve satın alma takibi.",
      },
      {
        title: "Eğitim ve devir",
        desc: "Sipariş yönetimi, ürün girişi, kampanya kurma ve stok güncelleme üzerine canlı bir oturum + kısa kılavuz.",
      },
    ],
    process: [
      {
        title: "Keşif ve plan",
        duration: "2-4 gün",
        desc: "Ürün gamı, fiyatlandırma, kargo modeli ve hedef pazar konuşulur. Kurulum kalemleri ve teslim tarihi yazılı olarak çıkar.",
      },
      {
        title: "Altyapı kurulumu",
        duration: "3-5 gün",
        desc: "Plan, alan adı, ödeme, kargo ve vergi ayarları. Bu adımın sonunda mağaza teknik olarak sipariş alabilir durumda olur.",
      },
      {
        title: "Katalog ve içerik",
        duration: "1-2 hafta",
        desc: "Kategori ağacı, koleksiyonlar ve ürün girişi. Ürün sayısı yüksekse toplu içe aktarma şablonu hazırlarım, siz doldurursunuz.",
      },
      {
        title: "Tema ve sayfa kurgusu",
        duration: "1-2 hafta",
        desc: "Tema uyarlaması, ana sayfa, kurumsal sayfalar ve mobil kontrol.",
      },
      {
        title: "Test ve yayın",
        duration: "2-3 gün + 30 gün destek",
        desc: "Gerçek kartla test siparişi, kargo etiketi, iade akışı ve ölçüm doğrulaması. Yayın sonrası 30 gün destek.",
      },
    ],
    technical: [
      {
        title: "Ödeme sağlayıcısı kararı",
        desc: "Shopify Payments Türkiye'de her işletme için açık değil; alternatif sağlayıcıların komisyon, taksit ve mutabakat davranışları farklı. Kararı ciro beklentisi ve taksit ihtiyacına göre veriyorum, gerekçesini yazıyorum.",
      },
      {
        title: "Koleksiyon kuralları",
        desc: "Otomatik koleksiyonlar etiket ve ürün tipi standardına dayanır. Bu standardı kurulumda oturtmak, altı ay sonra binlerce ürünü elle düzeltmekten çok daha ucuz.",
      },
      {
        title: "Metafield ile ürün verisi",
        desc: "Malzeme, beden tablosu, garanti, uyumluluk bilgisi gibi alanlar açıklama metnine gömülmez; metafield olarak modellenir ve temada tek yerden gösterilir.",
      },
      {
        title: "Shopify Markets",
        desc: "Yurt dışı satış varsa dil, para birimi, fiyat yuvarlama ve pazar bazlı ödeme yöntemi kurulumu.",
      },
      {
        title: "Yönlendirme ve URL yapısı",
        desc: "Eski bir siteden geliyorsanız URL yapısı ve 301 haritası kurulumun parçasıdır — bu iş platform taşıma sayfasında ayrıntılı anlatılıyor.",
      },
    ],
    cases: [
      {
        name: "Cras Moda",
        url: "https://www.crasmoda.com",
        result:
          "Kurulum + özel tema birlikte: koleksiyon yapısı, varyant mantığı ve WhatsApp destekli satış akışı tek elden kuruldu.",
      },
      {
        name: "Semiha Çınar Beauty",
        result:
          "Küçük katalogla hızlı açılış: hazır temanın markaya uyarlanması ve satışa hazır teslim.",
      },
    ],
    pricing: {
      note: "Kurulum işleri kapsamı en net ölçülebilen işler; sabit fiyatla çalışıyorum. Fiyatı belirleyen kalemler: ürün sayısı ve ürün girişini kimin yapacağı, ödeme/kargo entegrasyonu sayısı, tema uyarlamasının derinliği, çok dil/çok para birimi ihtiyacı. Ürün girişini siz yaparsanız kurulum ciddi biçimde ucuzlar — şablonu ben hazırlarım.",
    },
    faqs: [
      {
        q: "Shopify aylık ne kadar tutuyor?",
        a: "Shopify abonelik ücreti doğrudan Shopify'a ödenir ve plana göre değişir; buna ödeme sağlayıcısı komisyonu ve varsa uygulama abonelikleri eklenir. Kurulumda amacım uygulama sayısını minimumda tutmak, çünkü aylık gider oradan büyüyor. Görüşmede güncel plan ve komisyon rakamlarıyla aylık gider tablosu çıkarıyoruz.",
      },
      {
        q: "Türkiye'de hangi ödeme yöntemlerini kullanabilirim?",
        a: "Shopify Payments'ın uygunluğu işletme yapınıza bağlı; uygun değilse iyzico, PayTR veya Param gibi yerel sağlayıcılarla taksitli kredi kartı, havale/EFT ve kapıda ödeme kurulabiliyor. Sağlayıcı seçimini komisyon oranı, taksit desteği ve mutabakat kolaylığına göre birlikte veriyoruz.",
      },
      {
        q: "Ürünleri kim girecek?",
        a: "İkisi de olur. Ürün sayısı azsa ben girerim. Katalog büyükse Excel/CSV şablonu hazırlayıp doldurmanızı, ardından içe aktarmayı ve kontrolü benim yapmamı öneriyorum — hem daha hızlı hem daha ekonomik.",
      },
      {
        q: "Mevcut Ticimax/İdeaSoft/WooCommerce mağazamı taşıyabilir misiniz?",
        a: "Evet, ama o iş kurulumdan farklı: ürün/müşteri/sipariş verisinin taşınması ve SEO'yu koruyacak 301 yönlendirme haritası gerekir. Platform taşıma sayfasında süreci ayrıntılı anlattım.",
      },
      {
        q: "Kurulumdan sonra tek başıma yönetebilir miyim?",
        a: "Evet, hedef bu. Teslimde sipariş yönetimi, ürün girişi, kampanya kurma ve stok güncelleme üzerine canlı bir oturum yapıyoruz ve kısa bir kılavuz bırakıyorum. Sonrasında aylık bakım anlaşmasıyla devam etmek isteyenler oluyor, ama zorunlu değil.",
      },
      {
        q: "Shopify Partner ile çalışmak fark yaratıyor mu?",
        a: "Kurulum aşamasında en çok fark yaratan nokta: geliştirme mağazası üzerinden kurulum yapılabilmesi, plan geçişinin doğru zamanda yapılması ve platform güncellemelerine hâkimiyet. Ayrıntıyı blog yazısında anlattım.",
      },
    ],
    related: [
      "shopify-tema-gelistirme",
      "shopifya-gecis",
      "shopify-seo",
    ],
    relatedPosts: ["shopify-ile-e-ticaret", "shopify-partner-nedir"],
    featured: true,
  },
  {
    slug: "shopify-seo",
    navLabel: "Shopify SEO",
    h1: "Shopify SEO — teknik SEO ve organik büyüme",
    metaTitle: "Shopify SEO — Teknik SEO & Organik Büyüme",
    metaDescription:
      "Shopify mağazaları için teknik SEO: URL yapısı, yapılandırılmış veri, koleksiyon mimarisi, indeksleme kontrolü ve içerik planı. Uygulama satmıyorum, mimari kuruyorum.",
    summary:
      "URL yapısı, yapılandırılmış veri, koleksiyon mimarisi ve indeksleme kontrolü — uygulama değil mimari.",
    eyebrow: "SHOPIFY SEO",
    keywords: [
      "shopify seo",
      "shopify seo ayarları",
      "shopify seo nasıl yapılır",
      "e-ticaret teknik seo",
      "shopify yapılandırılmış veri",
    ],
    intro: [
      "Shopify SEO'nun büyük kısmı bir uygulamayla çözülmez. Platformun kendi URL yapısı (ürünlerin hem koleksiyon altında hem kök dizinde erişilebilir olması), etiket sayfalarının ürettiği kopya içerik, sayfalama, filtrelerin oluşturduğu sonsuz URL kombinasyonları ve varyant URL'leri — bunlar mimari kararlar, eklenti işi değil.",
      "Bu hizmet önce mevcut durumu ölçmekle başlıyor: hangi sayfalar indekste, hangileri gösterim alıyor ama tıklanmıyor, hangileri hiç görünmüyor, kopya içerik nereden geliyor. Sonra düzeltme sırası öncelik ve etkiye göre çıkarılıyor. Rapor değil, uygulanmış düzeltme teslim ediyorum.",
      "SEO'yu satarken şunu net söylüyorum: sıralama garantisi vermiyorum, veremem. Verdiğim şey teknik olarak temiz bir mağaza, hedeflenecek doğru sayfa mimarisi ve ölçülebilir bir ilerleme takibi.",
    ],
    suitedFor: [
      "Reklam maliyeti artınca organik kanala ağırlık vermek isteyen mağazalar",
      "Search Console'da gösterim alıp tıklama alamayan mağazalar",
      "Kategori/koleksiyon yapısı büyümüş, kopya içerik ve indeksleme sorunu yaşayan kataloglar",
      "Yeni açılan ve baştan doğru kurulmak isteyen mağazalar",
    ],
    notSuitedFor: [
      "Ürün gamı ve fiyatı pazarda karşılığı olmayan mağazalar — SEO talebi yaratmaz, var olan talebi yakalar",
      "Hemen sonuç bekleyen projeler; teknik düzeltmelerin etkisi haftalar, içeriğin etkisi aylar içinde görünür",
      "Sadece rapor isteyen, düzeltmeyi uygulayacak kaynağı olmayan ekipler",
    ],
    includes: [
      {
        title: "Teknik denetim",
        desc: "İndeksleme durumu, kopya içerik kaynakları, canonical kurgusu, sayfalama, filtre URL'leri, yönlendirme zincirleri, robots ve sitemap kontrolü.",
      },
      {
        title: "Sayfa mimarisi planı",
        desc: "Hangi anahtar kelimenin hangi sayfaya düşeceği, koleksiyon-ürün-içerik dağılımı ve eksik sayfaların listesi. Bir kelime için iki sayfa yarıştırmıyoruz.",
      },
      {
        title: "Koleksiyon ve kategori SEO'su",
        desc: "Koleksiyon başlıkları, açıklama alanları, filtre/etiket sayfalarının indeksleme politikası ve iç link kurgusu.",
      },
      {
        title: "Ürün sayfası optimizasyonu",
        desc: "Başlık ve meta şablonları, açıklama yapısı, görsel alt metinleri, varyant URL davranışı ve yorum/puan gösterimi.",
      },
      {
        title: "Yapılandırılmış veri",
        desc: "Product, Offer, AggregateRating, BreadcrumbList, Organization ve gerektiğinde FAQPage — tema katmanında, uygulama eklemeden.",
      },
      {
        title: "İç link ve içerik planı",
        desc: "Koleksiyon-blog-ürün arası iç link kuralları ve 3-6 aylık içerik takvimi; hangi yazının hangi koleksiyonu beslediği belli olur.",
      },
      {
        title: "Ölçüm ve takip",
        desc: "Search Console ve GA4 kurulumu, dönüşüm olayları, aylık sıralama ve gösterim takibi için kelime seti.",
      },
    ],
    process: [
      {
        title: "Ölçüm ve denetim",
        duration: "1 hafta",
        desc: "Search Console, GA4 ve tarama verisiyle mevcut durum çıkarılır. Temel ölçüm (baseline) kayda geçer — ilerlemeyi buna göre konuşacağız.",
      },
      {
        title: "Öncelik listesi",
        duration: "2-3 gün",
        desc: "Bulgular etki/efor matrisine oturtulur. Neyin şimdi, neyin sonra yapılacağı ve beklenen etkisi yazılı olarak paylaşılır.",
      },
      {
        title: "Teknik düzeltmeler",
        duration: "1-3 hafta",
        desc: "Tema ve ayar seviyesindeki düzeltmelerin uygulanması: canonical, indeksleme, şema, başlık/meta şablonları, iç link kuralları.",
      },
      {
        title: "İçerik ve mimari",
        duration: "4-12 hafta",
        desc: "Eksik koleksiyon/açılış sayfalarının kurulması ve içerik takviminin işletilmesi. Bu adım süreklilik gerektirir.",
      },
      {
        title: "Takip",
        duration: "Aylık",
        desc: "Aylık rapor: indekslenen URL, gösterim alan sorgu sayısı, tıklama oranı düşük sayfalar ve sıradaki iş.",
      },
    ],
    technical: [
      {
        title: "Shopify'ın URL yapısı",
        desc: "Ürünler /products/ altında ve /collections/x/products/ altında erişilebilir. Canonical'ın doğru kurulmadığı mağazalarda bu kopya içerik üretir. Tema seviyesinde tek doğru kaynak sabitlenir.",
      },
      {
        title: "Filtre ve etiket URL'leri",
        desc: "Etiket kombinasyonları teorik olarak sınırsız URL üretir. İndekslenecek filtreler seçilir, geri kalanı tarama bütçesini yemeyecek şekilde kapatılır.",
      },
      {
        title: "Sayfalama ve sonsuz kaydırma",
        desc: "Koleksiyon sayfalamasının taranabilir olması gerekir. Sonsuz kaydırmalı temalarda ürünlerin yalnızca JavaScript ile geldiği durumlar en sık rastladığım indeksleme kaybı nedeni.",
      },
      {
        title: "Yapılandırılmış veri kalitesi",
        desc: "Şema eklemek yetmez; fiyat, stok durumu ve puanın sayfadaki veriyle tutarlı olması gerekir. Tutarsız şema manuel işlem riski taşır.",
      },
      {
        title: "Core Web Vitals bağlantısı",
        desc: "Hız, SEO'nun ayrı bir başlığı değil parçası. Ölçüm ve iyileştirme tarafı hız optimizasyonu sayfasında ayrıntılı.",
      },
    ],
    cases: [
      {
        name: "Piba Wings Mobility",
        url: "https://www.pibawingsmobility.com",
        result:
          "Çok dilli turizm platformunda içerik mimarisi, hreflang kurgusu ve teknik SEO altyapısı sıfırdan kuruldu.",
      },
      {
        name: "Xprime Yedek Parça",
        url: "https://www.xprimeyedekparca.com",
        result:
          "600+ ürünlük katalogda kategori ağacı ve iç link kurgusu, uzun kuyruk parça aramalarını yakalayacak biçimde tasarlandı.",
      },
    ],
    pricing: {
      note: "İki model var: tek seferlik teknik denetim + düzeltme paketi, ya da aylık danışmanlık (denetim, içerik planı, uygulama ve raporlama). Küçük ve orta katalogda tek seferlik paket genellikle yeterli; katalog büyükse veya içerik üretimi de bende olacaksa aylık model daha mantıklı. Sıralama garantisi vermiyorum; ölçüm ve ilerleme raporu veriyorum.",
    },
    faqs: [
      {
        q: "Shopify SEO için uygulama kurmak yeterli mi?",
        a: "Hayır. SEO uygulamaları çoğunlukla meta başlık düzenleme ve basit şema ekleme yapar; Shopify'ın kopya içerik üreten URL yapısı, filtre kombinasyonları, sayfalama ve koleksiyon mimarisi gibi asıl sorunlara dokunmaz. Üstelik bazıları sayfaya ekstra script yükleyip hızı düşürür.",
      },
      {
        q: "Sonuçları ne zaman görürüm?",
        a: "Teknik düzeltmelerin etkisi genellikle 2-6 hafta içinde Search Console'da görünmeye başlar (indekslenen sayfa sayısı, gösterim). İçerik ve yeni sayfa çalışmasının etkisi 3-6 ay. Rekabet düzeyi ve mevcut otoriteye göre bu aralık değişir.",
      },
      {
        q: "Sıralama garantisi veriyor musunuz?",
        a: "Vermiyorum. Google'ın sıralamasını kimse garanti edemez ve garanti veren teklifler genellikle ya çok düşük rekabetli kelimelerden ya riskli yöntemlerden geliyor. Garanti ettiğim şey işin kapsamı ve teslim tarihi; takip ettiğim şey gösterim, tıklama ve indeksleme verisi.",
      },
      {
        q: "Blog yazmak gerçekten gerekli mi?",
        a: "Ürün ve koleksiyon sayfaları satın alma niyetli aramaları yakalar; blog ise karar öncesi aramaları. İkisi birlikte çalıştığında blog, koleksiyon sayfalarını iç linkle besler. Ama içerik üretimini sürdüremeyecekseniz önce teknik tarafı ve koleksiyon mimarisini bitirmek daha doğru.",
      },
      {
        q: "Mevcut sıralamalarımı kaybetme riskim var mı?",
        a: "Doğru yapılan teknik düzeltmede yok. Riskin oluştuğu yer URL değişiklikleri ve indeksleme kararları; ikisi de yönlendirme haritası ve kademeli uygulama ile yürütülür. Değişiklik öncesi mevcut durumun kaydı alınır.",
      },
      {
        q: "Reklamla birlikte mi yürüsün?",
        a: "Genellikle evet. Reklam bugünün satışını, SEO önümüzdeki yılın maliyetini düşürür. Reklam verisi hangi kelimenin gerçekten dönüştüğünü gösterdiği için SEO hedeflerini de netleştirir.",
      },
    ],
    related: [
      "shopify-hiz-optimizasyonu",
      "shopify-tema-gelistirme",
      "shopifya-gecis",
    ],
    relatedPosts: [
      "nextjs-app-router-seo-metadata",
      "shopify-magaza-yavaslatan-7-hata",
    ],
    featured: true,
  },
  {
    slug: "shopify-hiz-optimizasyonu",
    navLabel: "Shopify Hız Optimizasyonu",
    h1: "Shopify hız optimizasyonu — Core Web Vitals iyileştirme",
    metaTitle: "Shopify Hız Optimizasyonu — Core Web Vitals",
    metaDescription:
      "Shopify mağazanızı hızlandırma: LCP, CLS ve INP ölçümü, uygulama yükünün temizlenmesi, görsel ve script optimizasyonu. Ölçüm öncesi/sonrası raporlu.",
    summary:
      "LCP, CLS ve INP ölçümü; uygulama, script, font ve görsel yükünün temizlenmesi. Öncesi/sonrası raporlu.",
    eyebrow: "HIZ & PERFORMANS",
    keywords: [
      "shopify hız optimizasyonu",
      "shopify site hızlandırma",
      "shopify core web vitals",
      "e-ticaret site hızı",
    ],
    intro: [
      "Yavaş mağazanın bedeli iki yerde ödenir: kullanıcı sepete gitmeden çıkar, reklam maliyeti yükselir. Shopify'da hız kaybının kaynağı neredeyse hiç sunucu değildir — Shopify altyapısı hızlıdır. Kaynak genellikle üst üste binmiş üçüncü parti uygulamalar, optimize edilmemiş görseller, gereğinden fazla font dosyası ve tema içinde erken yüklenen script'lerdir.",
      "Bu hizmet ölçümle başlar ve ölçümle biter. Önce laboratuvar ve alan verisi (PageSpeed Insights + Search Console Core Web Vitals) alınır, sonra ağırlığı yaratan kalemler tek tek çıkarılır, düzeltmeler uygulanır ve aynı testler tekrarlanır. Öncesi/sonrası tablo teslimin parçasıdır.",
      "Hız optimizasyonunda en çok kazanç, kod yazmaktan değil bir şeyleri kaldırmaktan gelir. Bunu söylemek zor olabiliyor çünkü kaldırılacak şey genellikle birinin kurmaya karar verdiği bir uygulamadır — ama etkisi en büyük adım budur.",
    ],
    suitedFor: [
      "PageSpeed skoru düşük, mobilde açılışı yavaş mağazalar",
      "Search Console'da Core Web Vitals uyarısı alan mağazalar",
      "Zamanla çok sayıda uygulama biriktirmiş, sayfası ağırlaşmış kataloglar",
      "Reklam harcaması yüksek ve dönüşüm oranını artırmak isteyen markalar",
    ],
    notSuitedFor: [
      "Zaten hızlı olan ve dönüşüm sorunu başka yerde olan mağazalar — ölçümde bunu görürsem söylerim",
      "Tema baştan yeniden yazılmadan kazanç alınamayacak durumdaki çok eski temalar; orada doğru iş tema geliştirme",
    ],
    includes: [
      {
        title: "Ölçüm ve temel kayıt",
        desc: "Mobil/masaüstü PageSpeed, Search Console alan verisi ve ağ şelalesi analizi. LCP, CLS, INP ve TTFB değerleri kayda geçer.",
      },
      {
        title: "Uygulama denetimi",
        desc: "Kurulu uygulamaların sayfaya eklediği script ve stil dosyaları listelenir; aynı işi yapanlar, artık kullanılmayanlar ve tema içinde native çözülebilecekler ayrılır.",
      },
      {
        title: "Görsel optimizasyonu",
        desc: "Boyut ve format (WebP/AVIF), duyarlı görsel setleri, tembel yükleme ve LCP görselinin öncelikli yüklenmesi.",
      },
      {
        title: "Font ve stil",
        desc: "Font dosyası sayısının azaltılması, alt küme (subset) kullanımı, font-display davranışı ve kullanılmayan CSS'in çıkarılması.",
      },
      {
        title: "Script yükleme sırası",
        desc: "Kritik olmayan script'lerin ertelenmesi, üçüncü parti etiketlerin gecikmeli yüklenmesi ve ana iş parçacığını bloklayan işlerin dağıtılması.",
      },
      {
        title: "Düzen kayması (CLS) düzeltmeleri",
        desc: "Görsel ve reklam alanlarına yer ayırma, geç yüklenen bileşenlerin sayfayı zıplatmasının önlenmesi.",
      },
      {
        title: "Öncesi/sonrası raporu",
        desc: "Aynı testlerin tekrarı ve kalem kalem kazanç tablosu. Hangi düzeltmenin ne kadar getirdiği görünür.",
      },
    ],
    process: [
      {
        title: "Ölçüm",
        duration: "1-2 gün",
        desc: "Ana sayfa, koleksiyon ve ürün sayfası için ayrı ölçüm. Alan verisi varsa gerçek kullanıcı deneyimi de tabloya girer.",
      },
      {
        title: "Bulgu raporu ve karar",
        duration: "2-3 gün",
        desc: "Ağırlık kaynakları ve kazanç tahmini. Kaldırılması önerilen uygulamalar için kararı siz veriyorsunuz; alternatif çözüm önerisiyle birlikte sunarım.",
      },
      {
        title: "Uygulama",
        duration: "1-2 hafta",
        desc: "Düzeltmeler tema kopyası üzerinde yapılır, her adımdan sonra ölçüm tekrarlanır. Canlı mağaza etkilenmez.",
      },
      {
        title: "Yayın ve doğrulama",
        duration: "1-3 gün",
        desc: "Yayın sonrası ölçüm, dönüşüm akışının kontrolü ve öncesi/sonrası raporun teslimi.",
      },
      {
        title: "İzleme",
        duration: "4 hafta",
        desc: "Alan verisinin güncellenmesi haftalar alır; bu dönemde Search Console Core Web Vitals raporunu takip ediyorum.",
      },
    ],
    technical: [
      {
        title: "LCP'nin gerçek nedeni",
        desc: "Çoğu mağazada LCP öğesi hero görseli veya ürün fotoğrafıdır. Doğru boyutta üretilmemiş bir hero görseli, tek başına saniyeler ekleyebilir; preload ve fetchpriority ile bu sıralama düzeltilir.",
      },
      {
        title: "Ana iş parçacığı bloklaması (INP)",
        desc: "Üçüncü parti etiketler ve büyük JavaScript paketleri tıklamaya yanıt süresini uzatır. Etiketlerin gecikmeli yüklenmesi ve gereksiz bileşenlerin kaldırılması en çok fayda veren adım.",
      },
      {
        title: "Uygulama script'lerinin izolasyonu",
        desc: "Bazı uygulamalar tema koduna kalıcı iz bırakır; kaldırılan uygulamanın script'i sayfada kalmaya devam eder. Bu artıkların temizlenmesi ölçülebilir kazanç sağlar.",
      },
      {
        title: "Görsel boru hattı",
        desc: "Shopify'ın görsel CDN'i doğru parametrelerle çağrıldığında duyarlı setler üretir. Tema içinde sabit boyutlu img etiketleri yerine srcset kullanılır.",
      },
      {
        title: "Ölçümün doğru okunması",
        desc: "PageSpeed skoru tek başına hedef değil. Karar verirken alan verisindeki LCP/CLS/INP eşiklerine bakıyorum; skor yükseldiği halde kullanıcı deneyimi değişmeyen durumları ayırt etmek önemli.",
      },
    ],
    cases: [
      {
        name: "Voidu",
        url: "https://www.voidu.com",
        result:
          "Yüksek trafikli, çok para birimli dijital ürün platformunda performans ve kararlılık odaklı geliştirme.",
      },
      {
        name: "Cras Moda",
        url: "https://www.crasmoda.com",
        result:
          "Özel tema, uygulama yükü minimumda tutularak kuruldu; görsel ve script optimizasyonu tema seviyesinde yapıldı.",
      },
    ],
    pricing: {
      note: "Hız optimizasyonu genellikle tek seferlik, sabit fiyatlı bir paket olarak çalışıyor: ölçüm + bulgu raporu + uygulama + doğrulama. Fiyatı belirleyen ana kalem tema karmaşıklığı ve kurulu uygulama sayısı. Ölçüm sonucunda kayda değer kazanç görünmüyorsa bunu baştan söylüyorum — yapılacak iş yoksa paket satmıyorum.",
    },
    faqs: [
      {
        q: "PageSpeed skorum 100 olur mu?",
        a: "Shopify mağazalarında 100 gerçekçi bir hedef değil ve gerekli de değil. Ödeme, analitik ve pazarlama script'leri kaçınılmaz bir taban yük yaratır. Hedefim skor değil, Core Web Vitals eşiklerinin (LCP, CLS, INP) alan verisinde yeşile geçmesi.",
      },
      {
        q: "Uygulamalarımı kaldırmak zorunda mıyım?",
        a: "Kararı siz veriyorsunuz. Ben hangi uygulamanın ne kadar ağırlık eklediğini ölçüp gösteriyorum ve mümkün olduğunda tema içinde native alternatifini öneriyorum. Bazı uygulamalar ağırlığına rağmen ciro getiriyor; onlar kalır.",
      },
      {
        q: "Hız gerçekten satışa etki ediyor mu?",
        a: "Sektör genelinde açılış süresi ile dönüşüm arasında güçlü bir ilişki olduğu biliniyor, ama etkinin büyüklüğü mağazadan mağazaya değişir. Bu yüzden abartılı vaat vermiyorum: ölçtüğüm şey hız metrikleri, birlikte izlediğimiz şey dönüşüm oranı.",
      },
      {
        q: "Tema değiştirmek daha mı iyi olur?",
        a: "Bazen evet. Çok eski, Online Store 2.0 öncesi bir temada optimizasyonun getirisi sınırlı kalabiliyor. Ölçümden sonra hangisinin daha mantıklı olduğunu maliyet karşılaştırmasıyla söylüyorum.",
      },
      {
        q: "Kazanç kalıcı mı?",
        a: "Düzeltmeler kalıcı, ama mağaza yaşayan bir şey. Yeni uygulama kurulduğunda veya ağır görsel yüklendiğinde ağırlık geri gelir. Teslimde hangi kararların hızı bozacağını anlatan kısa bir kontrol listesi bırakıyorum.",
      },
    ],
    related: ["shopify-seo", "shopify-tema-gelistirme", "shopify-magaza-kurulumu"],
    relatedPosts: [
      "shopify-magaza-yavaslatan-7-hata",
      "nextjs-app-router-seo-metadata",
    ],
    featured: true,
  },
  {
    slug: "shopifya-gecis",
    navLabel: "Shopify'a Geçiş",
    h1: "Shopify'a geçiş — platform taşıma ve SEO koruması",
    metaTitle: "Shopify'a Geçiş — Platform Taşıma & SEO",
    metaDescription:
      "Mevcut e-ticaret altyapınızdan Shopify'a veri kaybı ve sıralama kaybı olmadan geçiş. Ürün, müşteri, sipariş taşıma ve 301 yönlendirme haritası.",
    summary:
      "Ürün, müşteri ve sipariş verisinin taşınması + SEO'yu koruyan 301 yönlendirme haritası.",
    eyebrow: "PLATFORM TAŞIMA",
    keywords: [
      "shopify'a geçiş",
      "shopify'a taşıma",
      "e-ticaret platform taşıma",
      "shopify migrasyon",
      "301 yönlendirme haritası",
    ],
    intro: [
      "Platform taşımanın teknik kısmı genellikle sanıldığından kolay, riskli kısmı ise sanıldığından büyük. Ürünleri Shopify'a aktarmak bir CSV işidir; asıl iş eski URL yapısının yeni yapıya doğru eşlenmesi, kaybedilecek özelliklerin baştan bilinmesi ve arama motorlarının yeni adresleri sorunsuz devralmasıdır.",
      "Taşımada gördüğüm en yaygın hata, geçişin bir hafta sonu işi sanılması. URL haritası çıkarılmadan yapılan geçişlerde eski adresler 404 verir, Google indeksten düşürür ve organik trafik haftalar içinde erir. Geri dönmek de kolay değildir.",
      "Bu yüzden süreç tersten kurulur: önce mevcut sitenin taranıp indeksteki tüm URL'lerin listesi çıkarılır, sonra her biri için hedef belirlenir, sonra veri taşınır. Yayın günü yapılan tek şey DNS ve yönlendirmelerin devreye alınmasıdır.",
    ],
    suitedFor: [
      "Mevcut altyapısının bakım maliyeti veya kısıtları büyümesini engelleyen mağazalar",
      "Organik trafiği olan ve bunu kaybetmeyi göze alamayan mağazalar",
      "Yurt dışına açılmak isteyip mevcut altyapısında çok dil/para birimi zorlanan markalar",
      "Geliştirici bağımlılığından kurtulup içeriği kendi yönetmek isteyen ekipler",
    ],
    notSuitedFor: [
      "Shopify'ın karşılamadığı çok özel B2B fiyatlandırma veya ERP kurgusu olan işletmeler — bunu ilk incelemede söylerim",
      "Mevcut platformunda sorunu olmayan, sadece tema değiştirmek isteyen mağazalar",
    ],
    includes: [
      {
        title: "Mevcut durum taraması",
        desc: "Sitenin tam taranması, indekste olan URL'lerin listesi, organik trafik alan sayfaların tespiti ve mevcut sıralamaların kaydı.",
      },
      {
        title: "301 yönlendirme haritası",
        desc: "Eski URL → yeni URL eşlemesi, kalıp bazlı kurallar ve karşılığı olmayan sayfalar için en yakın hedef kararı. Harita teslim edilir, sizde kalır.",
      },
      {
        title: "Veri taşıma",
        desc: "Ürünler, varyantlar, görseller, koleksiyonlar, müşteri kayıtları, sipariş geçmişi, blog içerikleri ve kurumsal sayfalar.",
      },
      {
        title: "SEO verisinin taşınması",
        desc: "Başlık ve meta açıklamaları, görsel alt metinleri, yapılandırılmış veri ve iç link yapısı.",
      },
      {
        title: "Tema kurulumu",
        desc: "Mevcut tasarımın Shopify'da yeniden kurulması ya da yeni bir tema — kapsam birlikte belirlenir.",
      },
      {
        title: "Entegrasyonlar",
        desc: "Ödeme, kargo, muhasebe/ERP ve pazarlama araçlarının yeni platformda kurulması ve test edilmesi.",
      },
      {
        title: "Yayın planı ve geri dönüş senaryosu",
        desc: "Geçiş saati, DNS adımları, kontrol listesi ve bir şey ters giderse geri dönüş planı yazılı olarak hazırlanır.",
      },
      {
        title: "Yayın sonrası izleme",
        desc: "Search Console'da tarama hataları, indeksleme durumu ve yönlendirme kontrolü — ilk 4 hafta yakın takip.",
      },
    ],
    process: [
      {
        title: "Envanter ve risk analizi",
        duration: "1 hafta",
        desc: "Mevcut sitenin taranması, veri yapısının incelenmesi ve Shopify'da karşılığı olmayan özelliklerin listelenmesi. Bu listeyi geçişe karar vermeden görüyorsunuz.",
      },
      {
        title: "URL haritası",
        duration: "3-7 gün",
        desc: "İndeksteki her URL için hedef belirlenir. Trafiği olan sayfalar tek tek kontrol edilir, geri kalanı kalıp kurallarıyla eşlenir.",
      },
      {
        title: "Veri taşıma ve tema",
        duration: "2-5 hafta",
        desc: "Ürün/müşteri/sipariş aktarımı, koleksiyon kurgusu, tema kurulumu ve entegrasyonlar. Yeni mağaza şifre korumalı olarak hazırlanır.",
      },
      {
        title: "Test",
        duration: "1 hafta",
        desc: "Veri bütünlüğü, fiyat/stok kontrolü, test siparişi, yönlendirmelerin doğrulanması ve mobil kontrol.",
      },
      {
        title: "Yayın ve izleme",
        duration: "1 gün + 4 hafta",
        desc: "DNS geçişi, yönlendirmelerin devreye alınması, sitemap gönderimi. Sonraki 4 hafta indeksleme ve trafik takibi.",
      },
    ],
    technical: [
      {
        title: "Neden 301, neden hemen",
        desc: "301 kalıcı yönlendirmedir ve sıralama sinyallerini yeni adrese taşır. Yönlendirme yayın anında devrede olmalı; sonradan eklenen yönlendirmeler indeksten düşen sayfaları her zaman geri getirmiyor.",
      },
      {
        title: "Shopify'ın URL kalıpları",
        desc: "Shopify /products/, /collections/, /pages/, /blogs/ kalıplarını zorunlu kılar; eski platformdaki /urun/, /kategori/ gibi yapılar birebir korunamaz. Bu yüzden harita kalıp bazlı kurulur.",
      },
      {
        title: "Kaybedilen özellikler",
        desc: "Her platformda Shopify'ın doğrudan karşılamadığı bir şey vardır: çok kademeli B2B fiyat listeleri, özel hesaplama alanları, belirli fatura akışları. Bunlar uygulama, metafield veya özel geliştirmeyle çözülür — ama maliyeti geçiş kararından önce bilinmeli.",
      },
      {
        title: "Sipariş geçmişi",
        desc: "Sipariş verisi Shopify'a taşınabilir ama iade/değişim akışları eski siparişler için birebir çalışmaz. Genellikle sipariş geçmişini referans amaçlı taşıyıp operasyonu yeni siparişlerden başlatmak en temiz yol.",
      },
      {
        title: "Yayın sonrası ilk 4 hafta",
        desc: "Google yeni yapıyı tararken gösterimlerde geçici dalgalanma normaldir. Kritik olan 404 üretmemek ve sitemap ile yeni URL setini hızlı bildirmek.",
      },
    ],
    cases: [
      {
        name: "Voidu",
        url: "https://www.voidu.com",
        result:
          "OpenCart üzerinde yüksek trafikli, çok para birimli dijital ürün platformu — platformun veri modeli ve URL yapısıyla uzun süreli çalışma deneyimi.",
      },
      {
        name: "Yedek Parçam",
        url: "https://www.yedek-parcam.com",
        result:
          "WordPress + WooCommerce tabanlı geniş katalog: WooCommerce veri yapısı ve URL kalıpları üzerinde saha deneyimi.",
      },
    ],
    pricing: {
      note: "Taşıma fiyatı iki şeye bağlı: veri hacmi (ürün/varyant/müşteri/sipariş sayısı) ve indeksteki URL sayısı. Envanter ve risk analizi ayrı bir adım olarak da alınabilir — geçişe karar vermeden önce neyin kaybedileceğini görmek isteyenler için mantıklı bir başlangıç. Tema yeniden kurulacaksa o kalem ayrı fiyatlanır.",
    },
    faqs: [
      {
        q: "Shopify'a geçerken SEO sıralamalarımı kaybeder miyim?",
        a: "Doğru planlanan bir taşımada kalıcı kayıp yaşanmaz. Kritik nokta, indekste olan her URL için bir hedef belirlemek ve 301 yönlendirmeleri yayın anında devreye almak. Geçişten sonraki ilk haftalarda gösterimlerde dalgalanma görülebilir; bu normaldir ve toparlanır.",
      },
      {
        q: "Taşıma ne kadar sürer?",
        a: "Küçük katalogda 2-3 hafta, orta ölçekli bir mağazada 4-6 hafta. Süreyi uzatan şey ürün sayısı değil, entegrasyon sayısı ve indeksteki URL hacmi.",
      },
      {
        q: "Mağazam geçiş sırasında kapanacak mı?",
        a: "Hayır. Yeni mağaza şifre korumalı olarak hazırlanır, eski site satışa devam eder. Kesinti yalnızca DNS geçişi anındadır ve dakikalarla ölçülür.",
      },
      {
        q: "Müşteri şifreleri taşınıyor mu?",
        a: "Hayır — şifreler şifrelenmiş biçimde saklandığı için hiçbir platform arasında taşınamaz. Müşteri kayıtları taşınır, müşterilerin ilk girişte şifre yenilemesi gerekir. Geçiş duyurusunu bu bilgiyle birlikte planlamak şart.",
      },
      {
        q: "Hangi platformlardan taşıma yapıyorsunuz?",
        a: "OpenCart ve WooCommerce/WordPress tarafında doğrudan saha deneyimim var. Ticimax, İdeaSoft, İkas, T-Soft ve Magento taşımaları da aynı yöntemle yürüyor: veri ihracatı, URL eşlemesi ve yönlendirme. Kaynak platformun veri ihracat yeteneği süreci belirliyor.",
      },
      {
        q: "Eski sitemi kapatabilir miyim?",
        a: "Alan adı sizde kalmalı ve yönlendirmeler çalışmaya devam etmeli. Eski altyapıyı kapatabilirsiniz, ama yönlendirmeler alan adı üzerinden (Shopify veya DNS/CDN katmanında) yaşamaya devam eder.",
      },
    ],
    related: [
      "opencarttan-shopifya-gecis",
      "woocommerceden-shopifya-gecis",
      "shopify-seo",
    ],
    relatedPosts: ["platform-tasima-shopify-gecis", "shopify-ile-e-ticaret"],
    featured: true,
  },
  {
    slug: "opencarttan-shopifya-gecis",
    parent: "shopifya-gecis",
    navLabel: "OpenCart → Shopify",
    h1: "OpenCart'tan Shopify'a geçiş",
    metaTitle: "OpenCart'tan Shopify'a Geçiş — Veri & SEO",
    metaDescription:
      "OpenCart mağazanızı Shopify'a taşıma: ürün/müşteri/sipariş aktarımı, SEO URL yapısının eşlenmesi ve 301 yönlendirme haritası. OpenCart deneyimiyle.",
    summary:
      "OpenCart'ın SEO URL yapısı, çoklu mağaza kurgusu ve veri modeliyle çalışılmış geçiş süreci.",
    eyebrow: "OPENCART → SHOPIFY",
    keywords: [
      "opencart'tan shopify'a geçiş",
      "opencart shopify taşıma",
      "opencart migrasyon",
    ],
    intro: [
      "OpenCart'tan Shopify'a geçişin en kritik tarafı URL yapısıdır. OpenCart varsayılan olarak `index.php?route=product/product&product_id=123` biçiminde çalışır; SEO URL'ler açıksa `urun-adi` gibi düz adresler üretir. Çoğu mağazada zamanla her ikisi de indekse girmiş olur — yani taşımada tek değil iki URL setini karşılamak gerekir.",
      "İkinci kritik nokta veri modelidir. OpenCart'ta ürün seçenekleri (options) Shopify'ın varyant mantığıyla birebir örtüşmez: OpenCart'ta fiyat farkı ekleyen seçenekler tanımlanabilir, Shopify'da her fiyat kombinasyonu ayrı bir varyant olmak zorundadır. Bu eşleme geçişten önce çıkarılmalı, yoksa katalog Shopify'a yanlış girer.",
      "OpenCart'la uzun süre çalıştım — Voidu, OpenCart üzerinde yüksek trafikli, çok para birimli bir dijital ürün platformu. Platformun veritabanı yapısını, seçenek mantığını ve SEO URL davranışını dışarıdan okuyarak değil kullanarak biliyorum.",
    ],
    suitedFor: [
      "Eklenti ve tema bakımı yükü artan, güncelleme korkusuyla yaşayan OpenCart mağazaları",
      "OpenCart 1.5/2.x gibi eski sürümlerde kalmış, güvenlik güncellemesi almayan kurulumlar",
      "Organik trafiği olan ve bunu koruyarak taşınmak isteyen mağazalar",
    ],
    notSuitedFor: [
      "OpenCart üzerinde ağır özel geliştirme yapılmış, o mantığın Shopify'da karşılığı bulunmayan işletmeler — inceleme sonrası net söylerim",
    ],
    includes: [
      {
        title: "Çift URL setinin çıkarılması",
        desc: "Hem SEO URL'ler hem `index.php?route=` biçimindeki adresler taranır; ikisi de yönlendirme haritasına girer.",
      },
      {
        title: "Seçenek → varyant eşlemesi",
        desc: "OpenCart seçenekleri Shopify varyantlarına dönüştürülür; fiyat farkı ekleyen seçenekler için varyant matrisi kurulur.",
      },
      {
        title: "Veri aktarımı",
        desc: "Ürünler, görseller, kategoriler (Shopify koleksiyonlarına), üretici/marka bilgisi, müşteriler, adresler ve sipariş geçmişi.",
      },
      {
        title: "Kategori → koleksiyon kurgusu",
        desc: "OpenCart'ın çok kademeli kategori ağacı Shopify'da koleksiyon + filtre yapısına oturtulur.",
      },
      {
        title: "SEO alanlarının taşınması",
        desc: "Ürün ve kategori meta başlık/açıklamaları, görsel alt metinleri ve blog içerikleri.",
      },
      {
        title: "301 yönlendirme haritası",
        desc: "Kalıp bazlı kurallar + trafiği olan sayfalar için tek tek eşleme. Harita dosyası sizde kalır.",
      },
    ],
    process: [
      {
        title: "Veritabanı ve URL envanteri",
        duration: "3-5 gün",
        desc: "OpenCart veritabanından ürün/seçenek/kategori yapısının çıkarılması ve indeksteki URL setinin taranması.",
      },
      {
        title: "Eşleme planı",
        duration: "3-5 gün",
        desc: "Seçenek→varyant ve kategori→koleksiyon eşlemesi ile 301 haritası. Kaybedilecek özellikler listesi bu adımda netleşir.",
      },
      {
        title: "Aktarım ve tema",
        duration: "2-4 hafta",
        desc: "Veri aktarımı, koleksiyon kurgusu, tema kurulumu ve entegrasyonlar.",
      },
      {
        title: "Test",
        duration: "3-7 gün",
        desc: "Varyant/fiyat doğrulaması, stok kontrolü, test siparişi ve yönlendirmelerin toplu doğrulaması.",
      },
      {
        title: "Yayın ve izleme",
        duration: "1 gün + 4 hafta",
        desc: "DNS geçişi, yönlendirmelerin devreye alınması ve Search Console takibi.",
      },
    ],
    technical: [
      {
        title: "SEO URL ve keyword tablosu",
        desc: "OpenCart'ta SEO URL'ler ayrı bir tabloda (`url_alias` / `seo_url`) tutulur. Bu tablo, yönlendirme haritasının en güvenilir kaynağıdır — taramaya ek olarak doğrudan buradan da eşleme çıkarıyorum.",
      },
      {
        title: "Seçenek fiyat farkları",
        desc: "OpenCart'ta bir seçeneğe `+50 TL` eklemek mümkündür; Shopify'da bu ancak ayrı varyant olarak modellenebilir. Çok seçenekli ürünlerde varyant sayısı hızla büyür ve Shopify'ın varyant limitine takılabilir — bu durumda metafield veya ürün bölme kararı verilir.",
      },
      {
        title: "Çoklu mağaza (multi-store)",
        desc: "OpenCart'ta tek kurulumdan birden fazla vitrin yayınlanabilir. Shopify'da bunun karşılığı Markets veya ayrı mağazalardır; hangisinin doğru olduğu vergi ve envanter kurgusuna bağlı.",
      },
      {
        title: "Görsel yolları",
        desc: "OpenCart görselleri `image/catalog/` altında tutar ve boyutlandırılmış kopyalar üretir. Aktarımda orijinal dosyalar alınır, Shopify'ın kendi görsel CDN'i devreye girer.",
      },
      {
        title: "Eklenti mantığının yeniden kurulması",
        desc: "OpenCart eklentileriyle çözülmüş kampanya, hediye ürün veya toplu indirim kurguları Shopify'da Discounts, Functions veya uygulama ile yeniden kurulur.",
      },
    ],
    cases: [
      {
        name: "Voidu",
        url: "https://www.voidu.com",
        result:
          "OpenCart üzerinde global, çok para birimli ve yüksek trafikli dijital ürün mağazası — platformun veri modeli ve ölçek davranışıyla uzun süreli çalışma.",
      },
    ],
    pricing: {
      note: "Fiyatı belirleyen kalemler: ürün ve seçenek karmaşıklığı (varyant matrisi ne kadar büyüyor), indeksteki URL sayısı, sipariş/müşteri hacmi ve tema yeniden kurulacak mı. OpenCart tarafında veritabanına erişim verilebiliyorsa eşleme çok daha hızlı ve güvenilir çıkar.",
    },
    faqs: [
      {
        q: "OpenCart'taki `index.php?route=` adreslerim ne olacak?",
        a: "Onlar da yönlendirme haritasına girer. Bu adresler geçmişte indekslendiyse ve dış siteler onlara link verdiyse, yalnızca SEO URL'leri eşlemek yetmez. İki seti birlikte topluyorum.",
      },
      {
        q: "Ürün seçeneklerim Shopify'da aynı çalışır mı?",
        a: "Mantık farklı. Shopify'da fiyatı etkileyen her seçim ayrı bir varyanttır ve varyant sayısında sınır vardır. Çok seçenekli ürünlerde ya varyant matrisi kurulur ya ürün bölünür ya da fiyatı etkilemeyen seçimler metafield/özel alan olarak taşınır. Eşleme planında hangisinin uygulanacağı yazılı olur.",
      },
      {
        q: "OpenCart sürümüm çok eski, sorun olur mu?",
        a: "Genellikle olmaz — hatta geçiş için en iyi gerekçe. Eski sürümlerde veri ihracatı biraz daha elle yürür, ama veritabanına erişim varsa yapı doğrudan okunabilir.",
      },
      {
        q: "Sipariş geçmişim taşınır mı?",
        a: "Taşınabilir. Ancak eski siparişler üzerinden Shopify'ın iade/değişim akışları birebir çalışmaz; sipariş geçmişini referans amaçlı taşımak, operasyonu yeni siparişlerden başlatmak en temiz yol.",
      },
    ],
    related: ["shopifya-gecis", "woocommerceden-shopifya-gecis", "shopify-seo"],
    relatedPosts: ["platform-tasima-shopify-gecis"],
  },
  {
    slug: "woocommerceden-shopifya-gecis",
    parent: "shopifya-gecis",
    navLabel: "WooCommerce → Shopify",
    h1: "WooCommerce'den Shopify'a geçiş",
    metaTitle: "WooCommerce'den Shopify'a Geçiş — Veri & SEO",
    metaDescription:
      "WordPress/WooCommerce mağazanızı Shopify'a taşıma: ürün ve blog içeriği aktarımı, permalink yapısının eşlenmesi ve 301 yönlendirme haritası.",
    summary:
      "WooCommerce ürün/blog verisi, permalink yapısı ve eklenti mantığının Shopify'a taşınması.",
    eyebrow: "WOOCOMMERCE → SHOPIFY",
    keywords: [
      "woocommerce'den shopify'a geçiş",
      "woocommerce shopify taşıma",
      "wordpress shopify geçiş",
    ],
    intro: [
      "WooCommerce'den Shopify'a geçiş kararı genellikle tek bir yorgunluktan doğar: bakım. WordPress çekirdeği, WooCommerce, tema ve on beş eklenti birbirine bağımlıdır; birini güncellemek diğerini bozabilir. Sunucu, yedek, güvenlik ve performans sizin sorumluluğunuzdadır. Shopify bu yükü barındırılmış (hosted) modelle üstlenir.",
      "Taşımanın teknik olarak en dikkat gerektiren yeri permalink yapısıdır. WooCommerce'de ürün adresleri `/product/urun-adi/`, `/urun/urun-adi/` veya kategori öneki içeren biçimlerde olabilir; blog yazıları da tarih içeren kalıplar kullanabilir. Shopify bu kalıpları zorunlu yapısına (`/products/`, `/blogs/haber/`) çevirir — yani her kalıp için kural yazılması gerekir.",
      "İkinci dikkat noktası içerik: WooCommerce mağazalarının çoğunda ciddi bir blog arşivi ve sayfa yığını olur, ve organik trafiğin önemli kısmı oradan gelir. Bu içeriğin taşınmadan bırakılması, taşımada en sık gördüğüm trafik kaybı nedeni.",
    ],
    suitedFor: [
      "Eklenti ve güncelleme bakımından yorulmuş, sunucu yönetmek istemeyen mağazalar",
      "Trafik arttıkça performans ve barındırma maliyeti büyüyen mağazalar",
      "Blog arşivi güçlü ve bu trafiği koruyarak taşınmak isteyen markalar",
    ],
    notSuitedFor: [
      "Sitesinin büyük kısmı içerik/üyelik olan, e-ticaret tarafı küçük kalan projeler — orada WordPress'te kalmak mantıklı olabilir",
      "WooCommerce üzerinde çok özel B2B fiyat/rol kurgusu olan işletmeler",
    ],
    includes: [
      {
        title: "Permalink kalıp analizi",
        desc: "Ürün, kategori, sayfa ve blog kalıplarının tespiti; her kalıp için Shopify hedefi ve kural yazımı.",
      },
      {
        title: "Ürün ve varyasyon aktarımı",
        desc: "Basit ve varyasyonlu ürünler, özel alanlar (custom fields), stok, ağırlık ve görseller.",
      },
      {
        title: "Blog ve sayfa taşıma",
        desc: "Yazılar, görseller, yazar/tarih bilgisi ve iç linklerin yeni yapıya göre güncellenmesi.",
      },
      {
        title: "Müşteri ve sipariş verisi",
        desc: "Müşteri kayıtları, adresler ve sipariş geçmişi.",
      },
      {
        title: "Eklenti mantığının yeniden kurulması",
        desc: "Kampanya, kupon, üyelik indirimi, kargo kuralları ve form akışlarının Shopify karşılıklarıyla kurulması.",
      },
      {
        title: "301 yönlendirme haritası",
        desc: "Kalıp bazlı kurallar + trafiği olan sayfalar için tek tek eşleme.",
      },
    ],
    process: [
      {
        title: "Envanter",
        duration: "3-5 gün",
        desc: "Ürün/varyasyon yapısı, eklenti listesi, permalink kalıpları ve indeksteki URL setinin çıkarılması.",
      },
      {
        title: "Eşleme ve karar",
        duration: "3-5 gün",
        desc: "Eklentilerle çözülen işlerin Shopify karşılığı, kaybedilecek özellikler ve 301 haritası.",
      },
      {
        title: "Aktarım ve tema",
        duration: "2-5 hafta",
        desc: "Ürün, blog, müşteri ve sipariş aktarımı; tema kurulumu ve entegrasyonlar.",
      },
      {
        title: "Test",
        duration: "3-7 gün",
        desc: "Varyasyon/fiyat kontrolü, blog içeriklerinin ve iç linklerin doğrulanması, test siparişi.",
      },
      {
        title: "Yayın ve izleme",
        duration: "1 gün + 4 hafta",
        desc: "DNS geçişi, yönlendirmeler, sitemap gönderimi ve indeksleme takibi.",
      },
    ],
    technical: [
      {
        title: "Varyasyonlu ürünler",
        desc: "WooCommerce'de varyasyonlar üst ürüne bağlı ayrı kayıtlardır ve her birinin kendi SKU/stok/fiyatı olabilir. Shopify varyant modeline eşlemesi çoğunlukla doğrudandır; sorun, üç seçenekten fazlasını kullanan ürünlerde çıkar (Shopify'ın seçenek sayısı sınırı).",
      },
      {
        title: "Blog kalıpları",
        desc: "WordPress'te `/2024/03/yazi-adi/` gibi tarihli kalıplar yaygın. Shopify blog yazıları `/blogs/<blog>/<slug>` yapısındadır; tarihli kalıp korunamaz, kural bazlı yönlendirme şart.",
      },
      {
        title: "Özel alanlar (custom fields / ACF)",
        desc: "ACF veya özel alanlarla tutulan ürün bilgileri Shopify'da metafield olarak modellenir; temada tek yerden gösterilir. Bu eşleme atlanırsa ürün sayfalarında bilgi kaybı olur.",
      },
      {
        title: "Yönlendirmelerin nerede duracağı",
        desc: "Shopify kendi URL Redirects aracıyla toplu yönlendirme kabul eder. Çok büyük setlerde veya kalıp bazlı kurallarda DNS/CDN katmanı (örneğin Cloudflare) daha esnek çalışır.",
      },
      {
        title: "Barındırma yükünün devri",
        desc: "Geçişten sonra sunucu, SSL, yedek ve güvenlik güncellemesi Shopify tarafında kalır. Eski sunucuyu kapatmadan önce yönlendirmelerin alan adı üzerinden çalıştığını doğrulamak gerekir.",
      },
    ],
    cases: [
      {
        name: "Yedek Parçam",
        url: "https://www.yedek-parcam.com",
        result:
          "WordPress + WooCommerce tabanlı geniş katalog: varyasyon yapısı, arama odaklı kurgu ve permalink davranışıyla saha deneyimi.",
      },
    ],
    pricing: {
      note: "Fiyatı belirleyen kalemler: ürün/varyasyon sayısı, blog arşivinin büyüklüğü, eklentilerle çözülmüş özel iş sayısı ve indeksteki URL hacmi. Veritabanı yedeği veya WooCommerce ihracat dosyaları verilebiliyorsa envanter adımı hızlanır.",
    },
    faqs: [
      {
        q: "Blog yazılarım taşınır mı?",
        a: "Evet ve taşınması önemli — WooCommerce mağazalarında organik trafiğin ciddi kısmı blog arşivinden gelir. Yazılar, görseller ve iç linkler taşınır; tarihli permalink kalıpları için kural bazlı yönlendirme yazılır.",
      },
      {
        q: "Eklentilerle yaptığım işler ne olacak?",
        a: "Her eklenti için üç seçenek var: Shopify'ın native özelliği, bir Shopify uygulaması veya tema içinde özel geliştirme. Envanter adımında eklenti listesini çıkarıp her biri için hangisinin uygulanacağını ve maliyetini yazıyorum.",
      },
      {
        q: "WooCommerce'de fiyat rolüne göre değişiyor, Shopify'da olur mu?",
        a: "Müşteri segmentine göre fiyatlandırma Shopify'da mümkün ama modeli farklı (B2B özellikleri, müşteri etiketleri, Discounts/Functions). Kurgunuz çok kademeliyse bunu geçiş kararından önce incelemek gerekir; her senaryo taşınabilir değil.",
      },
      {
        q: "Sunucumu hemen kapatabilir miyim?",
        a: "Hayır, önce yönlendirmelerin alan adı üzerinden çalıştığını doğrulamak gerekir. Alan adı sizde kalır; eski barındırmayı yönlendirmeler doğrulandıktan sonra kapatabilirsiniz.",
      },
    ],
    related: ["shopifya-gecis", "opencarttan-shopifya-gecis", "shopify-magaza-kurulumu"],
    relatedPosts: ["platform-tasima-shopify-gecis", "shopify-ile-e-ticaret"],
  },
];

/** Hub sayfası ve sitemap için: üst seviye (parent'ı olmayan) hizmetler */
export const topLevelServices = services.filter((s) => !s.parent);

export function getService(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

export function childServices(slug: string): ServicePage[] {
  return services.filter((s) => s.parent === slug);
}
