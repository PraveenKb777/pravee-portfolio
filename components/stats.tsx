const STATS = [
  {
    value: "250K+",
    label: "Downloads",
  },
  {
    value: "40+",
    label: "REST APIs",
  },
  {
    value: "20+",
    label: "Screens Redesigned",
  },
  {
    value: "0.68 → 0.76",
    label: "Migration",
  },
];

export default function Stats() {
  return (
    <section className="mt-24">

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

        {STATS.map((stat) => (

          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
          >
            <div className="text-4xl font-bold">
              {stat.value}
            </div>

            <div className="mt-3 text-zinc-500">
              {stat.label}
            </div>
          </div>

        ))}

      </div>

    </section>
  );
}