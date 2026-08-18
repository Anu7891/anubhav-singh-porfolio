import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://anubhav-singh-porfolio.vercel.app/sitemap.xml",
  };
}
