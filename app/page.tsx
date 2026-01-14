import HomeHero from "@/components/home/home-hero";
import HomeTraining from "@/components/home/home-training";
import HomeEquipment from "@/components/home/home-equipment";

export default function Home() {
  return (
    <main className="mt-20 page-fade">
      <HomeHero />
      <HomeTraining />
      <HomeEquipment />
    </main>
  );
}
