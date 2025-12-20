type MenuLink = {
  href: string;
  label: string;
};

export function getMenuLinks(): MenuLink[] {
  return [
    { href: "/", label: "Početna" },
    { href: "/trening", label: "Trening" },
    { href: "/planovi", label: "Planovi" },
    { href: "/35-plus", label: "35+" },
    { href: "/oprema", label: "Oprema" },
    { href: "/vesti", label: "Vesti" },
    { href: "/simonin-kutak", label: "Simonin kutak" },
  ];
}
