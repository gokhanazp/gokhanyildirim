import Image from "next/image";
import {
  type Project,
  projectGroups,
  projectsInGroup,
  projectCover,
  logoCoverDark,
} from "@/lib/data";
import { SectionHeader } from "./ui";
import Spotlight from "./Spotlight";

function ProjectCard({ p, wide = false }: { p: Project; wide?: boolean }) {
  const isMobile = p.tech.includes("React Native");
  return (
    <Spotlight
      href={p.url ?? "#projeler"}
      external={Boolean(p.url)}
      className={`group flex flex-col overflow-hidden ${wide ? "md:col-span-2" : ""}`}
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
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <span className="rounded-md border border-accent/20 bg-accent/[0.08] px-2.5 py-1 font-mono text-[11.5px] text-accent">
            {p.tech}
          </span>
          {isMobile && (
            <span className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11.5px] text-chip">
              App Store · Google Play
            </span>
          )}
        </div>
      </div>
    </Spotlight>
  );
}

export default function Projects() {
  return (
    <section
      id="projeler"
      className="relative mx-auto max-w-[1200px] px-8 py-[120px]"
    >
      <SectionHeader
        eyebrow="SEÇİLİ PROJELER"
        title="Yeteneğe göre işlerim"
        className="mb-14"
      />

      <div className="flex flex-col gap-16">
        {projectGroups.map((g) => {
          const items = projectsInGroup(g);
          if (!items.length) return null;
          return (
            <div key={g.id} data-reveal>
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="font-sora text-[22px] font-semibold tracking-[-0.01em]">
                  <span className="text-accent">/</span> {g.label}
                  <span className="ml-3 align-middle font-mono text-[12px] font-normal text-faint">
                    {items.length} proje
                  </span>
                </h3>
                <p className="m-0 max-w-[70ch] text-[14.5px] leading-[1.6] text-muted">
                  {g.intro}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {items.map((p) => (
                  <ProjectCard
                    key={p.name}
                    p={p}
                    wide={g.id === "mobile" && items.length === 1}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
