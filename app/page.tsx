import HomeHero from "@/components/home/home-hero";
import HomeTraining from "@/components/home/home-training";
import HomeEquipment from "@/components/home/home-equipment";
import HomeHealth from "@/components/home/home-health";
import HomeWorld from "@/components/home/home-world";
import HomeCommunity from "@/components/home/home-community";

export default function Home() {
  return (
    <main className="mt-20 page-fade">
      <HomeHero />
      <HomeTraining />
      <HomeHealth />
      <HomeEquipment />
      <HomeCommunity />
      <HomeWorld />
    </main>
  );
}
