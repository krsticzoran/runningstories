import missionImg from "@/assets/images/categories/iz-sveta-trcanja.webp";
import trainingImg from "@/assets/images/categories/zdravlje.webp";
import stackImg from "@/assets/images/categories/oprema.webp";
import balanceImg from "@/assets/images/categories/trening.webp";

import { StaticImageData } from "next/image";
import { Tag } from "@/lib/tags";

export const categoriesData: Record<
  string,
  {
    title: string;
    description: string;
    image: StaticImageData;
    alt: string;
    objectPosition?: "center" | "top" | "bottom";
    excerpt: string;
    ctaText: string;
    visible?: boolean;
    tags: Tag[];
  }
> = {
  "sub-3-journey": {
    title: "Sub 3 Journey",
    description:
      "At 45, starting over is a choice. This is the reality of chasing a sub-3 hour marathon while balancing a professional career and being a father. No filters, just the road to December 2027.",
    image: missionImg,
    alt: "The path to a sub-3 hour marathon at 45",
    excerpt: "The road to a sub-3 hour marathon at 45.",
    ctaText: "Follow the Journey",
    tags: [],
  },
  "training-after-40": {
    title: "Training After 40",
    description:
      "Running in your 40s is a different game. It’s about being faster and stronger while balancing a career, a family, and the reality of aging. No shortcuts, no injuries—just a smart approach for those of us who refuse to slow down.",
    image: trainingImg,
    alt: "A focused runner over 40 maintaining a steady pace",
    excerpt: "Your best miles are still ahead of you. Keep moving forward.",
    ctaText: "Start Training",
    tags: [],
  },
  stack: {
    title: "Tech & Gear",
    description:
      "Honest gear reviews from a utility perspective. Discover what actually makes you faster and what is just marketing. From carbon plates to recovery gadgets.",
    image: stackImg,
    alt: "Running and tech gear configuration",
    excerpt: "The Stack: Tested tools that drive real performance.",
    ctaText: "Inspect Gear",
    tags: [],
  },
  balance: {
    title: "Life Balance",
    description:
      "The intersection of health and productivity. How to manage nutrition, sleep, and recovery while working a high-focus 8-hour job without burning out.",
    image: balanceImg,
    alt: "Managing family, work, and high-performance training",
    excerpt: "System Stability: Balancing career, family, and the track.",
    ctaText: "View Balance",
    tags: [],
  },
};
