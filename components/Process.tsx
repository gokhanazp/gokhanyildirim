import { processSteps } from "@/lib/data";
import { SectionHeader } from "./ui";

export default function Process() {
  return (
    <section
      id="surec"
      className="relative overflow-clip border-t border-white/[0.06] bg-bg-alt"
    >
      <div className="gy-dots" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1200px] px-8 py-[120px]">
        <SectionHeader
          eyebrow="ÇALIŞMA SÜRECİM"
          title="Net, şeffaf, öngörülebilir"
          className="mb-16"
        />

        <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Adımları birleştiren yatay çizgi (masaüstü) */}
          <div
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(53,208,127,0.35),rgba(53,208,127,0.35),transparent)] md:block"
            aria-hidden
          />
          {processSteps.map((step, i) => (
            <div
              key={step.no}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group relative flex flex-col gap-4"
            >
              <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-accent/30 bg-[linear-gradient(140deg,rgba(53,208,127,0.16),rgba(53,208,127,0.04))] font-sora text-[18px] font-bold text-accent shadow-[0_0_30px_-12px_rgba(53,208,127,0.9)] transition-transform duration-300 group-hover:-translate-y-1">
                {step.no}
              </div>
              <div className="font-sora text-[18px] font-semibold">
                {step.title}
              </div>
              <p className="m-0 text-[14.5px] leading-[1.65] text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
