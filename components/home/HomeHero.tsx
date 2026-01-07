import Link from "next/link";
import Image from "next/image";
import { posts } from "#site/content";
import { getMenuLinks } from "@/lib/menu";
import { Container } from "../layout/container";

export default function HomeHero() {
  const menuLinks = getMenuLinks();
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="bg-black text-white min-h-[65vh] ">
      <Container className=" flex flex-col justify-between">
        <div className="max-w-2xl">
          <h1 className="text-[100px] leading-[100px] !font-instrument">
            Svaka trka ima svoju priču.
          </h1>

          <p className="mt-6 text-[#eee] text-lg leading-[25px] max-w-2xl">
            Od prvih kilometara do ličnih pobeda, kroz iskustva trkača iz
            zajednice.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.category}/${post.slug}`}
                className="relative  h-[220px] overflow-hidden p-1 bg-[#1b1b1b]"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-white z-10 text-sm backdrop-blur-[20px] bg-black/25">
                  {post.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 overflow-hidden">
          <div className="auto-scroll">
            {menuLinks
              .concat(menuLinks)
              .concat(menuLinks)
              .map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-4 py-2 hover:bg-white/20 rounded-full text-white whitespace-nowrap font-medium"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
