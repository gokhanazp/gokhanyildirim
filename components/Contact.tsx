import { site } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="relative overflow-clip border-t border-accent/15 bg-[linear-gradient(180deg,#0D1410,#0B0C0E)]"
    >
      <div
        className="gy-motion pointer-events-none absolute bottom-[-40%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(53,208,127,0.12),transparent_65%)] blur-[50px]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-[860px] flex-col items-center gap-7 px-8 py-[130px] text-center">
        <h2
          data-reveal
          className="m-0 font-sora text-[clamp(36px,5vw,60px)] font-bold leading-[1.1] tracking-[-0.035em] text-balance"
        >
          Projenizi konuşalım.
        </h2>
        <p
          data-reveal
          className="m-0 max-w-[52ch] text-[17.5px] leading-[1.7] text-muted text-pretty"
        >
          Shopify mağazası, React uygulaması veya e-ticaret danışmanlığı —
          aklınızdaki projeyi bir mesajla anlatın, aynı gün dönüş yapayım.
        </p>
        <div
          data-reveal
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-9 py-[18px] text-[16.5px] font-extrabold text-whatsapp-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(37,211,102,0.35)]"
          >
            <WhatsAppIcon size={22} />
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-white/[0.14] px-9 py-[18px] text-[16px] font-semibold text-ink transition-all hover:border-white/35 hover:bg-white/[0.04]"
          >
            {site.email}
          </a>
        </div>
        <div
          data-reveal
          className="font-mono text-[12.5px] tracking-[0.06em] text-faint"
        >
          İSTANBUL, TÜRKİYE · GMT+3 · GENELLİKLE 2 SAAT İÇİNDE YANIT
        </div>
      </div>
    </section>
  );
}
