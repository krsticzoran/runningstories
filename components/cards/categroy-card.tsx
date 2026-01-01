import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/type/post";

interface PostCardProps {
  post: Post;
  variant?: "featured" | "regular";
}

export function CategoryCard({ post, variant = "regular" }: PostCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/${post.category}/${post.slug}`}
      className={`bg-white p-1 flex flex-col ${
        isFeatured ? "xl:flex-row gap-6" : ""
      }`}
    >
      <div
        className={`relative w-full ${
          isFeatured ? "xl:w-1/2 xl:h-100 aspect-3/2" : "aspect-3/2"
        } overflow-hidden`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
      <div
        className={`pt-6 px-5 pb-4 flex flex-col gap-5 ${
          isFeatured ? "xl:w-1/2 xl:gap-8" : ""
        }`}
      >
        <p className="w-fit inline-flex items-center gap-1 py-1.5 px-3 bg-[#efefef] text-custom-dark text-sm leading-5 font-semibold">
          <Clock size={14} className="opacity-70" />
          {post.metadata.readingTime} min čitanja
        </p>
        <h2
          className={`text-xl sm:text-[22px] xl:text-[26px] font-medium text-black`}
        >
          {post.title}
        </h2>
        <p className="leading-[22px] text-[#666] font-medium line-clamp-3 sm:line-clamp-2">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
