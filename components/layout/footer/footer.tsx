"use client";
import { Container } from "../container";

export function Footer() {
  return (
    <footer className="bg-black ">
      <Container>
        <div className="py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Zo Run. The daily motion. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
