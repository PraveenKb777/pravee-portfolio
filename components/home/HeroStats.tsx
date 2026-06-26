import { STATS } from "@/constants/stats";
import StatCard from "../ui/StatCard";

export default function HeroStats() {
  return (
    <section className="grid gap-5 md:grid-cols-4">

      {STATS.map((item) => (

        <StatCard
          key={item.label}
          {...item}
        />

      ))}

    </section>
  );
}