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
    <article className="flex flex-col gap-[60px] mx-auto justify-center">
      <header>
        <Image
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-[500px] object-cover"
        />
        <div className="pt-[120px] px-[60px] flex justify-center">
          <div className="max-w-[1300px]">
            <p className="text-sm !text-custom-accent font-semibold mb-2 uppercase">
              {post.category}
            </p>
            <div className="flex justify-between items-end">
              <h1 className="text-[100px] leading-[100px] tracking-tight  !font-instrument max-w-[1000px]">
                {post.title}
              </h1>
              <p className="flex gap-2 leading-[22px] font-medium">
                Vreme čitanja:
                <span className="font-semibold">
                  {post.metadata.readingTime} min
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex justify-center w-full ">
        <div className="max-w-[1300px] px-[60px] w-full">
          <div className="h-0.5 w-full bg-[#ddd]" />
        </div>
      </div>
      <div className="prose prose-lg flex justify-center pb-[120px] ">
        <div className="max-w-[1300px] px-[60px] ">
          <MDXContent code={post.content} />
        </div>
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
