"use client";

import { useId, useState } from "react";
import { faqData } from "@/lib/data";
import { Eyebrow } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState(-1);
  const baseId = useId();

  return (
    <section id="sss" className="mx-auto max-w-[860px] px-8 py-[120px]">
      <div
        data-reveal
        className="mb-12 flex flex-col items-center gap-4 text-center"
      >
        <Eyebrow>SSS</Eyebrow>
        <h2 className="m-0 font-sora text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em]">
          Merak edilenler
        </h2>
        <span className="gy-underline" />
      </div>

      <div className="flex flex-col gap-3">
        {faqData.map((f, i) => {
          const isOpen = open === i;
          const panelId = `${baseId}-panel-${i}`;
          return (
            <div
              key={f.q}
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                isOpen
                  ? "border-accent/35 bg-[linear-gradient(180deg,rgba(53,208,127,0.06),rgba(255,255,255,0.015))]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-7 py-[22px] text-left font-sora text-[16.5px] font-semibold text-ink"
              >
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-[18px] text-accent transition-transform duration-[250ms]"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  ＋
                </span>
              </button>
              {isOpen && (
                <p
                  id={panelId}
                  className="m-0 px-7 pb-6 text-[15px] leading-[1.7] text-muted text-pretty"
                >
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
