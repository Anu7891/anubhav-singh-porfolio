import type { CSSProperties, ReactNode } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { coreSkills, skillHighlights, skillCategories } from "@/lib/data";

const icons: Record<string, ReactNode> = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" strokeLinecap="round" />
    </svg>
  ),
  paint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <circle cx="8" cy="8" r="1.4" /><circle cx="15.5" cy="7" r="1.4" /><circle cx="17" cy="12.5" r="1.4" />
      <path d="M12 2a10 10 0 100 20 3 3 0 003-3v-1a2 2 0 012-2h1a3 3 0 003-3 10 10 0 00-9-11z" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinejoin="round" /><path d="M3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <path d="M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8 16a5 5 0 018 0" strokeLinecap="round" /><circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0018 0V5M3 12a9 3 0 0018 0" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <path d="M20 7 12 3 4 7v10l8 4 8-4z" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} aria-hidden="true">
      <path d="M12 2a7 7 0 00-7 7c0 3 2 5 2 7h10c0-2 2-4 2-7a7 7 0 00-7-7z" /><path d="M9 22h6" strokeLinecap="round" /><circle cx="12" cy="9" r="1.6" />
    </svg>
  ),
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Skills"
          title="The full stack I build with."
          subtitle="Every tool below is drawn from real production work across four e-commerce platforms — not a wishlist."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-panel p-6 md:p-7">
              <p className="mb-5 font-mono text-xs tracking-[0.08em] text-muted">CORE PROFICIENCY</p>
              {coreSkills.map((s) => (
                <div key={s.name} className="mb-4 last:mb-0">
                  <div className="mb-2 flex items-center justify-between text-sm text-ink">
                    <span>{s.name}</span>
                    <span className="font-mono text-xs text-muted">{s.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div className="bar-fill h-full rounded-full" style={{ "--bar-w": `${s.level}%` } as CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-center gap-4 rounded-3xl border border-line bg-panel p-6 md:p-7">
              <p className="font-mono text-xs tracking-[0.08em] text-muted">HIGHLIGHTS</p>
              <p className="leading-relaxed text-muted">{skillHighlights.body}</p>
              <ul className="flex flex-wrap gap-2">
                {skillHighlights.pills.map((p) => (
                  <li key={p} className="rounded-lg border border-line bg-panel-strong px-3 py-1.5 text-sm text-ink">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {skillCategories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 80}>
              <div className="h-full rounded-3xl border border-line bg-panel p-6 transition-colors hover:border-indigo/30">
                <h3 className="mb-4 flex items-center gap-2.5 text-[15px] font-semibold text-ink">
                  <span className="grid size-8 place-items-center rounded-lg border border-line bg-panel-strong text-cyan">
                    {icons[c.icon]}
                  </span>
                  {c.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {c.pills.map((p) => (
                    <li key={p} className="rounded-lg border border-line bg-panel-strong px-3 py-1.5 text-[13px] text-muted">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
