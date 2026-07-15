import { career } from "@/lib/data";
import { SectionHeader } from "./ui";

export default function Career() {
  return (
    <section id="kariyer" className="mx-auto max-w-[1200px] px-8 pb-[120px]">
      <SectionHeader
        eyebrow="KARİYER"
        title="14 yıllık yolculuk"
        className="mb-14"
      />

      <div className="flex flex-col">
        {career.map((item, i) => {
          const last = i === career.length - 1;
          return (
            <div
              key={item.company}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`group grid grid-cols-[80px_24px_1fr] gap-6 py-7 sm:grid-cols-[180px_24px_1fr] ${
                last ? "" : "border-b border-white/[0.06]"
              }`}
            >
              <div
                className={`pt-1 font-mono text-[13.5px] ${
                  item.active ? "text-accent" : "text-faint"
                }`}
              >
                {item.period}
              </div>
              <div className="flex flex-col items-center">
                {item.active ? (
                  <div className="gy-node mt-1.5 h-[11px] w-[11px] rounded-full bg-accent" />
                ) : (
                  <div className="mt-1.5 box-border h-[11px] w-[11px] rounded-full border-2 border-white/20 transition-colors duration-300 group-hover:border-accent/70" />
                )}
                {!last && (
                  <div className="mt-2 w-px flex-1 bg-[linear-gradient(180deg,rgba(53,208,127,0.35),rgba(255,255,255,0.06))]" />
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="font-sora text-[21px] font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent">
                  {item.company}
                  {item.active && (
                    <span className="ml-3 rounded-full border border-accent/30 bg-accent/[0.1] px-2.5 py-0.5 align-middle font-mono text-[10.5px] tracking-[0.08em] text-accent">
                      AKTİF
                    </span>
                  )}
                </div>
                <div className="text-[14.5px] font-semibold text-muted">
                  {item.title}
                </div>
                <p className="m-0 mt-1.5 max-w-[60ch] text-[14.5px] leading-[1.65] text-faint">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
