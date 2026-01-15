import HomeHero from "@/components/home/home-hero";
import HomeTraining from "@/components/home/home-training";
import HomeEquipment from "@/components/home/home-equipment";
import HomeHealth from "@/components/home/home-health";

export default function Home() {
  return (
    <main className="mt-20 page-fade">
      <HomeHero />
      <HomeTraining />
      <HomeHealth />
      <HomeEquipment />
    </main>
  );
}
