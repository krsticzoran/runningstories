"use client";
import { Tag, TAGS } from "@/lib/tags";
import { useQueryState } from "nuqs";
import { Post } from "@/type/post";

interface CategoryFilterProps {
  tags: Tag[];
  categoryPosts: Post[];
}

export function CategoryFilter({ tags, categoryPosts }: CategoryFilterProps) {
  const validTags = Object.keys(TAGS) as Tag[];

  const [tag, setTag] = useQueryState<Tag | null>("tag", {
    defaultValue: null,
    parse: (value) =>
      validTags.includes(value as Tag) ? (value as Tag) : null,
  });

  if (!tags || tags.length === 0) return null;

  const filteredPosts = categoryPosts
    .filter((post) => !tag || post.tags?.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log("Filtered posts:", filteredPosts);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setTag(null)}
        className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
      >
        Svi članci
      </button>
      {tags.map((tagValue) => (
        <button
          key={tagValue}
          className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
          onClick={() => setTag(tagValue)}
        >
          {TAGS[tagValue]}
        </button>
      ))}
    </div>
  );
}
