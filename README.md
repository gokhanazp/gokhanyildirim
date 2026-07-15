# Gökhan Yıldırım — Portfolyo

Senior Frontend Developer & Shopify Partner portfolyo sitesi. Tasarım handoff dosyasından **Next.js 16 (App Router) + React 19 + TypeScript + TailwindCSS v4** ile birebir üretildi.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # production sunucu
```

## Mimari

- **App Router + Server Components.** Tüm bölümler server component; yalnızca etkileşimli iki ada client: `Projects` (filtre) ve `Faq` (akordeon). Scroll-reveal ve sayaç animasyonları tek bir client island'da (`ClientEffects`) IntersectionObserver ile yönetilir.
- **Tailwind v4.** Design token'ları `app/globals.css` içinde `@theme` olarak tanımlı (renkler, fontlar, radius, keyframe'ler). Accent `--ac` / `--color-accent` = `#35D07F`.
- **next/font** ile Sora, Manrope, JetBrains Mono. **next/image** ile portre.
- **SEO:** Metadata API (OG/Twitter, canonical), JSON-LD (Person, Organization, FAQPage) `app/layout.tsx` içinde; `app/sitemap.ts` ve `app/robots.ts`.
- **Erişilebilirlik:** akordeon `aria-expanded`/`aria-controls`, filtre butonları `aria-pressed`, `prefers-reduced-motion` desteği.

## İçerik

Tüm metin/proje/SSS verisi `lib/data.ts` içinde; site sabitleri `lib/site.ts` içinde toplandı.

## Sonraki adımlar (handoff notları)

- Referanslar bölümü **örnek içerik** — gerçek yorumlarla değiştirilecek.
- Blog kartları statik; production'da MDX + content collections'a bağlanmalı.
- Proje kapakları gerçek ekran görüntüleri gelene dek oklch degrade placeholder.
- `site.url` / e-posta gerçek alan adıyla güncellenmeli.
