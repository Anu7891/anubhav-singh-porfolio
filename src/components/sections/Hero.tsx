import { site } from "@/lib/data";
import { Typewriter } from "../ui/Typewriter";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/BrandIcons";

const socials = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-36 md:pt-44" aria-label="Introduction">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <p className="animate-rise mx-auto inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-5 py-2 text-sm text-muted">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>
          {site.availability}
        </p>

        <h1 className="animate-rise mt-8 text-6xl font-bold leading-[1.02] tracking-tight text-title md:whitespace-nowrap md:text-8xl [--rise-delay:100ms]">
          {site.firstName} <span className="gradient-text">{site.lastName}</span>
        </h1>

        <p className="animate-rise mt-7 flex items-center justify-center gap-2 text-xl font-semibold text-ink md:text-3xl [--rise-delay:180ms]">
          <span className="text-indigo" aria-hidden="true">✦</span>
          <span className="sr-only">Frontend Developer — React &amp; Next.js</span>
          <Typewriter phrases={["Frontend Developer", "React & Next.js Developer", "E-commerce frontend"]} />
        </p>

        <p className="animate-rise mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-xl md:leading-relaxed [--rise-delay:240ms]">
          {site.tagline}
        </p>

        <div className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4 [--rise-delay:300ms]">
          <a
            href="#contact"
            className="btn-primary flex h-13 items-center gap-2 rounded-full px-7 text-[15px] font-semibold hover:scale-[1.03]"
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
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-13 items-center justify-center rounded-full border border-line bg-panel text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo/50 hover:bg-indigo/10 hover:text-indigo hover:shadow-md"
              >
                <Icon />
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex size-13 items-center justify-center rounded-full border border-line bg-panel text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo/50 hover:bg-indigo/10 hover:text-indigo hover:shadow-md"
            >
              <MailIcon />
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
