import { categoriesData } from "@/lib/categories";

export type MenuLink = {
  href: string;
  label: string;
  visible?: boolean;
};

export function getMenuLinks(): MenuLink[] {
  return Object.entries(categoriesData).map(([slug, category]) => ({
    href: `/${slug}`,
    label: category.title,
    visible: category?.visible ?? true,
  }));
}
