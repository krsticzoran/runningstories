import Link from "next/link";

import { Container } from "../container";

import Menu from "./menu";

export default function Header() {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-black/25 z-50">
      <div className="h-full">
        <Container className="h-full flex items-center">
          <div className="flex w-full items-center justify-between h-full">
            <Link href="/" className="flex gap-2 items-center -mt-[5px]">
              <span className="text-white font-familjen text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
                Trkačke
              </span>
              <span className="text-custom-accent font-familjen text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
                Priče
              </span>
            </Link>
            <Menu />
          </div>
        </Container>
      </div>
    </header>
  );
}
