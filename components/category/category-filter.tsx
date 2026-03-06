import { Tag, TAGS } from "@/lib/tags";

interface CategoryFilterProps {
  tags: Tag[];
}

export function CategoryFilter({ tags }: CategoryFilterProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
        >
          {TAGS[tag]}
        </button>
      ))}
    </div>
  );
}
