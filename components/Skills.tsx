import { skillGroups } from "@/lib/data";
import { SectionHeader } from "./ui";
import Spotlight from "./Spotlight";

export default function Skills() {
  return (
    <section
      id="yetenekler"
      className="relative mx-auto max-w-[1200px] px-8 py-[120px]"
    >
      <SectionHeader
        eyebrow="YETENEKLER"
        title="Teknoloji yığınım"
        className="mb-14"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Spotlight
            key={group.label}
            dataReveal
            className="flex flex-col gap-[18px] p-8"
            style={{ transitionDelay: `${(i % 2) * 90}ms` }}
          >
            <div className="gy-eyebrow-line font-mono text-[12px] tracking-[0.1em] text-accent">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) =>
                item.star ? (
                  <span
                    key={item.name}
                    className="rounded-[10px] border border-accent/40 bg-accent/[0.1] px-4 py-[9px] text-sm font-bold text-accent shadow-[0_0_24px_-8px_rgba(53,208,127,0.8)]"
                  >
                    {item.name}
                  </span>
                ) : (
                  <span
                    key={item.name}
                    className="rounded-[10px] border border-white/10 bg-white/[0.02] px-4 py-[9px] text-sm font-semibold text-chip transition-colors hover:border-white/25 hover:text-ink"
                  >
                    {item.name}
                  </span>
                ),
              )}
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
}
