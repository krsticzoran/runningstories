import { posts } from "#site/content";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categoriesData } from "@/lib/categories";
import { Clock } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryMeta = categoriesData[category];

  if (!categoryMeta) {
    return {};
  }

  return {
    title: categoryMeta.title,
    description: categoryMeta.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryMeta = categoriesData[category];

  const categoryPosts = posts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!categoryPosts.length) {
    notFound();
  }

  return (
    <section className="bg-bg-secondary pb-[120px]">
      <div className="relative w-full h-[400px] xl:h-[450px] 2xl:h-[600px] ">
        <Image
          src={categoryMeta.image}
          alt={categoryMeta.alt}
          fill
          quality={75}
          priority
          className="object-cover z-0"
        />
      </div>
      <div className="pt-[100px] xl:pt-[120px] px-5 sm:px-8 lg:px-[60px] xl:px-0 flex justify-center">
        <div className="max-w-[1300px] w-full">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-3">
            <h1 className="text-black text-[68px] leading-[68px] sm:text-[84px] sm:leading-[84px] lg:text-[100px]  lg:leading-[100px] tracking-tight  !font-instrument max-w-[1000px] capitalize">
              {categoryMeta.description}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-[60px] xl:px-0 max-w-[1300px] w-full mx-auto mt-[120px] flex flex-col gap-3">
        <Link
          key={categoryPosts[0].slug}
          href={`/${categoryPosts[0].category}/${categoryPosts[0].slug}`}
          className="bg-white p-1 flex flex-col xl:flex-row xl:gap-6"
        >
          <div className="relative xl:h-100 w-full aspect-3/2 xl:w-1/2 overflow-hidden">
            <Image
              src={categoryPosts[0].image}
              alt={categoryPosts[0].imageAlt}
              fill
              className="object-cover hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="pt-6 px-5 pb-4 xl:p-5 xl:pl-0 w-full xl:w-1/2 flex flex-col gap-5 xl:gap-8">
            <p className="w-fit inline-flex items-center gap-1 py-1.5 px-3  bg-[#efefef] text-custom-dark text-sm leading-5 font-semibold">
              <Clock size={14} className="opacity-70" />
              {categoryPosts[0].metadata.readingTime} min čitanja
            </p>
            <div className="flex flex-col gap-4 xl:gap-3">
              <h2 className="text-xl leading-5 sm:text-[22px] sm:leading-[22px] xl:text-[26px] xl:leading-[26px] font-medium text-black">
                {categoryPosts[0].title}
              </h2>
              <p className="leading-[22px] text-[#666] font-medium line-clamp-3 sm:line-clamp-none">
                {categoryPosts[0].description}
              </p>
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {categoryPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/${post.category}/${post.slug}`}
              className="bg-white p-1 flex flex-col  "
            >
              <div className="relative xl:h-100 w-full aspect-3/2  overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover hover:scale-110 transition-all duration-300"
                />
              </div>

              <div className="pt-6 px-5 pb-4 w-full flex flex-col gap-5 xl:gap-8 ">
                <p className="w-fit inline-flex items-center gap-1 py-1.5 px-3 bg-[#efefef] text-custom-dark text-sm leading-5 font-semibold">
                  <Clock size={14} className="opacity-70" />
                  {post.metadata.readingTime} min čitanja
                </p>

                <div className="flex flex-col gap-4 xl:gap-3">
                  <h2 className="text-xl leading-5 sm:text-[22px] sm:leading-[22px] xl:text-[26px] xl:leading-[26px] font-medium text-black">
                    {post.title}
                  </h2>

                  <p className="leading-[22px] text-[#666] font-medium line-clamp-3 sm:line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
