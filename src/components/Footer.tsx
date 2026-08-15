import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-6 md:flex-row md:items-center">
        <p className="flex items-center gap-3 text-sm text-muted">
          <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-cyan text-[10px] font-bold text-white">
            {site.initials}
          </span>
          © {new Date().getFullYear()} {site.name}. Crafted with care in {site.location}.
        </p>
        <ul className="flex items-center gap-3">
          {[
            { href: site.github, label: "GitHub" },
            { href: site.linkedin, label: "LinkedIn" },
          ].map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 items-center rounded-full border border-line bg-panel px-4 text-sm text-muted transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
