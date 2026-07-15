import { services } from "@/lib/data";
import { SectionHeader } from "./ui";

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="relative overflow-clip border-t border-white/[0.06] bg-bg-alt"
    >
      <div className="gy-dots" aria-hidden />
      <div
        className="gy-glow right-[-6%] top-[10%] h-[380px] w-[380px] bg-[radial-gradient(circle,rgba(96,140,255,0.10),transparent_65%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-8 py-[120px]">
        <SectionHeader
          eyebrow="HİZMETLER"
          title="İşinizi büyütmek için ne gerekiyorsa"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.no}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              className="group relative flex flex-col gap-3 bg-bg-alt p-9 transition-colors duration-300 hover:bg-[#121618]"
            >
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,var(--color-accent),transparent)] transition-transform duration-300 group-hover:scale-x-100" />
              <div className="font-mono text-[26px] font-semibold leading-none text-white/10 transition-colors duration-300 group-hover:text-accent/70">
                {s.no}
              </div>
              <div className="mt-1 font-sora text-[19px] font-semibold">
                {s.title}
              </div>
              <p className="m-0 text-[14.5px] leading-[1.65] text-muted">
                {s.desc}
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Detaylı bilgi <span aria-hidden>→</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
