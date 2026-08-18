import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const url = "https://anubhav-singh-porfolio.vercel.app";
const title = "Anubhav Singh — Frontend Developer";
const description =
  "Frontend developer — React, Next.js & TypeScript. 3+ years at 3Embed building fast, SEO-friendly commerce platforms across e-commerce, B2B and food-ordering: Qykly, Paris Panini, TrulyFree.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: "%s · Anubhav Singh",
  },
  description,
  keywords: [
    "Anubhav Singh",
    "Frontend Developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "e-commerce",
    "B2B commerce",
    "Redux Toolkit",
    "Tailwind CSS",
    "Surat",
    "3Embed",
  ],
  authors: [{ name: "Anubhav Singh", url }],
  creator: "Anubhav Singh",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url,
    siteName: "Anubhav Singh — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "3Embed Software Technologies" },
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "SEO", "E-commerce", "B2B commerce"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <div className="glow-field" aria-hidden="true" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
