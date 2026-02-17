import { getMenuLinks } from "@/lib/menu";
import { socials } from "@/lib/socials";
import MenuLink from "./menu-link";

interface MenuContentProps {
  onClose: () => void;
}

export function MenuContent({ onClose }: MenuContentProps) {
  const menuLinks = getMenuLinks();

  return (
    <nav className="flex h-full flex-col mt-[66px] gap-4 w-full">
      <MenuLink href="/" label="Početna" onClose={onClose} />

      {menuLinks
        .filter((link) => link.visible !== false)
        .map((item) => (
          <MenuLink
            href={item.href}
            label={item.label}
            onClose={onClose}
            key={item.href}
          />
        ))}
    </nav>
  );
}

export function MenuSocials() {
  return (
    <div className="flex gap-4">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-white opacity-75 hover:opacity-100 transition"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
