"use client";

import { type FormEvent } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { site } from "@/lib/data";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "mail" },
  { label: "Location", value: site.location, href: undefined, icon: "pin" },
  { label: "GitHub", value: site.githubHandle, href: site.github, icon: "github" },
  { label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin, icon: "linkedin" },
];

const icons: Record<string, React.ReactNode> = {
  mail: (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m2 4 6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pin: (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 14s5-4.1 5-7.5A5 5 0 0 0 3 6.5C3 9.9 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  github: (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 .8a7.2 7.2 0 0 0-2.28 14.03c.36.07.5-.15.5-.34v-1.2c-2 .43-2.43-.97-2.43-.97-.33-.83-.8-1.05-.8-1.05-.66-.45.05-.44.05-.44.72.05 1.1.75 1.1.75.65 1.1 1.7.8 2.1.6.07-.46.26-.79.46-.97-1.6-.18-3.28-.8-3.28-3.56 0-.79.28-1.43.74-1.94-.07-.18-.32-.91.07-1.9 0 0 .6-.2 1.98.74a6.9 6.9 0 0 1 3.6 0c1.38-.94 1.98-.74 1.98-.74.4.99.15 1.72.07 1.9.46.5.74 1.15.74 1.94 0 2.77-1.69 3.38-3.3 3.56.26.22.5.66.5 1.33v1.97c0 .19.13.42.5.34A7.2 7.2 0 0 0 8 .8Z" />
    </svg>
  ),
  linkedin: (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM2.6 6h2v7.6h-2V6Zm3.6 0h1.9v1c.3-.5 1-1.2 2.2-1.2 2.1 0 2.9 1.3 2.9 3.3v4.5h-2V9.6c0-1-.3-1.8-1.3-1.8-1 0-1.5.7-1.7 1.4v4.4h-2V6Z" />
    </svg>
  ),
};

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Contact"
          title="Let's work together."
          subtitle="I'm open to frontend roles and freelance work. I usually reply within a day."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <ul className="space-y-4">
            {channels.map((c, i) => {
              const inner = (
                <span className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-indigo/15 text-indigo">
                    {icons[c.icon]}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block font-semibold text-ink">{c.value}</span>
                  </span>
                </span>
              );
              return (
                <li key={c.label}>
                  <Reveal delay={i * 70}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="block rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-indigo/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-line bg-panel p-5">{inner}</div>
                    )}
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-line bg-panel p-8 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Your name
                  </span>
                  <input
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="mt-2.5 w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-indigo/60"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Your email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="mt-2.5 w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-indigo/60"
                  />
                </label>
              </div>
              <label className="mt-6 block">
                <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or idea..."
                  className="mt-2.5 w-full resize-none rounded-xl border border-line bg-bg/60 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-indigo/60"
                />
              </label>
              <button
                type="submit"
                className="btn-primary mt-8 flex h-13 w-full items-center justify-center gap-2.5 rounded-full text-[15px] font-semibold hover:scale-[1.01]"
              >
                Send message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M14.5 1.5 7 9m7.5-7.5L9.8 14.3a.4.4 0 0 1-.74.03L7 9m7.5-7.5L1.7 6.2a.4.4 0 0 0 .03.74L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
