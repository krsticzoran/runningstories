import type { MetadataRoute } from "next";
import { posts } from "#site/content";
import { categoriesData } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trkackeprice.com";

  const categoryUrls = Object.keys(categoriesData).map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/${post.category}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    ...categoryUrls,
    ...postUrls,
  ];
}
