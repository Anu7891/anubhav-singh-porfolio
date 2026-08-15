import type { ReactNode } from "react";

type Tech = { name: string; svg: ReactNode };

const techs: Tech[] = [
  {
    name: "React",
    svg: (
      <svg viewBox="-11.5 -10.23 23 20.46" aria-hidden="true">
        <circle r="2.05" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11.5" fill="#000" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <text x="12" y="16.8" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff" fontFamily="sans-serif">TS</text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <text x="12" y="17" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#111" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "Redux",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#764ABC" strokeWidth="1.8" aria-hidden="true">
        <path d="M8.5 9.5C5.5 10.5 4 13 5.5 15.6 7 18.2 11 18.6 14 17" strokeLinecap="round" />
        <path d="M14.5 7c3 .4 5 2.8 4.2 5.8" strokeLinecap="round" />
        <path d="M6 13.5C4.8 16 6 18.5 9 19.2c2.5.6 5-.4 6.5-2.5" strokeLinecap="round" />
        <circle cx="16" cy="8.5" r="1.9" fill="#764ABC" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true">
        <path d="M12 6c-2.7 0-4.3 1.35-5 4 1-1.35 2.2-1.85 3.5-1.5.75.2 1.28.73 1.87 1.33C13.3 10.8 14.4 12 17 12c2.7 0 4.3-1.35 5-4-1 1.35-2.2 1.85-3.5 1.5-.75-.2-1.28-.73-1.87-1.33C15.7 7.2 14.6 6 12 6zM7 12c-2.7 0-4.3 1.35-5 4 1-1.35 2.2-1.85 3.5-1.5.75.2 1.28.73 1.87 1.33C8.3 16.8 9.4 18 12 18c2.7 0 4.3-1.35 5-4-1 1.35-2.2 1.85-3.5 1.5-.75-.2-1.28-.73-1.87-1.33C10.7 13.2 9.6 12 7 12z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1.5 21 6.75v10.5L12 22.5 3 17.25V6.75z" fill="#539E43" />
        <text x="12" y="14.5" textAnchor="middle" fontSize="5.4" fontWeight="700" fill="#fff" fontFamily="sans-serif">node</text>
      </svg>
    ),
  },
  {
    name: "GraphQL",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E10098" strokeWidth="1" aria-hidden="true">
        <path d="M12 3 20 17.5H4L12 3z" />
        <path d="M12 3 4 17.5M12 3l8 14.5M4 17.5h16" />
        <circle cx="12" cy="3" r="1.7" fill="#E10098" stroke="none" />
        <circle cx="4" cy="17.5" r="1.7" fill="#E10098" stroke="none" />
        <circle cx="20" cy="17.5" r="1.7" fill="#E10098" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F05133" strokeWidth="2" aria-hidden="true">
        <circle cx="7" cy="6" r="2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="10" r="2" />
        <path d="M7 8v8M7 8.5c.2 3.5 3 3.7 8 1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26" />
        <path d="M12 5v15l5-1.5L18.3 5H12z" fill="#EF652A" />
        <path d="M8 8h8l-.25 2H8.2L8 8zm.45 3h7.1l-.5 5.6L12 17.6l-3.05-1 -.2-2.3h1.8l.1 1.15 1.35.36 1.35-.36.16-1.7H8.6L8.45 11z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6" />
        <path d="M12 5v15l5-1.5L18.3 5H12z" fill="#33A9DC" />
        <path d="M12 8h4.6l-.15 1.9H12V8zm0 3.6h4.3l-.5 5.5L12 18.2v-2l2-.55.15-1.5H12v-1.55z" fill="#fff" />
        <path d="M12 8v1.9H7.6L7.45 8H12zm0 3.6v1.55H9.7l.15 1.5 2.15.6v2l-3.9-1.05-.35-4.6H12z" fill="#EBEBEB" />
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 2H12v6H8.5a3 3 0 1 1 0-6z" fill="#F24E1E" />
        <path d="M12 2h3.5a3 3 0 1 1 0 6H12V2z" fill="#FF7262" />
        <path d="M8.5 8H12v6H8.5a3 3 0 1 1 0-6z" fill="#A259FF" />
        <path d="M8.5 14H12v2a3 3 0 1 1-3.5-2z" fill="#0ACF83" />
        <circle cx="15.5" cy="11" r="3" fill="#1ABCFE" />
      </svg>
    ),
  },
];

export function TechMarquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const row = [...techs, ...techs];
  return (
    <div className="tech-marquee" role="list" aria-label="Tech stack">
      <div className="tech-track">
        {row.map((t, i) => (
          <div key={`${t.name}-${i}`} className="tech-tile" role="listitem" title={t.name} aria-hidden={i >= techs.length}>
            {t.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
