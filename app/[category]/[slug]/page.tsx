import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    category: post.categoryPath,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { category, slug } = await params; // await ovde!

  const post = posts.find(
    (p) => p.categoryPath === category && p.slug === slug
  );

  if (!post) return {};

  return {
    title: post.title,
    description: post.description || post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params; // await ovde!

  const post = posts.find(
    (p) => p.categoryPath === category && p.slug === slug
  );

  console.log("Looking for:", { category, slug }); // Debug
  console.log(
    "Available posts:",
    posts.map((p) => ({
      categoryPath: p.categoryPath,
      slug: p.slug,
    }))
  ); // Debug

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-blue-600 font-semibold mb-2 uppercase">
          {post.categoryLabel}
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        {post.description && (
          <p className="text-xl text-gray-600 mb-4">{post.description}</p>
        )}

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="font-semibold">{post.author}</span>
          <span>•</span>
          <time>{new Date(post.date).toLocaleDateString("sr-RS")}</time>
          <span>•</span>
          <span>{post.metadata.readingTime} min</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXContent code={post.content} />
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
