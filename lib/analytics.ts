/**
 * Google Analytics 4.
 *
 * Ölçüm kimliği ortam değişkeniyle geçersiz kılınabilir:
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXX
 * Statik export'ta bu değer build sırasında gömülür.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-FS992Q863L";

/** GA4 yalnızca production build'de yüklenir — localhost verisi karışmaz. */
export const analyticsEnabled =
  process.env.NODE_ENV === "production" && Boolean(GA_ID);

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Dönüşüm olayı gönder. gtag yüklenmemişse sessizce geçer. */
export function track(event: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}

/**
 * İletişim linklerini olay adına eşler.
 * GA4'te bu üç olayı "dönüşüm olarak işaretle" ile hedef yapmak gerekiyor.
 */
export function contactEventFor(href: string): string | null {
  if (/(?:wa\.me|whatsapp\.com)/i.test(href)) return "whatsapp_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  return null;
}
