import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { mdxComponents } from "@/components/mdx/mdx-components";
import Image from "next/image";
import Divider from "@/components/ui/divider";
import { getPost } from "@/lib/content";
import { formatDate } from "@/lib/date";

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

  const post = getPost(category, slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;

  const post = getPost(category, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col mx-auto justify-center bg-bg-secondary">
      <header>
        <Image
          src={post.image}
          alt={post.imageAlt}
          sizes="100vw"
          quality={75}
          priority
          className="w-full h-[400px] xl:h-[450px] 2xl:h-[600px] object-cover"
        />
        <div className="pt-[100px] xl:pt-[120px] px-5 sm:px-8 lg:px-[60px] xl:px-0 flex justify-center">
          <div className="max-w-[1300px] w-full">
            <p className="text-sm !text-custom-accent font-semibold mb-2 uppercase">
              {post.category}
            </p>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-3">
              <h1 className="text-black text-[68px] leading-[68px] sm:text-[84px] sm:leading-[84px] lg:text-[100px]  lg:leading-[100px] tracking-tight  !font-instrument max-w-[1000px]">
                {post.title}
              </h1>
              <div className="flex  xl:flex-col gap-5 xl:gap-2 xl:mb-2.5">
                <p className="flex gap-2 leading-[22px] font-medium text-custom-dark">
                  <span className="font-semibold">
                    {post.metadata.readingTime} min čitanja
                  </span>
                </p>
                <p className="leading-[22px] text-custom-dark opacity-80">
                  {formatDate(post.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Divider />

      <div className="flex flex-col justify-center items-center ">
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
