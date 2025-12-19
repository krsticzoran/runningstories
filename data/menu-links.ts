type MenuLink = {
  href: string;
  label: string;
};

export function getMenuLinks(): MenuLink[] {
  return [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
}
