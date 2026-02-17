import Link from "next/link";

interface MenuLinkProps {
  href: string;
  label: string;

  onClose: () => void;
}

export default function MenuLink({ href, label, onClose }: MenuLinkProps) {
  return (
    <Link
      key={href}
      href={href}
      onClick={onClose}
      className="group relative overflow-hidden font-familjen text-[22px] leading-[22px] font-medium h-[22px] block"
    >
      {/* default text */}
      <span className="block translate-y-0 opacity-75 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
        {label}
      </span>

      {/* hover text */}
      <span className="absolute left-0 top-full block translate-y-0 text-white transition-all duration-500 ease-in-out group-hover:-translate-y-full">
        {label}
      </span>
    </Link>
  );
}
