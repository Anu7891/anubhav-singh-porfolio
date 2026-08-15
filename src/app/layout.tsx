import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = "Anubhav Singh — Frontend Developer";
const description =
  "Frontend developer at 3Embed Software Technologies. I build fast, SEO-first e-commerce storefronts with React, Next.js, TypeScript and Redux — production platforms like PlateAway and Qykly that stay quick at scale.";

export const metadata: Metadata = {
  metadataBase: new URL("https://anubhavsingh.dev"),
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
    url: "https://anubhavsingh.dev",
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
