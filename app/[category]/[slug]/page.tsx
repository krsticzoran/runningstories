import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { mdxComponents } from "@/components/mdx/mdx-components";
import Image from "next/image";
import Divider from "@/components/ui/divider";

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
    description: post.description,
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
    <article className="flex flex-col mx-auto justify-center bg-bg-secondary">
      <header>
        <Image
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-[400px] xl:h-[500px] object-cover"
        />
        <div className="pt-[100px] xl:pt-[120px] px-5 sm:px-8 lg:px-[60px] xl:px-0 flex justify-center">
          <div className="max-w-[1300px]">
            <p className="text-sm !text-custom-accent font-semibold mb-2 uppercase">
              {post.category}
            </p>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-3">
              <h1 className="text-black text-[68px] leading-[68px] sm:text-[84px] sm:leading-[84px] lg:text-[100px]  lg:leading-[100px] tracking-tight  !font-instrument max-w-[1000px]">
                {post.title}
              </h1>
              <div className="flex gap-4">
                <p className="flex gap-2 leading-[22px] font-medium text-custom-dark">
                  Vreme čitanja:
                  <span className="font-semibold">
                    {post.metadata.readingTime} min
                  </span>
                </p>
              </div>
            </div>
            <p className="sm:text-lg font-medium text-black leading-[22px] sm:leading-[25px] mt-5">
              {post.description}
            </p>
          </div>
        </div>
      </header>

      <Divider />

      <div className="flex flex-col justify-center  ">
        <div className="max-w-[1300px] px-5 sm:px-8 lg:px-[60px] xl:px-0 ">
          <MDXContent code={post.content} components={mdxComponents} />
        </div>
      </div>
      <Divider className="mb-[100px] lg:mb-[120px]" />
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
