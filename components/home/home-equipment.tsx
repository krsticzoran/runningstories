import { Container } from "../layout/container";
import Link from "next/link";
import HomeCard from "../cards/home-card";
import { useCategoryPosts } from "@/hook/useCategoryPosts";

export default function HomeTraining() {
  const equimpmentPosts = useCategoryPosts("oprema");

  return (
    <section className="bg-black py-[100px] xl:py-[120px]">
      <Container className="flex flex-col">
        <Link href="/oprema">
          <h2 className="text-[40px] sm:text-[48px] xl:text-[56px] leading-tight text-white pb-3 uppercase font-medium mb-4 xl:mb-6">
            Oprema
          </h2>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {equimpmentPosts.map((post) => (
            <HomeCard key={post.title} post={post} />
          ))}
        </div>
        <div className="mt-16 p-8 xl:p-12 text-white bg-[#1b1b1b]">
          <h3 className="text-[24px] leading-6 sm:text-[32px] sm:leading-8 xl:text-[40px] xl:leading-10 italic font-medium">
            “{quote.text}”
            <span className="text-custom-accent ml-3">- {quote.author}</span>
          </h3>
        </div>
      </Container>
    </section>
  );
}
