import { CategoryCard } from "@/components/cards/categroy-card";
import { Container } from "../layout/container";
import Link from "next/link";
import { useCategoryPosts } from "@/hook/useCategoryPosts";
import worldMap from "@/assets/images/home/worldmap.png";

export default function HomeWorld() {
  const trainingPosts = useCategoryPosts("iz-sveta-trcanja", 2);

  return (
    <section className="relative bg-white py-[100px] xl:py-[120px]">
      <div
        className="hidden xl:block absolute top-0 right-0 h-full w-full z-0 opacity-25"
        style={{
          backgroundImage: `url(${worldMap.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <Container className="relative flex flex-col z-50">
        <Link href="/iz-sveta-trcanja">
          <h2 className="text-[40px] sm:text-[48px] xl:text-[56px] leading-tight text-black pb-3 uppercase font-medium mb-4 xl:mb-6">
            Iz sveta trčanja
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
