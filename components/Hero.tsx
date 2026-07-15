import Link from "next/link";
import HeroFX from "./hero/HeroFX";
import Typewriter from "./hero/Typewriter";
import MagneticButton from "./hero/MagneticButton";

const stats = [
  { value: 14, label: "Yıl Deneyim" },
  { value: 14, label: "Yayında Proje" },
  { value: 30, label: "Teknoloji & Araç" },
];

const words: { text: string; accent?: boolean }[] = [
  { text: "E-ticarette" },
  { text: "büyümeyi" },
  { text: "kod", accent: true },
  { text: "kalitesiyle", accent: true },
  { text: "inşa" },
  { text: "ediyorum." },
];

const WORD_BASE = 0.35;
const WORD_STEP = 0.07;
const afterWords = WORD_BASE + words.length * WORD_STEP;

export default function Hero() {
  return (
    <header id="hero" className="relative overflow-clip">
      <HeroFX />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-8 pb-24 pt-[120px]">
        <div
          className="gy-rise inline-flex items-center gap-2.5 rounded-full border border-accent/35 bg-accent/[0.07] px-[18px] py-2 font-mono text-[12.5px] tracking-[0.04em] text-accent"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
          <Typewriter text="SHOPIFY PARTNER · İSTANBUL" />
        </div>

        <h1 className="m-0 max-w-[15ch] font-sora text-[clamp(44px,6.4vw,84px)] font-bold leading-[1.04] tracking-[-0.035em] text-balance">
          {words.map((w, i) => (
            <span key={i}>
              <span
                className="gy-word"
                style={{ animationDelay: `${WORD_BASE + i * WORD_STEP}s` }}
              >
                {w.accent ? (
                  <span className="bg-[linear-gradient(100deg,var(--color-accent),var(--color-accent-soft))] bg-clip-text text-transparent">
                    {w.text}
                  </span>
                ) : (
                  w.text
                )}
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <p
          className="gy-rise m-0 max-w-[56ch] text-[19px] leading-[1.65] text-muted text-pretty"
          style={{ animationDelay: `${afterWords + 0.05}s` }}
        >
          14 yılı aşkın süredir markaların dijital vitrinlerini tasarlıyor ve
          geliştiriyorum. Shopify mağazaları, React uygulamaları ve
          ölçeklenebilir e-ticaret altyapıları — hepsi tek elden, el
          işçiliğiyle.
        </p>

        <div
          className="gy-rise flex flex-wrap items-center gap-4"
          style={{ animationDelay: `${afterWords + 0.18}s` }}
        >
          <MagneticButton
            href="https://wa.me/905375102084"
            external
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-[30px] py-4 text-[15.5px] font-extrabold text-whatsapp-ink shadow-[0_8px_30px_rgba(53,208,127,0.25)] hover:shadow-[0_14px_40px_rgba(53,208,127,0.45)]"
          >
            WhatsApp&apos;tan Yazın <span className="text-lg">→</span>
          </MagneticButton>
          <MagneticButton
            href="#projeler"
            strength={0.25}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.14] px-[30px] py-4 text-[15.5px] font-semibold text-ink hover:border-accent/50 hover:bg-white/[0.04]"
          >
            Projeleri İncele
          </MagneticButton>
        </div>

        <div
          className="gy-rise mt-8 flex w-full flex-wrap gap-x-14 gap-y-8 border-t border-white/[0.07] pt-9"
          style={{ animationDelay: `${afterWords + 0.32}s` }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <div className="font-sora text-[40px] font-bold tracking-[-0.02em]">
                <span data-counter={s.value}>0</span>+
              </div>
              <div className="text-[13.5px] font-semibold tracking-[0.02em] text-faint">
                {s.label}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-1.5">
            <div className="font-sora text-[40px] font-bold tracking-[-0.02em] text-accent">
              2011
            </div>
            <div className="text-[13.5px] font-semibold tracking-[0.02em] text-faint">
              &apos;den Beri Sektörde
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
