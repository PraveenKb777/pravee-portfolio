const TECH = [
  "React Native",
  "TypeScript",
  "React",
  "Node.js",
  "Hono",
  "Cloudflare Workers",
  "PostgreSQL",
  "MongoDB",
  "Redux Toolkit",
  "React Query",
  "Reanimated",
  "GitHub Actions",
];

export default function TechStack() {
  return (
    <section className="mt-28">

      <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Tech Stack
      </p>

      <div className="flex flex-wrap gap-3">

        {TECH.map((tech) => (

          <div
            key={tech}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm text-zinc-300 transition hover:border-green-500 hover:text-white"
          >
            {tech}
          </div>

        ))}

      </div>

    </section>
  );
}