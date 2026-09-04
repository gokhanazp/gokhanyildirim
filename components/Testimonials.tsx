import { resultCards } from "@/lib/data";
import { Eyebrow } from "./ui";
import Spotlight from "./Spotlight";

/**
 * "Sonuçlar" bölümü — uydurma müşteri yorumlarının yerine geçti.
 * Gerçek, yazılı izinli müşteri yorumları toplandığında buraya ayrı bir
 * referans bloğu eklenebilir.
 */
export default function Testimonials() {
  return (
    <section id="sonuclar" className="mx-auto max-w-[1200px] px-8 py-[120px]">
      <div
        data-reveal
        className="mb-14 flex flex-wrap items-end justify-between gap-6"
      >
        <div className="flex flex-col gap-4">
          <Eyebrow>SONUÇLAR</Eyebrow>
          <h2 className="m-0 font-sora text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em]">
            Sahadan çıkan somut çıktılar
          </h2>
          <span className="gy-underline" />
        </div>
        <p className="m-0 max-w-[38ch] text-[14.5px] leading-[1.7] text-faint text-pretty">
          Her kart yayında olan bir projeye ya da gerçek bir teslim sürecine
          dayanıyor. Proje isimleri talep üzerine referansla birlikte
          paylaşılır.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {resultCards.map((r, i) => (
          <Spotlight
            key={r.title}
            dataReveal
            className="flex flex-col gap-5 p-8"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            <div className="flex flex-col gap-1">
              <div className="font-sora text-[clamp(26px,3vw,34px)] font-bold leading-none tracking-[-0.03em] text-accent">
                {r.metric}
              </div>
              <div className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-faint">
                {r.metricLabel}
              </div>
            </div>

            <div className="font-sora text-[17px] font-semibold leading-[1.4]">
              {r.title}
            </div>

            <p className="m-0 text-[14.5px] leading-[1.7] text-muted text-pretty">
              {r.desc}
            </p>

            <div className="mt-auto border-t border-white/[0.06] pt-5 text-[12.5px] text-faint">
              {r.projectUrl ? (
                <a
                  href={r.projectUrl}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-chip transition-colors hover:text-accent"
                >
                  {r.project} <span aria-hidden>↗</span>
                </a>
              ) : (
                <span className="font-semibold text-chip">{r.project}</span>
              )}
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
}
