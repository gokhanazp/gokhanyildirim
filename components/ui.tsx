import type { ReactNode } from "react";

/** Bölüm üstü eyebrow etiketi (mono, accent, önünde aksan çizgisi). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="gy-eyebrow-line font-mono text-[12.5px] tracking-[0.12em] text-accent">
      {children}
    </div>
  );
}

/**
 * Dekoratif bölüm başlığı: eyebrow + H2 + altında aksan çizgisi.
 * center=true ortalar. ghost verilirse başlığın arkasında dev soluk bir etiket gösterir.
 */
export function SectionHeader({
  eyebrow,
  title,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={`flex flex-col gap-4 ${center ? "items-center text-center" : ""} ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="m-0 font-sora text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em] text-balance">
        {title}
      </h2>
      <span className={`gy-underline ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

/** Standart bölüm başlığı (H2) — geriye dönük uyumluluk. */
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="m-0 font-sora text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em] text-balance">
      {children}
    </h2>
  );
}

export const container = "mx-auto max-w-[1200px] px-8";
