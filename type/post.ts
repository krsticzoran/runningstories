import { StaticImageData } from "next/image";

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  category:
    | "trening"
    | "oprema"
    | "vesti"
    | "simonin-kutak"
    | "zajednica"
    | "zdravlje";
  image: string | StaticImageData;
  imageAlt: string;
  metadata: Record<string, any>;
  content: string;
  permalink: string;
};
