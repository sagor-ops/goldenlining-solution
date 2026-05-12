import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/data/"],
      },
    ],
    sitemap: "https://goldenlining.com.au/sitemap.xml",
    host: "https://goldenlining.com.au",
  };
}
