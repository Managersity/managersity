import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/connexion", "/inscription", "/api/"],
    },
    sitemap: "https://www.managersity.com/sitemap.xml",
    host: "https://www.managersity.com",
  };
}