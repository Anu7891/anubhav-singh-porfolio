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
  "Contributed to 6 production storefronts spanning social + live commerce, e-commerce, B2B and food-ordering at 3Embed, built on Next.js, React and Redux.",
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
      "Built and maintained the frontend for 6 production commerce storefronts — social + live selling, food-ordering, B2B gifting and a membership marketplace — on 3Embed's multi-tenant Next.js platforms, as part of a small frontend team.",
      "Improved performance and SEO via static generation, code-splitting, structured data and dynamic sitemaps.",
      "Built reusable component libraries, Redux Toolkit state and type-safe forms shared across storefronts, keeping the UI consistent and reducing duplicate work.",
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
  { title: "Frontend & frameworks", icon: "code", pills: ["React", "Next.js (Pages + App Router)", "Server Components", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"] },
  { title: "State & data", icon: "data", pills: ["Redux Toolkit", "Redux-Saga", "RxJS", "TanStack Query", "Zustand", "Context API", "Zod"] },
  { title: "Styling & UI", icon: "paint", pills: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Material-UI", "styled-components", "SCSS/Sass", "Framer Motion", "Swiper"] },
  { title: "Commerce & search", icon: "cart", pills: ["Stripe", "Razorpay", "Typesense", "Puck CMS", "Builder.io", "i18next"] },
  { title: "Real-time & media", icon: "wifi", pills: ["LiveKit", "MQTT", "WebSockets"] },
  { title: "Auth & backend", icon: "server", pills: ["Google / Facebook OAuth", "Firebase", "JWT", "Node.js", "REST APIs"] },
  { title: "Tooling & DevOps", icon: "shield", pills: ["Git", "ESLint", "Prettier", "Husky", "Docker", "Bitbucket Pipelines"] },
  { title: "AI-assisted", icon: "rocket", pills: ["Cursor", "Claude", "GitHub Copilot"] },
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

const projectList: Project[] = [
  {
    name: "Paris Panini",
    url: "https://parispanniblr.newkommerce.com/",
    category: "Food commerce",
    kind: "NewKommerce",
    description:
      "A London-based food-ordering storefront serving authentic British cuisine, built on the multi-tenant NewKommerce platform — a Puck-driven homepage, Typesense-powered menu filtering, add-to-cart, product offers, dual-gateway checkout (Stripe + Razorpay) and real-time order updates over MQTT, on a fast, SEO-friendly Next.js front end.",
    tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Typesense", "Stripe", "Razorpay", "Puck", "MQTT", "Tailwind CSS"],
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
        "A London-based food-ordering storefront serving authentic British cuisine, built on the multi-tenant NewKommerce platform (one env-driven codebase powering several brands). As part of a 3-person frontend team I built the Puck-driven homepage and About page, Typesense filtering on the product listing, the add-to-cart flow and product offers, dual-gateway checkout with Stripe and Razorpay, and real-time order-status updates over MQTT.",
      role: "Frontend Developer · 3-person frontend team",
      timeline: "2024 · 3Embed (NewKommerce)",
      platform: "NewKommerce multi-tenant SaaS",
      highlights: [
        "Puck-driven homepage and About page — reusable blocks the content team edits without code.",
        "Typesense instant, typo-tolerant filtering on the menu/product listing.",
        "Add-to-cart flow and product offers/discounts on a shared Redux cart layer.",
        "Dual-gateway checkout (Stripe global + Razorpay India UPI) with real-time order status over MQTT.",
      ],
      features: [
        { title: "Homepage (Puck)", body: "Visual page builder with reusable blocks — content editable without code, SSG + ISR for speed and SEO." },
        { title: "Menu & filters", body: "Typesense-powered instant, typo-tolerant filtering across categories, price and attributes." },
        { title: "Cart & offers", body: "Add-to-cart with quantity/variants and product offers applied through a shared Redux slice." },
        { title: "Checkout & real-time", body: "Stripe + Razorpay payments, with live order-status updates pushed over MQTT." },
      ],
      stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Typesense", "Stripe", "Razorpay", "Puck", "MQTT", "Tailwind CSS", "SSG / ISR"],
    },
  },
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
    name: "Ideal",
    url: "https://idealonline.app/",
    category: "Social + live commerce",
    kind: "video & live-selling marketplace",
    description:
      "A US social + live-selling marketplace — buy and sell from brands and users, sell live and sell via video. Built end-to-end by a 2-person frontend team; I owned the Social module (feed, stories, store profiles) and the LiveKit-powered Live-selling experience, on a multi-tenant base that also powers sibling white-label storefronts.",
    tech: ["Next.js 12", "React", "JavaScript", "Redux-Saga", "Material-UI", "LiveKit", "Stripe", "Typesense", "MQTT"],
    shots: [
      { label: "social" },
      { label: "live" },
      { label: "product" },
      { label: "profile" },
    ],
    tint: "violet",
    overview: {
      summary:
        "Ideal is a US marketplace where brands and users buy, sell live, and sell via video. It runs on a multi-tenant base that also powers sibling white-label storefronts (Marchecentrale, Woenking). As part of a 2-person frontend team building the storefront end-to-end, I owned the Social module — the feed, stories and store profiles — and the Live-selling module built on LiveKit, and earlier did the first Stripe checkout integration plus PDP and homepage-responsiveness work on the shared base.",
      role: "Frontend Developer · 2-person frontend team (end-to-end)",
      timeline: "2023–2024 · 3Embed (multi-tenant marketplace)",
      platform: "Multi-tenant base — Ideal + sibling storefronts",
      highlights: [
        "Social module — feed, stories and store profiles where users post and follow.",
        "Live-selling module on LiveKit — real-time video streams where viewers shop.",
        "One multi-tenant base powering Ideal plus sibling white-label storefronts.",
        "First Stripe checkout integration, plus PDP and homepage-responsiveness work on the shared base.",
      ],
      features: [
        { title: "Social feed & stories", body: "Feed, stories and posts on store profiles — the social side of the marketplace." },
        { title: "Live selling (LiveKit)", body: "Real-time live video streams where sellers showcase and viewers shop." },
        { title: "Shops, PLP & PDP", body: "Store listings and product pages on the shared multi-tenant base." },
        { title: "Checkout (Stripe)", body: "Stripe-powered checkout — my first end-to-end payment integration." },
      ],
      stack: ["Next.js 12", "React", "JavaScript", "Redux-Saga", "Material-UI", "styled-components", "SCSS/Sass", "LiveKit", "Stripe", "Typesense", "MQTT", "Firebase"],
    },
  },
  {
    name: "TrulyFree",
    url: "https://trulyfree.com/",
    category: "E-commerce",
    kind: "membership marketplace",
    description:
      "A large US membership marketplace. I joined the existing storefront team to migrate the social experience from v1 to v2 — reworking the social flow's UI and wiring it to updated APIs — and to build out the live-selling module, as part of a 5-person frontend team on a production codebase.",
    tech: ["Next.js 12", "React 18", "Redux-Saga", "LiveKit", "REST APIs", "SCSS/Sass"],
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
        "TrulyFree is a large US membership marketplace for non-toxic products. I joined the existing storefront team to migrate the social experience from v1 to v2 — reworking the social flow's UI and wiring it to the updated v2 APIs — and to build out the live-selling module. Worked as part of a 5-person frontend team on a production Next.js / Redux-Saga codebase.",
      role: "Frontend Developer · 5-person frontend team",
      timeline: "2023–2024 · 3Embed (TrulyFree)",
      platform: "TrulyFree marketplace",
      highlights: [
        "Migrated the social experience from v1 to v2 — UI rework plus updated API integration.",
        "Built out the live-selling module on the storefront.",
        "Worked within an established 5-person frontend team on a large production codebase.",
      ],
      features: [
        { title: "Social v2", body: "Rebuilt the social flow's UI and connected it to the updated v2 APIs." },
        { title: "Live selling", body: "Contributed the live-selling module — real-time video shopping on the storefront." },
        { title: "Production storefront", body: "Feature and UI work across a large, live US marketplace." },
      ],
      stack: ["Next.js 12", "React 18", "Redux-Saga", "LiveKit", "REST APIs", "SCSS/Sass"],
    },
    // tint kept in the indigo/cyan family for a consistent, symmetric palette
  },
];

// Display order for the Projects section — edit this list to reorder.
const projectOrder = ["Qykly", "Paris Panini", "TrulyFree", "Ideal"];
export const projects: Project[] = projectOrder
  .map((n) => projectList.find((p) => p.name === n))
  .filter((p): p is Project => Boolean(p));

export const stats = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 6, suffix: "", label: "Production storefronts" },
  { value: 2, suffix: "", label: "Payment gateways" },
  { value: 4, suffix: "", label: "Real-time & search stacks" },
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
