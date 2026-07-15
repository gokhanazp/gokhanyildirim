import { techMarquee } from "@/lib/data";

function Row() {
  return (
    <div className="flex gap-12 whitespace-nowrap pr-12 font-mono text-[13px] tracking-[0.06em] text-faint">
      {techMarquee.map((t, i) => (
        <span key={`${t}-${i}`} className="contents">
          <span className="transition-colors hover:text-accent">{t}</span>
          <span className="text-accent/40" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-white/[0.06] bg-bg-alt py-[18px]"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="gy-motion flex w-max animate-[gy-marquee_38s_linear_infinite]">
        <Row />
        <Row />
      </div>
    </div>
  );
}
