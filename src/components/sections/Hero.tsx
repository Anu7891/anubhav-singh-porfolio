import { site } from "@/lib/data";
import { Typewriter } from "../ui/Typewriter";

const chipPositions = [
  "left-[6%] top-[18%]",
  "right-[10%] top-[22%]",
  "left-[12%] bottom-[24%]",
  "right-[6%] bottom-[30%]",
  "left-[48%] top-[8%]",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-36 md:pt-44" aria-label="Introduction">
      {/* floating tech chips */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {site.heroChips.map((chip, i) => (
          <span
            key={chip}
            className={`float-chip absolute rounded-full border border-line bg-panel px-4 py-2 text-sm text-muted/70 backdrop-blur-sm ${chipPositions[i]} [--float-delay:${i * 1.3}s]`}
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <p className="animate-rise mx-auto inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-5 py-2 text-sm text-muted">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>
          {site.availability}
        </p>

        <h1 className="animate-rise mt-8 text-6xl font-bold leading-[1.02] tracking-tight text-ink md:whitespace-nowrap md:text-8xl [--rise-delay:100ms]">
          {site.firstName} <span className="gradient-text">{site.lastName}</span>
        </h1>

        <p className="animate-rise mt-7 flex items-center justify-center gap-2 text-xl font-semibold text-ink md:text-3xl [--rise-delay:180ms]">
          <span className="text-indigo">✦</span>
          <Typewriter phrases={["Frontend Developer", "React & Next.js Developer", "E-commerce frontend"]} />
        </p>

        <p className="animate-rise mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-xl md:leading-relaxed [--rise-delay:240ms]">
          {site.tagline}
        </p>

        <div className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4 [--rise-delay:300ms]">
          <a
            href="#contact"
            className="flex h-13 items-center gap-2 rounded-full bg-ink px-7 text-[15px] font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            Get in touch
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={site.resumeUrl}
            className="flex h-13 items-center gap-2 rounded-full border border-line bg-panel px-7 text-[15px] font-medium text-ink transition-colors hover:border-indigo/50"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2v8m0 0 3.5-3.5M8 10 4.5 6.5M3 13h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Resume
          </a>
          <div className="flex items-center gap-2">
            {[
              { href: site.github, label: "GitHub", d: "M8 .8a7.2 7.2 0 0 0-2.28 14.03c.36.07.5-.15.5-.34v-1.2c-2 .43-2.43-.97-2.43-.97-.33-.83-.8-1.05-.8-1.05-.66-.45.05-.44.05-.44.72.05 1.1.75 1.1.75.65 1.1 1.7.8 2.1.6.07-.46.26-.79.46-.97-1.6-.18-3.28-.8-3.28-3.56 0-.79.28-1.43.74-1.94-.07-.18-.32-.91.07-1.9 0 0 .6-.2 1.98.74a6.9 6.9 0 0 1 3.6 0c1.38-.94 1.98-.74 1.98-.74.4.99.15 1.72.07 1.9.46.5.74 1.15.74 1.94 0 2.77-1.69 3.38-3.3 3.56.26.22.5.66.5 1.33v1.97c0 .19.13.42.5.34A7.2 7.2 0 0 0 8 .8Z" },
              { href: site.linkedin, label: "LinkedIn", d: "M3.6 2.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM2.6 6h2v7.6h-2V6Zm3.6 0h1.9v1c.3-.5 1-1.2 2.2-1.2 2.1 0 2.9 1.3 2.9 3.3v4.5h-2V9.6c0-1-.3-1.8-1.3-1.8-1 0-1.5.7-1.7 1.4v4.4h-2V6Z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex size-13 items-center justify-center rounded-full border border-line bg-panel text-muted transition-colors hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex size-13 items-center justify-center rounded-full border border-line bg-panel text-muted transition-colors hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="m2 4 6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* whoami sphere — spinning conic glow, glass core, orbiting dots */}
        <div className="animate-rise relative mx-auto mt-20 flex max-w-3xl items-center justify-center pb-24 [--rise-delay:450ms]" aria-hidden="true">
          <div className="relative size-56 sm:size-64">
            <div
              className="animate-spin-slow absolute inset-0 rounded-full opacity-55 blur-[28px]"
              style={{ background: "conic-gradient(from 0deg, #6366f1, #22d3ee, #6366f1)" }}
            />
            <div className="glass absolute inset-2 flex items-center justify-center rounded-full shadow-2xl">
              <div className="text-center">
                <p className="font-mono text-xs text-muted">$ whoami</p>
                <p className="gradient-text mt-2 text-3xl font-bold tracking-tight">AS</p>
                <p className="mt-1 text-[11px] text-muted">Surat, India</p>
              </div>
            </div>
            <div className="ring-orbit size-[280px]">
              <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-indigo-400 shadow-[0_0_12px_currentColor]" />
            </div>
            <div className="ring-orbit slow size-[340px]">
              <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_currentColor]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
