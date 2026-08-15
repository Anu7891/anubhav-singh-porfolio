import type { ReactNode } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { about } from "@/lib/data";

const icons: Record<string, ReactNode> = {
  gauge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18} aria-hidden="true">
      <path d="M4 15a8 8 0 1 1 16 0" strokeLinecap="round" />
      <path d="M12 15l3.5-3.5" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18} aria-hidden="true">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" strokeLinecap="round" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18} aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" /><path d="m3 13 9 5 9-5" strokeLinejoin="round" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={18} height={18} aria-hidden="true">
      <circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.4 12.2a1.6 1.6 0 0 0 1.6 1.3h8.2a1.6 1.6 0 0 0 1.6-1.3L22 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="About"
          title={`${about.headline[0]} ${about.headline[1]}`}
          subtitle={about.body}
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-indigo/40">
                <span className="grid size-10 place-items-center rounded-xl border border-line bg-panel-strong text-cyan">
                  {icons[card.icon]}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{card.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
