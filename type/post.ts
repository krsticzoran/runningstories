import { StaticImageData } from "next/image";
import { Tag } from "@/lib/tags";

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  image: string | StaticImageData;
  imageAlt: string;
  metadata: Record<string, any>;
  content: string;
  permalink: string;
  tags?: Tag[];
};
