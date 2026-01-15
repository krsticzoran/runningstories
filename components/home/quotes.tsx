"use clinet";
import { runningQuotes } from "@/lib/quotes";
import { useState } from "react";

interface QuoteType {
  text: string;
  author: string;
}

export default function Quote() {
  const [quote] = useState<QuoteType>(() => {
    const randomIndex = Math.floor(Math.random() * runningQuotes.length);
    return runningQuotes[randomIndex];
  });

  if (!quote) return null;
  return (
    <div className="mt-16 p-8 xl:p-12 text-white bg-[#1b1b1b]">
      <h3 className="text-[24px] leading-6 sm:text-[32px] sm:leading-8 xl:text-[40px] xl:leading-10 italic font-medium">
        “{quote.text}”
        <span className="text-custom-accent ml-3">- {quote.author}</span>
      </h3>
    </div>
  );
}
