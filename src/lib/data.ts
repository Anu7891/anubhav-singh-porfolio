export const site = {
  name: "Anubhav Singh",
  firstName: "Anubhav",
  lastName: "Singh",
  initials: "AS",
  role: "Frontend Developer",
  tagline:
    "I build fast, SEO-first e-commerce storefronts with React and Next.js — production platforms that stay quick at scale and feel handcrafted in the details.",
  availability: "Open to work — On-site · Hybrid · Remote",
  email: "singhanubhav8783@gmail.com",
  location: "Surat, Gujarat, India",
  shortLocation: "Surat, India",
  github: "https://github.com/anubhav-singh",
  githubHandle: "@anubhav-singh",
  linkedin: "https://www.linkedin.com/in/anubhav-singh-50a197191",
  linkedinHandle: "/in/anubhav-singh-50a197191",
  resumeUrl: "/resume.pdf",
  heroChips: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind"],
};

export const about = {
  headline: ["A developer who", "cares about craft."],
  body: "Frontend developer at 3Embed Software Technologies with 3+ years shipping production e-commerce platforms — React, Next.js, TypeScript and Redux Toolkit, with a strong focus on performance, SEO and scalable component systems. I treat the codebase like a product.",
  cards: [
    { title: "Performance first", sub: "Core Web Vitals obsessive" },
    { title: "SEO optimization", sub: "Schema, sitemaps, static gen" },
    { title: "Scale-ready", sub: "Multi-tenant, reusable systems" },
    { title: "Commerce & real-time", sub: "Payments, search, live shopping" },
  ],
};

export const experience = [
  {
    company: "3Embed Software Technologies",
    role: "Frontend Web Developer",
    period: "Oct 2022 — Present",
    location: "Surat · On-site",
    points: [
      "Build and maintain production e-commerce storefronts for global clients with Next.js, React and TypeScript.",
      "Own performance and SEO — Core Web Vitals, static generation, structured data and dynamic sitemaps.",
      "Architect Redux state, type-safe forms and reusable component systems shared across projects.",
      "Integrate payments, Typesense/Algolia search, MQTT real-time updates, live shopping and Puck-based CMS builders.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Stripe", "Typesense"],
  },
  {
    company: "MGITER, Navsari",
    role: "B.E. — Engineering",
    period: "Graduated 2022",
    location: "Navsari, Gujarat",
    points: [
      "Mahatma Gandhi Institute of Technical Education and Research Center.",
      "Wrote my first production code here — and never stopped.",
    ],
    tech: ["Fundamentals", "JavaScript", "Problem solving"],
  },
];

/* ---- Skills (comprehensive) ---- */
export const coreSkills = [
  { name: "React.js", level: 95 },
  { name: "Next.js (App + Pages Router)", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Redux Toolkit / Saga", level: 86 },
  { name: "Performance / SEO", level: 90 },
];

export const skillHighlights = {
  body: "Shipped multi-gateway checkout (Stripe · Google Pay · Apple Pay), instant search with Typesense & Algolia, real-time order updates over MQTT, LiveKit live-shopping and Puck-powered CMS pages.",
  pills: ["Multi-tenant SaaS", "i18n / localization", "Static generation", "Design systems", "Core Web Vitals"],
};

export const skillCategories = [
  { title: "Frontend & frameworks", icon: "code", pills: ["React 19", "Next.js", "App Router", "Server Components", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"] },
  { title: "State & data", icon: "data", pills: ["Redux Toolkit", "Redux-Saga", "TanStack Query", "Context API", "RxJS", "React Hook Form", "Zod"] },
  { title: "Styling & UI", icon: "paint", pills: ["Tailwind CSS", "Material-UI", "Emotion", "styled-components", "Radix UI", "Framer Motion", "Swiper", "SCSS/Sass"] },
  { title: "Commerce & search", icon: "cart", pills: ["Stripe", "Google Pay", "Apple Pay", "Algolia", "Typesense", "Puck CMS", "i18next"] },
  { title: "Real-time & media", icon: "wifi", pills: ["MQTT", "WebSockets", "LiveKit", "Isometrik Chat", "Leaflet Maps"] },
  { title: "Backend & auth", icon: "server", pills: ["Node.js", "REST APIs", "GraphQL", "NextAuth", "Firebase"] },
  { title: "Testing & tooling", icon: "shield", pills: ["Jest", "Playwright", "Vitest", "Storybook", "ESLint", "Prettier", "Husky", "Git"] },
  { title: "DevOps & AI-assisted", icon: "rocket", pills: ["Docker", "Vercel", "GitHub Actions", "Sentry", "GrowthBook", "Cursor", "Claude", "Copilot"] },
];

export type ProjectShot = { label: string; src?: string };

export type Project = {
  name: string;
  url: string;
  category: string;
  kind: string;
  description: string;
  tech: string[];
  image?: string;
  shots: ProjectShot[];
  tint: "indigo" | "cyan" | "violet";
};

export const projects: Project[] = [
  {
    name: "Paris Panini",
    url: "https://parispanniblr.newkommerce.com/",
    category: "Food commerce",
    kind: "NewKommerce",
    description:
      "A French-inspired food-ordering storefront (Bengaluru) built on the NewKommerce platform — menu browsing, product pages, online ordering and events, wrapped in a warm, on-brand storefront with a fast, SEO-friendly front end.",
    tech: ["Next.js", "TypeScript", "Redux", "Tailwind", "Stripe", "Typesense"],
    image: "/projects/parispanni.jpg",
    shots: [{ label: "menu" }, { label: "product" }, { label: "cart" }, { label: "checkout" }],
    tint: "indigo",
  },
  {
    name: "Qykly",
    url: "https://staging.qykly.com/en",
    category: "E-commerce",
    kind: "multi-tenant SaaS",
    description:
      "Multi-tenant commerce storefront where every tenant gets a themeable, localized store. Next.js App Router with Redux Toolkit, a Storybook-driven Puck page builder, Typesense instant search, i18next localization, dark mode and a custom type-safe form system — no form library. Dockerized for deployment.",
    tech: ["Next.js 14", "TypeScript", "Redux Toolkit", "Radix UI", "Framer Motion", "Zod", "i18next", "Docker"],
    shots: [{ label: "listing" }, { label: "product" }, { label: "builder" }, { label: "checkout" }],
    tint: "cyan",
  },
  {
    name: "TrulyFree",
    url: "https://trulyfree.com/",
    category: "E-commerce",
    kind: "live shopping",
    description:
      "Feature-rich commerce storefront with multi-gateway checkout (Stripe, Google Pay, Apple Pay), Algolia search, LiveKit live-shopping streams, in-app chat, Gemini-powered assistance and GrowthBook feature flags. Redux-Saga data flow with Sentry monitoring for production reliability.",
    tech: ["Next.js 12", "React 18", "Redux Saga", "Algolia", "Stripe", "Apple Pay", "LiveKit", "Sentry"],
    shots: [{ label: "shop" }, { label: "live" }, { label: "product" }, { label: "checkout" }],
    tint: "violet",
  },
  {
    name: "PlateAway",
    url: "https://www.plateaway.com",
    category: "Food commerce",
    kind: "meal-kit",
    description:
      "Production storefront for a meal-kit & prepared-food brand on Next.js 16 + React 19. Catalog, cart and Stripe checkout, real-time order updates over MQTT, Typesense instant search and a Puck-based CMS. Engineered SEO-first — breadcrumb schema, dynamic sitemaps and static generation across a catalog backed by 67+ documented APIs.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Redux Toolkit", "Stripe", "MQTT", "Typesense", "Puck"],
    shots: [{ label: "catalog" }, { label: "product" }, { label: "combo" }, { label: "checkout" }],
    tint: "indigo",
  },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 4, suffix: "", label: "E-commerce platforms" },
  { value: 30, suffix: "+", label: "Technologies" },
  { value: 4, suffix: "+", label: "Payment gateways" },
];

// No fabricated testimonials or articles — add real ones here when you have them,
// then re-enable <Testimonials /> / <Writing /> in src/app/page.tsx.
export const testimonials: { quote: string; name: string; title: string }[] = [];

export const articles: {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  url: string;
}[] = [];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
