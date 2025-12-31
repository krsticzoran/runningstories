import { posts } from "#site/content";

export const postsBySlug = new Map(
  posts.map((post) => [`${post.category}/${post.slug}`, post])
);

export function getPost(category: string, slug: string) {
  return postsBySlug.get(`${category}/${slug}`);
}
