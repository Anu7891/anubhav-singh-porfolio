import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section id="testimonials">
      <SectionHeader label="Kind words" title="What colleagues say." />
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 90} className="h-full">
                <figure className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-line bg-panel p-8">
                  <blockquote className="leading-relaxed text-ink">“{t.quote}”</blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-cyan text-xs font-bold text-white">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{t.name}</span>
                      <span className="block text-sm text-muted">{t.title}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
    </Section>
  );
}
