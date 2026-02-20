import { getMenuLinks } from "@/lib/menu";
import { Container } from "../container";

export function Footer() {
  const links = getMenuLinks();
  return (
    <footer className="bg-black ">
      <Container>
        <div>
          {links.map((link) => (
            <div key={link.label} className="text-white">
              {link.label}
            </div>
          ))}
        </div>
        <div className="py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Trkačke priče. Sva prava zadržana.
        </div>
      </Container>
    </footer>
  );
}
