"use client";

import { type FormEvent, useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { IconBadge } from "../ui/IconBadge";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/BrandIcons";
import { site } from "@/lib/data";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "mail" },
  { label: "Location", value: site.location, href: undefined, icon: "pin" },
  { label: "GitHub", value: site.githubHandle, href: site.github, icon: "github" },
  { label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin, icon: "linkedin" },
];

const icons: Record<string, React.ReactNode> = {
  mail: <MailIcon size={17} />,
  pin: (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 14s5-4.1 5-7.5A5 5 0 0 0 3 6.5C3 9.9 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  github: <GitHubIcon size={17} />,
  linkedin: <LinkedInIcon size={17} />,
};

// Free form-to-email via Web3Forms (https://web3forms.com). The access key is
// public-safe by design (it only routes to the owner's email). Add it as
// NEXT_PUBLIC_WEB3FORMS_KEY; without it, the form falls back to the visitor's
// mail client so it never breaks.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
      location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${data.get("name")}`,
          from_name: "Portfolio contact form",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const json = await res.json();
      if (json?.success) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
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
                  <IconBadge className="size-12 rounded-2xl shadow-sm">
                    {icons[c.icon]}
                  </IconBadge>
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
              {/* Honeypot — hidden from humans, catches bots. */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-8 flex h-13 w-full items-center justify-center gap-2.5 rounded-full text-[15px] font-semibold hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M14.5 1.5 7 9m7.5-7.5L9.8 14.3a.4.4 0 0 1-.74.03L7 9m7.5-7.5L1.7 6.2a.4.4 0 0 0 .03.74L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </button>
              <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm">
                {status === "sent" ? (
                  <span className="text-emerald-500">Thanks! Your message was sent — I&apos;ll reply within a day. ✅</span>
                ) : status === "error" ? (
                  <span className="text-rose-500">
                    Couldn&apos;t send. Please email me directly at {site.email}.
                  </span>
                ) : null}
              </p>
            </form>
          </Reveal>
        </div>
    </Section>
  );
}
