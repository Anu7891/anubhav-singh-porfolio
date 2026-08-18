import { Reveal } from "./Reveal";

type SectionHeaderProps = { label: string; title: string; subtitle?: string };

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <Reveal className="text-center">
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-muted uppercase">
        <span className="size-1.5 rounded-full bg-indigo" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-title md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-4xl text-lg leading-relaxed text-muted md:text-xl">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
