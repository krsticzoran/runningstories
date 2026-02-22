import Link from "next/link";

interface PaginationNavProps {
  category: string;
  currentPage: number;
  totalPages: number;
}

export function PaginationNav({
  category,
  currentPage,
  totalPages,
}: PaginationNavProps) {
  if (totalPages <= 1) return null;

  const prevHref =
    currentPage - 1 === 1
      ? `/${category}`
      : `/${category}/page/${currentPage - 1}`;

  const nextHref = `/${category}/page/${currentPage + 1}`;

  return (
    <div className="flex gap-4 mt-10">
      {currentPage > 1 && <Link href={prevHref}>← Previous</Link>}

      {currentPage < totalPages && <Link href={nextHref}>Next →</Link>}
    </div>
  );
}
