import Link from "next/link";
import Image from "next/image";
import { posts } from "#site/content";
import { Container } from "../layout/container";
import runnersImage from "@/assets/images/home/runners.png";

export default function HomeHero() {
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="bg-black text-white relative">
      <div
        className="hidden xl:block absolute top-0 right-0 h-full w-1/2"
        style={{
          backgroundImage: `url(${runnersImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "100% 80%",
        }}
      />
      <Container className="py-[100px] xl:py-[120px]">
        <div className="flex justify-between">
          <div className="max-w-2xl xl:w-2xl">
            <h1 className="text-[68px] leading-[68px] sm:text-[84px] sm:leading-[84px] xl:text-[100px] xl:leading-[100px] !font-instrument">
              Svaka trka ima svoju priču.
            </h1>

            <p className="mt-4 sm:mt-5 xl:mt-6 text-[#eee] leading-[22px] sm:text-lg sm:leading-[25px] max-w-2xl">
              Od prvih kilometara do ličnih pobeda, kroz iskustva trkača iz
              zajednice.
            </p>
          </div>
        </div>

        <div className="pt-20 sm:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/${post.category}/${post.slug}`}
                className="relative  h-60 overflow-hidden p-1 bg-[#1b1b1b]"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority={index === 0} //
                  className="object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-white z-10 text-sm backdrop-blur-[20px] bg-black/25">
                  {post.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
