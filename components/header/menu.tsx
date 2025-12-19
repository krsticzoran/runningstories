"use client";

import { useState } from "react";

import Link from "next/link";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="relative h-2.5 w-8 flex flex-col justify-between group cursor-pointer"
        aria-label="Toggle menu"
      >
        <div
          className="h-0.5 w-[22px] bg-white ml-auto transition-all duration-300 ease-in-out
      group-hover:w-8 group-hover:absolute group-hover:top-1/2
      group-hover:rotate-45 group-hover:right-0"
        />

        <div
          className="h-0.5 w-8 bg-white transition-all duration-300 ease-in-out
      group-hover:absolute group-hover:top-1/2
      group-hover:-rotate-45"
        />
      </button>
      <SheetContent
        side="right"
        className="w-full md:w-1/2 bg-black text-white border-none p-10"
      >
        <SheetTitle className="sr-only">menu</SheetTitle>
        <nav className="flex h-full flex-col justify-center gap-10">
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-familjen text-4xl tracking-tight hover:opacity-70 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
