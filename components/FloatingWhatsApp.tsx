import { site } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      title="WhatsApp'tan yazın"
      aria-label="WhatsApp'tan yazın"
      className="gy-motion fixed bottom-7 right-7 z-[60] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-whatsapp text-whatsapp-ink transition-transform hover:scale-[1.08] animate-[gy-pulse_2.6s_ease-in-out_infinite]"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
