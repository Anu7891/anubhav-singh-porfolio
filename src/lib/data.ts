export const site = {
  name: "Anubhav Singh",
  firstName: "Anubhav",
  lastName: "Singh",
  initials: "AS",
  role: "Frontend Developer",
  tagline:
    "I work on fast, SEO-friendly commerce platforms — e-commerce, B2B and food-ordering — with React and Next.js, as part of a team building production apps that stay quick at scale.",
  availability: "Open to work — On-site · Hybrid · Remote",
  email: "singhanubhav1958@gmail.com",
  location: "Surat, Gujarat, India",
  shortLocation: "Surat, India",
  github: "https://github.com/Anu7891",
  githubHandle: "@Anu7891",
  linkedin: "https://www.linkedin.com/in/anubhav-singh-50a197191",
  linkedinHandle: "/in/anubhav-singh-50a197191",
  resumeUrl: "/resume.pdf",
  heroChips: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", "Node.js", "Typesense"],
};

export const about = {
  headline: ["What I", "do."],
  body: "I'm a frontend developer at 3Embed Software Technologies. For 3+ years I've been building production commerce platforms — e-commerce, B2B and food-ordering — with React, Next.js and TypeScript. I focus on performance and SEO, and I've cut a lot of repeat work by building reusable component systems and leaning on AI-assisted tools — so features ship faster without dropping code quality.",
  cards: [
    { icon: "gauge", title: "Performance", sub: "Core Web Vitals, lazy loading, caching" },
    { icon: "search", title: "SEO", sub: "SSR/SSG, schema, sitemaps" },
    { icon: "layers", title: "Scale", sub: "Multi-tenant, reusable components" },
    { icon: "cart", title: "Commerce & real-time", sub: "Payments, search, WebSockets" },
  ],
};

/* ---- Key achievements (kept honest — drawn from real project work) ---- */
export const achievements = [
  "Contributed to 4+ production storefronts spanning e-commerce, B2B and food-ordering at 3Embed, built on Next.js, React and TypeScript.",
  "Integrated payment gateways — Stripe and Razorpay — into production checkout flows.",
  "Built real-time features including MQTT order updates and LiveKit live-shopping streams.",
  "Focused on performance and SEO — Core Web Vitals, static generation, structured data and dynamic sitemaps.",
  "Added instant search with Typesense and Algolia across multiple storefronts.",
  "Used AI-assisted tools (Cursor, Claude, GitHub Copilot) to speed up delivery while keeping code quality.",
];

export const experience = [
  {
    company: "3Embed Software Technologies",
    role: "Frontend Web Developer",
    period: "Oct 2022 — Present",
    location: "Surat · On-site",
    points: [
      "Built and maintained 4+ production e-commerce storefronts for global clients using Next.js, React and TypeScript.",
      "Improved performance & SEO — raised Lighthouse / Core Web Vitals scores by ~40% via static generation, code-splitting, structured data and dynamic sitemaps.",
      "Architected Redux Toolkit state, type-safe forms and reusable component libraries, cutting repeat UI work by ~30% across projects.",
      "Integrated payment gateways (Stripe, Razorpay), Typesense/Algolia instant search, MQTT real-time order updates, live shopping and Puck-based CMS builders.",
      "Built end-to-end commerce flows — hamper builders and product customization — and extended React admin panels with self-serve modules for customization pricing and options, so business teams manage them without developer changes.",
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
  { name: "React.js" },
  { name: "Next.js (App + Pages Router)" },
  { name: "TypeScript" },
  { name: "Redux Toolkit / Saga" },
  { name: "Performance / SEO" },
];

export const skillHighlights = {
  body: "Worked on multi-gateway checkout (Stripe · Razorpay), instant search with Typesense & Algolia, real-time order updates over MQTT, LiveKit live-shopping and Puck-based CMS pages.",
  pills: ["Multi-tenant SaaS", "i18n / localization", "Static generation", "Design systems", "Core Web Vitals"],
};

export const skillCategories = [
  { title: "Frontend & frameworks", icon: "code", pills: ["React 19", "Next.js", "App Router", "Server Components", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"] },
  { title: "State & data", icon: "data", pills: ["Redux Toolkit", "Redux-Saga", "Zustand", "TanStack Query", "Context API", "RxJS", "React Hook Form", "Zod"] },
  { title: "Styling & UI", icon: "paint", pills: ["Tailwind CSS", "Material-UI", "Emotion", "styled-components", "Radix UI", "Framer Motion", "Swiper", "SCSS/Sass"] },
  { title: "Commerce & search", icon: "cart", pills: ["Stripe", "Razorpay", "Google Pay", "Apple Pay", "Algolia", "Typesense", "Puck CMS", "i18next"] },
  { title: "Real-time & media", icon: "wifi", pills: ["MQTT", "WebSockets", "LiveKit", "Socket.IO"] },
  { title: "Backend & auth", icon: "server", pills: ["Node.js", "REST APIs", "GraphQL", "NextAuth", "Firebase"] },
  { title: "Testing & tooling", icon: "shield", pills: ["Jest", "Playwright", "Vitest", "Storybook", "ESLint", "Prettier", "Husky", "Git"] },
  { title: "DevOps & AI-assisted", icon: "rocket", pills: ["Docker", "Vercel", "GitHub Actions", "Sentry", "GrowthBook", "Cursor", "Claude", "Copilot"] },
];

export type ProjectShot = { label: string; src?: string };

export type ProjectOverview = {
  summary: string;
  role: string;
  timeline: string;
  platform: string;
  highlights: string[];
  features: { title: string; body: string }[];
  stack: string[];
};

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
  /** Rich in-page case study shown in the macOS-style overview modal. */
  overview?: ProjectOverview;
};

export const projects: Project[] = [
  {
    name: "Qykly",
    url: "https://staging.qykly.com/en",
    category: "B2B commerce",
    kind: "corporate gifting SaaS",
    description:
      "A B2B corporate-gifting storefront on the multi-tenant Qykly platform. Businesses browse a curated catalog, build their own premium gift hampers and customize products, then check out with GST-ready billing and delivery or pickup. A Puck-driven homepage, PLP, PDP, hamper and product-customization flows and checkout, plus a React admin with pricing and customization modules. Next.js App Router with Redux Toolkit, a Puck page builder, Typesense instant search, i18next localization and a custom type-safe form system.",
    tech: ["Next.js 14", "TypeScript", "Redux Toolkit", "Radix UI", "Framer Motion", "Zod", "i18next", "Puck", "Docker"],
    image: "/projects/qykly-home.png",
    shots: [
      { label: "listing", src: "/projects/qykly-listing.png" },
      { label: "product", src: "/projects/qykly-product.png" },
      { label: "builder", src: "/projects/qykly-builder.png" },
      { label: "checkout", src: "/projects/qykly-checkout.png" },
    ],
    tint: "cyan",
    overview: {
      summary:
        "Qykly is a B2B corporate-gifting platform. Businesses browse a curated catalog, assemble their own premium hampers with a guided builder, customize products, and place orders with GST-ready billing and delivery or pickup. As part of a 3-person frontend team I worked end-to-end — the Puck-driven homepage, product listing and detail pages, the hamper and product-customization flows and checkout — and extended the React admin panel with modules for customization pricing, hamper customization and product customization. Built on Next.js with Redux Toolkit and a custom type-safe form system.",
      role: "Frontend Developer · 3-person frontend team",
      timeline: "2024–2025 · 3Embed (Qykly)",
      platform: "Qykly multi-tenant SaaS",
      highlights: [
        "Puck-driven homepage — reusable blocks the team edits visually, no code changes.",
        "Build-your-own-hamper flow — a step-by-step builder for custom corporate gifts.",
        "Product customization and GST-ready checkout with delivery or pickup.",
        "Extended the React admin with 3 self-serve modules — customization pricing, hamper and product customization — so the business manages options without a developer.",
      ],
      features: [
        { title: "Homepage (Puck)", body: "Visual page builder with reusable blocks — content and layout editable without code." },
        { title: "PLP & PDP", body: "Listings with Typesense search, filters, variants and add-to-cart." },
        { title: "Hamper & customization", body: "Guided flow to assemble custom hampers and personalize products at scale." },
        { title: "Checkout", body: "GST billing, delivery/pickup and an itemized order summary." },
        { title: "Admin — pricing", body: "New module to configure how customization options are priced." },
        { title: "Admin — customization", body: "Modules to manage hamper and product customization options end-to-end." },
      ],
      stack: ["Next.js 14", "TypeScript", "Redux Toolkit", "Radix UI", "Framer Motion", "Zod", "i18next", "Puck", "Docker"],
    },
  },
  {
    name: "Paris Panini",
    url: "https://parispanniblr.newkommerce.com/",
    category: "Food commerce",
    kind: "NewKommerce",
    description:
      "A French-inspired food-ordering storefront (Bengaluru) built on the multi-tenant NewKommerce platform — a Puck-driven homepage, Typesense-powered menu filtering, add-to-cart, product offers, dual-gateway checkout (Stripe + Razorpay) and real-time order updates over WebSocket, on a fast, SEO-friendly Next.js front end.",
    tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "TanStack Query", "Typesense", "Stripe", "Razorpay", "Puck", "WebSocket", "Tailwind CSS"],
    image: "/projects/paris-home.png",
    shots: [
      { label: "listing", src: "/projects/paris-listing.png" },
      { label: "product", src: "/projects/paris-product.png" },
      { label: "cart", src: "/projects/paris-cart.png" },
      { label: "wallet", src: "/projects/paris-wallet.png" },
    ],
    tint: "indigo",
    overview: {
      summary:
        "A French-inspired food-ordering storefront in Bengaluru, built on the multi-tenant NewKommerce platform (one env-driven codebase powering several brands). As part of a 3-person frontend team I built the Puck-driven homepage and About page, Typesense filtering on the product listing, the add-to-cart flow and product offers, dual-gateway checkout with Stripe and Razorpay, and real-time order-status updates over WebSocket.",
      role: "Frontend Developer · 3-person frontend team",
      timeline: "2024 · 3Embed (NewKommerce)",
      platform: "NewKommerce multi-tenant SaaS",
      highlights: [
        "Puck-driven homepage and About page — reusable blocks the content team edits without code.",
        "Typesense instant, typo-tolerant filtering on the menu/product listing.",
        "Add-to-cart flow and product offers/discounts on a shared Redux cart layer.",
        "Dual-gateway checkout (Stripe global + Razorpay India UPI) with real-time order status over WebSocket.",
      ],
      features: [
        { title: "Homepage (Puck)", body: "Visual page builder with reusable blocks — content editable without code, SSG + ISR for speed and SEO." },
        { title: "Menu & filters", body: "Typesense-powered instant, typo-tolerant filtering across categories, price and attributes." },
        { title: "Cart & offers", body: "Add-to-cart with quantity/variants and product offers applied through a shared Redux slice." },
        { title: "Checkout & real-time", body: "Stripe + Razorpay payments, with live order-status updates pushed over WebSocket." },
      ],
      stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "TanStack Query", "Typesense", "Stripe", "Razorpay", "Puck", "WebSocket", "Tailwind CSS", "SSG / ISR"],
    },
  },
  {
    name: "TrulyFree",
    url: "https://trulyfree.com/",
    category: "E-commerce",
    kind: "membership marketplace",
    description:
      "Feature-rich commerce storefront with multi-gateway checkout (Stripe, Google Pay, Apple Pay), Algolia search, in-app chat, Gemini-powered assistance and GrowthBook feature flags. Redux-Saga data flow with Sentry monitoring for production reliability.",
    tech: ["Next.js 12", "React 18", "Redux Saga", "Algolia", "Stripe", "Apple Pay", "Google Pay", "GrowthBook", "Sentry"],
    image: "/projects/truly-home.png",
    shots: [
      { label: "plp", src: "/projects/truly-shop.png" },
      { label: "pdp", src: "/projects/truly-product.png" },
      { label: "cart", src: "/projects/truly-cart.png" },
      { label: "checkout", src: "/projects/truly-checkout.png" },
    ],
    tint: "cyan",
    overview: {
      summary:
        "TrulyFree is a US marketplace for better, non-toxic products with a membership and cash-back model. Shoppers browse hundreds of brands and check out with express payments. I worked on the storefront front end as part of a 5-person frontend team — Redux-Saga data flow, Algolia search and multi-gateway express checkout, with Sentry monitoring in production.",
      role: "Frontend Developer · 5-person frontend team",
      timeline: "2023–2024 · 3Embed (TrulyFree)",
      platform: "TrulyFree marketplace",
      highlights: [
        "Membership + cash-back pricing shown across listings, cart and checkout.",
        "Express multi-gateway checkout — Apple Pay, Google Pay and card.",
        "In-app chat and Gemini-powered shopping assistance for support.",
        "Algolia instant search with rich filters (badges, price, shipping).",
      ],
      features: [
        { title: "Shop & filters", body: "Category listings with badge, price and shipping filters, Algolia-powered." },
        { title: "Product pages", body: "Bundles, member vs non-member pricing and cash-back, add-to-cart." },
        { title: "Account & rewards", body: "Order history, referrals and cash-back tracked in the member account." },
        { title: "Checkout", body: "Express Apple Pay / Google Pay plus contact and shipping, with an order summary." },
      ],
      stack: ["Next.js 12", "React 18", "Redux-Saga", "Algolia", "Stripe", "Apple Pay", "Google Pay", "GrowthBook", "Sentry"],
    },
    // tint kept in the indigo/cyan family for a consistent, symmetric palette
  },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 4, suffix: "+", label: "Commerce platforms" },
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
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
