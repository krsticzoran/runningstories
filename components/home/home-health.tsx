import { CategoryCard } from "@/components/cards/categroy-card";
import { Container } from "../layout/container";
import Link from "next/link";
import { useCategoryPosts } from "@/hook/useCategoryPosts";

export default function HomeHealth() {
  const trainingPosts = useCategoryPosts("zdravlje", 2);

  return (
    <section className="bg-white py-[100px] xl:py-[120px]">
      <Container className="flex flex-col">
        <Link href="/zdravlje">
          <h2 className="text-[40px] sm:text-[48px] xl:text-[56px] leading-tight text-black pb-3 uppercase font-medium mb-4 xl:mb-6">
            Oporavak & ishrana
          </h2>
        </Link>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
          {trainingPosts.map((post) => (
            <CategoryCard
              post={post}
              key={post.slug}
              titleAs="h3"
              bgColor="bg-bg-secondary"
              readingTimeBgColor="bg-white"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
