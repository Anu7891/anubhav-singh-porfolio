import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { articles } from "@/lib/data";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Writing"
          title="Recent articles."
          subtitle="Notes from the workbench — patterns, design, and engineering rituals."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((post, i) => (
            <li key={post.title}>
              <Reveal delay={i * 90} className="h-full">
                <a
                  href={post.url}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-panel p-8 transition-colors hover:border-indigo/40"
                >
                  <p className="flex items-center gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M2 6.5h12M5.5 1.5v3m5-3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="m2 8 6-6h6v6l-6 6-6-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <circle cx="11" cy="5" r="1" fill="currentColor" />
                      </svg>
                      {post.tag}
                    </span>
                  </p>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-ink">{post.title}</h3>
                  <p className="mt-3 grow leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-transform group-hover:translate-x-1">
                    Read post
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
