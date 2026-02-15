"use client";
import { useState, useEffect } from "react";
import { runningQuotes } from "@/lib/quotes";

export default function Quote() {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % runningQuotes.length);
        setOpacity(1);
      }, 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const quote = runningQuotes[index];

  if (!quote) return null;

  return (
    <div className="mt-12 xl:mt-16 p-8 xl:p-12 text-white bg-[#1b1b1b]">
      <h3
        style={{
          opacity: opacity,
          transition: "opacity 1s ease-in-out",
        }}
        className="text-[24px] leading-6 sm:text-[32px] sm:leading-8 xl:text-[40px] xl:leading-10 italic font-medium"
      >
        “{quote.text}”
        <span className="text-custom-accent ml-3">- {quote.author}</span>
      </h3>
    </div>
  );
}
