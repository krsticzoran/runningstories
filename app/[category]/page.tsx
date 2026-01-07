import { posts } from "#site/content";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categoriesData } from "@/lib/categories";
import { CategoryCard } from "@/components/cards/categroy-card";
import { Container } from "@/components/layout/container";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(categoriesData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryMeta = categoriesData[category];

  if (!categoryMeta) {
    notFound();
  }

  return {
    title: categoryMeta.title,
    description: categoryMeta.description,
    alternates: {
      canonical: `https://trkackeprice.com/${category}`,
    },
    openGraph: {
      title: categoryMeta.title,
      description: categoryMeta.description,
      url: `https://trkackeprice.com/${category}`,
      type: "website",
      images: [
        {
          url: categoryMeta.image.src,
          alt: categoryMeta.alt,
          width: 1200,
          height: 600,
        },
      ],
    },
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
    <section className="bg-bg-secondary  pb-[100px] xl:pb-[120px]">
      <div className="relative w-full h-[400px] xl:h-[450px] 2xl:h-[600px] ">
        <Image
          src={categoryMeta.image}
          alt={categoryMeta.alt}
          fill
          quality={75}
          priority
          sizes="100vw"
          className={`object-cover z-0 ${
            categoryMeta.objectPosition === "top"
              ? "object-top"
              : categoryMeta.objectPosition === "bottom"
              ? "object-bottom"
              : "object-center"
          }`}
        />
      </div>
      <Container className="pt-[100px] xl:pt-[120px]">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-3">
          <h1 className="text-black text-[68px] leading-[68px] sm:text-[84px] sm:leading-[84px] lg:text-[100px]  lg:leading-[100px] tracking-tight  !font-instrument max-w-[1000px] capitalize">
            {categoryMeta.excerpt}
          </h1>
        </div>
      </Container>

      <Container className="pt-20 sm:pt-24 flex flex-col gap-3">
        <CategoryCard post={categoryPosts[0]} variant="featured" />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {categoryPosts.slice(1).map((post) => (
            <CategoryCard post={post} key={post.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}
