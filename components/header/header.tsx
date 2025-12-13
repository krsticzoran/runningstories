import Link from "next/link";

import Container from "../layout/container";

export default function Header() {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-black/25">
      <nav className="h-full px-5 ">
        <Container className="h-full flex items-center">
          <div className="flex w-full items-center justify-between h-full">
            <Link href="/" className="flex gap-2  -mt-[5px]">
              <span className="text-white font-familjen text-[33px] tracking-tighter leading-none">
                Running
              </span>
              <span className="text-black font-familjen text-[33px] tracking-tighter leading-none">
                Stories
              </span>
            </Link>

            <div className="relative h-2.5 w-8 flex flex-col justify-between">
              <div className="h-0.5 w-[22px] bg-white ml-auto"></div>

              <div className="h-0.5 w-8 bg-white"></div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
