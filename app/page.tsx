import HomeHero from "@/components/home/HomeHero";
import HomeTraining from "@/components/home/HomeTraining";

export default function Home() {
  return (
    <div className="mt-20 page-fade">
      <HomeHero />
      <HomeTraining />
    </div>
  );
}
