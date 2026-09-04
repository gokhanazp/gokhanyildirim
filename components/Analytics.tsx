"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_ID, analyticsEnabled, contactEventFor, track } from "@/lib/analytics";

/**
 * GA4 yükleyici + dönüşüm olayı takibi.
 *
 * Olaylar tek bir delege edilmiş tıklama dinleyicisiyle yakalanıyor; böylece
 * WhatsApp / telefon / e-posta linki nerede olursa olsun (hero, footer, hizmet
 * sayfası CTA'sı, yüzen buton, blog CTA'sı) ayrıca kod eklemek gerekmiyor.
 */
export default function Analytics() {
  useEffect(() => {
    if (!analyticsEnabled) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const event = contactEventFor(href);
      if (!event) return;

      track(event, {
        link_url: href,
        link_text: (anchor.textContent ?? "").trim().slice(0, 80),
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!analyticsEnabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
