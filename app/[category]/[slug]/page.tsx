import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import Image from "next/image";

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { category, slug } = await params;

  const post = posts.find((p) => p.category === category && p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description || post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;

  const post = posts.find((p) => p.category === category && p.slug === slug);

  console.log("Looking for:", { category, slug });
  console.log(
    "Available posts:",
    posts.map((p) => ({
      categoryPath: p.category,
      slug: p.slug,
    }))
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-[60px">
      <header className="mb-8">
        <Image
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-[500px] object-cover"
        />
        <div className="py-[120px] px-[60px] mx-auto">
          <div className="max-w-[1300px]">
            <div className="text-sm text-blue-600 font-semibold mb-2 uppercase">
              {post.category}
            </div>

            <h1 className="text-4xl mb-4 !font-instrument">{post.title}</h1>

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
          </div>
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
