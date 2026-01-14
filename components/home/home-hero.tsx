import { posts } from "#site/content";
import { Container } from "../layout/container";
import runnersImage from "@/assets/images/home/runners.png";
import HomeCard from "../cards/home-card";

export default function HomeHero() {
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="bg-black text-white relative py-[100px] xl:py-[120px]">
      <div
        className="hidden xl:block absolute top-0 right-0 h-full w-1/2"
        style={{
          backgroundImage: `url(${runnersImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "100% 80%",
        }}
      />
      <Container>
        <div className="">
          <h1 className="-mt-2 max-w-xl xl:w-xl">
            Svaka trka ima svoju priču.
          </h1>

          <p className="mt-4 sm:mt-5 xl:mt-6 text-[#eee] leading-[22px] sm:text-lg sm:leading-[25px] max-w-2xl">
            Od prvih kilometara do ličnih pobeda, kroz iskustva trkača iz
            zajednice.
          </p>
        </div>

        <div className="pt-20 sm:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredPosts.map((post, index) => (
              <HomeCard
                post={post}
                key={post.title}
                priority={index === 0 ? true : undefined}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
