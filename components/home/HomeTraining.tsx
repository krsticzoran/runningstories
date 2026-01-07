import { CategoryCard } from "@/components/cards/categroy-card";
import { posts } from "#site/content";
import { Container } from "../layout/container";

export default function HomeTraining() {
  const categoryPosts = posts
    .filter((post) => post.category === "trening")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-bg-secondary">
      <Container className="mt-[120px] flex flex-col gap-3">
        <CategoryCard post={categoryPosts[0]} variant="featured" />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {categoryPosts.slice(1).map((post) => (
            <CategoryCard post={post} key={post.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}
