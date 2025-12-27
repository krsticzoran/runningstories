import { defineConfig, s } from "velite";

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
          description: s.string().max(999),
          date: s.isodate(),
          updated: s.isodate().optional(),
          author: s.enum(["Zoran", "Simona"]),
          category: s.enum([
            "trening",
            "oprema",
            "vesti",
            "simonin-kutak",
            "intervjui",
          ]),
          image: s.image(),
          imageAlt: s.string().max(200),
          tags: s.array(s.string()).optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.category}/${data.slug}`,
        })),
    },
  },
});
