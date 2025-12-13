import Link from "next/link";
import Image from "next/image";

import Container from "../layout/container";

export default function Header() {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-black/25">
      <nav className="h-full px-5 py-8 ">
        <Container>
          <p>text</p>
          <h1>nasolv</h1>
          <div className="flex items-center justify-between h-full">
            <Link href="/">
              <svg
                width="200"
                height="60"
                viewBox="0 0 200 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="45"
                  fill="#FFFFFF"
                  fontFamily="'Biwa', sans-serif"
                  fontSize="40"
                  fontWeight="bold"
                >
                  Running
                </text>
                <text
                  x="110"
                  y="45"
                  fill="#000000"
                  fontFamily="'Biwa', sans-serif"
                  fontSize="40"
                  fontWeight="bold"
                >
                  Stories
                </text>
              </svg>
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  );
}
