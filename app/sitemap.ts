import type { MetadataRoute } from "next";
import { COURSES } from "@/lib/course-details";
import { allCourses, categoryMeta } from "@/lib/courses-data";

const BASE = "https://www.managersity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/tous-les-cours`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/collections`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/boutique`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/ressources`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/politique-de-remboursement`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/termes-et-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Cours : union des slugs statiques (COURSES) et du catalogue (allCourses)
  const courseSlugs = new Set<string>();
  COURSES.forEach((c) => courseSlugs.add(c.slug));
  allCourses.forEach((c) => {
    const s = c.href.split("/").pop();
    if (s) courseSlugs.add(s);
  });
  const coursePages: MetadataRoute.Sitemap = [...courseSlugs].map((slug) => ({
    url: `${BASE}/cours/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Pages catégories
  const categoryPages: MetadataRoute.Sitemap = Object.keys(categoryMeta).map((slug) => ({
    url: `${BASE}/collections/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticPages, ...coursePages, ...categoryPages];
}