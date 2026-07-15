import { testimonials } from "@/lib/data";
import { Eyebrow } from "./ui";
import Spotlight from "./Spotlight";

export default function Testimonials() {
  return (
    <section
      id="referanslar"
      className="mx-auto max-w-[1200px] px-8 py-[120px]"
    >
      <div
        data-reveal
        className="mb-14 flex flex-wrap items-end justify-between gap-6"
      >
        <div className="flex flex-col gap-4">
          <Eyebrow>REFERANSLAR</Eyebrow>
          <h2 className="m-0 font-sora text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em]">
            Birlikte çalıştıklarım ne diyor?
          </h2>
          <span className="gy-underline" />
        </div>
        <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.02] px-3.5 py-2 font-mono text-[12px] text-faint">
          ÖRNEK İÇERİK — gerçek yorumlarla değiştirilecek
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Spotlight
            key={t.initials}
            dataReveal
            className="flex flex-col gap-5 p-8"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[18px] tracking-[2px] text-accent">
                ★★★★★
              </div>
              <span className="font-sora text-[44px] leading-none text-accent/20">
                &rdquo;
              </span>
            </div>
            <p className="m-0 text-[15px] leading-[1.7] text-chip text-pretty">
              {t.quote}
            </p>
            <div className="mt-auto flex items-center gap-3 border-t border-white/[0.06] pt-5">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-accent/25 bg-accent/[0.12] text-[15px] font-bold text-accent">
                {t.initials}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-sm font-bold">{t.name}</div>
                <div className="text-[12.5px] text-faint">{t.title}</div>
              </div>
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
}
