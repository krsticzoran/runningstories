"use client";

import { useState } from "react";
import Image from "next/image";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

import headerImage from "@/assets/images/header/header-image.webp";
import { MenuContent, MenuSocials } from "./menu-content";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => setIsMenuOpen(false);

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
        className=" hidden md:block md:w-2/3 xl:w-3/4 [&>button]:hidden border-0! bg-black"
      >
        <SheetTitle className="sr-only">running image</SheetTitle>
        <div className="relative h-screen w-full">
          <Image
            src={headerImage}
            fill
            quality={60}
            alt="running women"
            className="object-cover page-fade"
            priority
          />
          <div className="absolute left-4 top-7 z-50  ">
            <div className="flex gap-2">
              <span className="text-white font-familjen font-bold text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
                Trkačke
              </span>
              <span className="text-custom-accent font-familjen font-bold text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
                Priče
              </span>
            </div>
            <p className="text-white font-medium text-lg  mt-2 ">
              Priče, saveti i inspiracija za trkače.
            </p>
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 35%)",
            }}
          />
        </div>
      </SheetContent>
      <SheetContent
        side="right"
        className="w-full md:w-1/3 xl:w-1/4 bg-black text-white border-none p-10 [&>button]:hidden"
      >
        <SheetTitle className="sr-only">menu</SheetTitle>
        <div className="absolute right-4 top-11">
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
        <MenuContent onClose={handleCloseMenu} />
        <MenuSocials />
      </SheetContent>
    </Sheet>
  );
}
