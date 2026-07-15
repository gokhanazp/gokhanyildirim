"use client";

import Image from "next/image";
import { useState } from "react";
import {
  projects,
  projectFilters,
  filterProjects,
  projectCover,
  logoCoverDark,
} from "@/lib/data";
import { SectionHeader } from "./ui";
import Spotlight from "./Spotlight";

export default function Projects() {
  const [filter, setFilter] = useState<string>("Tümü");
  const visible = filterProjects(projects, filter);

  return (
    <section
      id="projeler"
      className="relative mx-auto max-w-[1200px] px-8 py-[120px]"
    >
      <SectionHeader
        eyebrow="SEÇİLİ PROJELER"
        title="Yayında olan işler"
        className="mb-8"
      />

      <div className="mb-10 flex flex-wrap items-center gap-2.5">
        {projectFilters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={
                active
                  ? "cursor-pointer rounded-full border border-accent bg-accent/10 px-5 py-2.5 text-[13.5px] font-bold text-accent shadow-[0_0_24px_-10px_rgba(53,208,127,0.9)]"
                  : "cursor-pointer rounded-full border border-white/[0.12] bg-white/[0.02] px-5 py-2.5 text-[13.5px] font-semibold text-muted transition-colors hover:border-white/30 hover:text-ink"
              }
            >
              {f}
            </button>
          );
        })}
        <span className="ml-auto font-mono text-[12px] text-faint">
          {visible.length} proje
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {visible.map((p) => (
          <Spotlight
            key={p.name}
            href={p.url ?? "#projeler"}
            external={Boolean(p.url)}
            className="group flex flex-col overflow-hidden"
          >
            <div
              className="gy-shine-host relative flex h-[170px] items-center justify-center overflow-hidden"
              style={{
                background:
                  p.logo && p.logoTheme === "light"
                    ? "linear-gradient(140deg,#f3f5f7,#e4e8ed)"
                    : p.logo
                      ? logoCoverDark(p.hue)
                      : projectCover(p.hue),
              }}
            >
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={240}
                  height={100}
                  unoptimized
                  className="relative h-auto max-h-[86px] w-auto max-w-[74%] object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(120% 100% at 50% 0%, transparent, rgba(0,0,0,0.35))",
                    }}
                  />
                  <div className="relative px-6 text-center font-sora text-[26px] font-bold tracking-[-0.02em] text-white/[0.94] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                    {p.name}
                  </div>
                </>
              )}
              <div
                className={`absolute bottom-3.5 left-4 rounded-md px-2 py-1 font-mono text-[10.5px] tracking-[0.08em] backdrop-blur-sm ${
                  p.logo && p.logoTheme === "light"
                    ? "bg-black/55 text-white/90"
                    : "bg-black/25 text-white/75"
                }`}
              >
                {p.kind}
              </div>
              <span className="gy-shine" aria-hidden />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="font-sora text-[17.5px] font-semibold tracking-[-0.01em]">
                  {p.name}
                </div>
                <span className="text-[15px] text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                  ↗
                </span>
              </div>
              <p className="m-0 text-sm leading-[1.6] text-muted">{p.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                <span className="rounded-md border border-accent/20 bg-accent/[0.08] px-2.5 py-1 font-mono text-[11.5px] text-accent">
                  {p.tech}
                </span>
              </div>
            </div>
          </Spotlight>
        ))}
      </div>
    </section>
  );
}
