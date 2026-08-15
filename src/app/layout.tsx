import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = "Anubhav Singh — Frontend Developer";
const description =
  "E-commerce frontend developer — React, Next.js & TypeScript. 3+ years at 3Embed shipping fast, SEO-first production storefronts: Paris Panini, Qykly, TrulyFree, PlateAway.";

export const metadata: Metadata = {
  metadataBase: new URL("https://anubhav-singh-porfolio.vercel.app"),
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
    "Redux Toolkit",
    "Tailwind CSS",
    "Surat",
    "3Embed",
  ],
  authors: [{ name: "Anubhav Singh" }],
  creator: "Anubhav Singh",
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://anubhav-singh-porfolio.vercel.app",
    siteName: "Anubhav Singh — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <div className="glow-field" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
