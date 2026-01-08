import { CategoryCard } from "@/components/cards/categroy-card";
import { posts } from "#site/content";
import { Container } from "../layout/container";
import Link from "next/link";

export default function HomeTraining() {
  const categoryPosts = posts
    .filter((post) => post.category === "trening")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-bg-secondary py-[100px] xl:py-[120px]">
      <Container className="flex flex-col">
        <Link href="trening">
          <h2 className="text-[40px] sm:text-[48px] xl:text-[56px] leading-tight text-black pb-3 uppercase font-medium mb-4 xl:mb-6">
            Trening
          </h2>
        </Link>
        <CategoryCard post={categoryPosts[0]} variant="featured" titleAs="h3" />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
          {categoryPosts.slice(1).map((post) => (
            <CategoryCard post={post} key={post.slug} titleAs="h3" />
          ))}
        </div>
      </Container>
    </section>
  );
}
