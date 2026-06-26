export default function CurrentlyBuilding() {
  return (
    <section className="mt-28 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-10">

      <p className="text-sm uppercase tracking-[0.35em] text-green-400">
        CURRENTLY
      </p>

      <h2 className="mt-5 text-4xl font-bold">
        Building Brightspeed
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-9 text-zinc-400">
        Maintaining and modernizing the Brightspeed Account Management
        application used by customers across the United States.

        My recent work includes a React Native migration from
        <span className="text-green-400"> 0.68 → 0.76.6</span>,
        redesigning production screens, integrating 40+ REST APIs and
        improving performance and crash stability.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {[
          "React Native",
          "Redux Toolkit",
          "React Query",
          "TypeScript",
        ].map((item) => (

          <div
            key={item}
            className="rounded-full bg-green-500/10 px-4 py-2 text-green-400"
          >
            {item}
          </div>

        ))}

      </div>

    </section>
  );
}