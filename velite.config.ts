import { defineConfig, s } from "velite";

const categoryMap = {
  training: {
    label: "Trening",
    path: "trening",
  },
  gear: {
    label: "Oprema",
    path: "oprema",
  },
  news: {
    label: "Vesti",
    path: "vesti",
  },
  "simons-corner": {
    label: "Simonin kutak",
    path: "simonin-kutak",
  },
  interviews: {
    label: "Intervjui",
    path: "intervjui",
  },
} as const;

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug("posts"),
          description: s.string().max(999).optional(),
          date: s.isodate(),
          updated: s.isodate().optional(),
          author: s.enum(["Zoran", "Simona"]),
          category: s.enum([
            "training",
            "gear",
            "news",
            "simons-corner",
            "interviews",
          ]),
          featured: s.boolean().default(false),
          image: s.image().optional(),
          tags: s.array(s.string()).optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.mdx(),
        })
        .transform((data) => {
          const categoryInfo = categoryMap[data.category];
          return {
            ...data,
            categoryLabel: categoryInfo.label,
            categoryPath: categoryInfo.path,
            permalink: `/${categoryInfo.path}/${data.slug}`,
          };
        }),
    },
  },
});
