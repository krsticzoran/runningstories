"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { getMenuLinks } from "@/data/menu-links";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = getMenuLinks();

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
        side="left"
        className=" hidden md:block md:w-2/3 xl:w-3/4 [&>button]:hidden border-0!"
      >
        <SheetTitle className="sr-only">running image</SheetTitle>
        <div className="relative h-full w-full">
          <Image
            src="/header-image.jpg"
            fill
            alt="running women"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 25%)",
            }}
          />
        </div>
      </SheetContent>
      <SheetContent
        side="right"
        className="w-full md:w-1/3 xl:w-1/4 bg-black text-white border-none p-10 [&>button]:hidden"
      >
        <SheetTitle className="sr-only">menu</SheetTitle>
        <div className="absolute right-4 top-7">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative h-2.5 w-8 flex flex-col justify-between cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="relative h-[26px] w-[26px]">
              <div className="absolute top-1/2 left-0 h-0.5 w-8 -translate-y-1/2 rotate-45 bg-white" />
              <div className="absolute top-1/2 left-0 h-0.5 w-8 -translate-y-1/2 -rotate-45 bg-white" />
            </div>
          </button>
        </div>
        <nav className="flex h-full flex-col mt-[66px] gap-4">
          {menuLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-familjen text-[22px] leading-[22px] font-medium opacity-75"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
