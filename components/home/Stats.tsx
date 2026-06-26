const STATS = [
  {
    value: "250K+",
    label: "Downloads",
    description: "Across App Store & Google Play",
  },
  {
    value: "40+",
    label: "REST APIs",
    description: "Integrated & maintained",
  },
  {
    value: "20+",
    label: "Screens",
    description: "Redesigned for Brightspeed",
  },
  {
    value: "0.68 → 0.76.6",
    label: "React Native",
    description: "Migration completed",
  },
];

export default function Stats() {
  return (
    <section>
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.35em] text-green-400">
          HIGHLIGHTS
        </p>

        <h2 className="mt-4 text-4xl font-bold">Numbers that matter.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/70
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-green-500
              hover:shadow-[0_20px_60px_rgba(34,197,94,.12)]
            "
          >
            <p className="text-4xl font-black text-green-400">{stat.value}</p>

            <p className="mt-4 text-xl font-semibold">{stat.label}</p>

            <p className="mt-3 leading-7 text-zinc-500">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
