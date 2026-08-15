import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="About"
          title={`${about.headline[0]} ${about.headline[1]}`}
          subtitle={about.body}
        />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {about.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-indigo/40">
                <h3 className="text-base font-semibold text-ink">{card.title}</h3>
                <p className="mt-1 text-sm text-muted">{card.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
