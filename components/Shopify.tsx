import { shopifyCards } from "@/lib/data";
import Spotlight from "./Spotlight";

export default function Shopify() {
  return (
    <section
      id="shopify"
      className="relative overflow-clip border-y border-white/[0.06] border-t-accent/15 bg-[linear-gradient(180deg,#0D1410,#0B0C0E)]"
    >
      <div
        className="gy-motion gy-glow left-1/2 top-[-18%] h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(53,208,127,0.16),transparent_65%)]"
        aria-hidden
      />
      <div className="gy-dots" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1200px] px-8 py-[120px]">
        <div
          data-reveal
          className="mb-[72px] flex flex-col items-center gap-5 text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/35 bg-accent/[0.08] px-[18px] py-2 font-mono text-[12.5px] tracking-[0.1em] text-accent shadow-[0_0_30px_-8px_rgba(53,208,127,0.6)]">
            EN BÜYÜK UZMANLIK ALANIM
          </div>
          <h2 className="m-0 max-w-[18ch] font-sora text-[clamp(36px,5vw,64px)] font-bold leading-[1.08] tracking-[-0.035em] text-balance">
            Shopify&apos;da uçtan uca{" "}
            <span className="bg-[linear-gradient(100deg,var(--color-accent),var(--color-accent-soft))] bg-clip-text text-transparent">
              tam hakimiyet
            </span>
          </h2>
          <p className="m-0 max-w-[62ch] text-[17px] leading-[1.7] text-muted text-pretty">
            Mağaza kurulumundan özel tema geliştirmeye, performans
            optimizasyonundan platform taşımaya kadar Shopify&apos;ın her
            katmanında çalışıyorum. Shopify Partner olarak markaların satış
            altyapısını sadece kurmuyor, büyütüyorum.
          </p>
          <span className="gy-underline" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {shopifyCards.map((card, i) => (
            <Spotlight
              key={card.title}
              dataReveal
              accent={card.wide}
              className={`flex flex-col gap-3.5 p-9 ${card.wide ? "md:col-span-2" : ""}`}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              {card.wide && (
                <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/[0.1] text-accent">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 7h16M6 7l1.5 12h9L18 7M9 7V5a3 3 0 0 1 6 0v2" />
                  </svg>
                </div>
              )}
              <div className="font-sora text-[22px] font-semibold tracking-[-0.01em]">
                {card.title}
              </div>
              <p className="m-0 text-[15px] leading-[1.7] text-muted text-pretty">
                {card.desc}
              </p>
              {card.options && (
                <div className="mt-1 grid gap-3 sm:grid-cols-2">
                  {card.options.map((opt) => (
                    <div
                      key={opt.label}
                      className="rounded-xl border border-accent/20 bg-[linear-gradient(180deg,rgba(53,208,127,0.06),rgba(255,255,255,0.015))] p-4"
                    >
                      <div className="font-mono text-[11px] tracking-[0.1em] text-accent/80">
                        {opt.label}
                      </div>
                      <div className="mt-2 font-sora text-[16px] font-semibold">
                        {opt.title}
                      </div>
                      <p className="m-0 mt-1.5 text-[13.5px] leading-[1.6] text-muted">
                        {opt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {card.chips && (
                <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                  {card.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-accent/25 bg-accent/[0.06] px-2.5 py-[5px] font-mono text-[12px] text-accent"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
