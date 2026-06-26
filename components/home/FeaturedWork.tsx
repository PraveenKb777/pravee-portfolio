import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants/projects";

export default function FeaturedWork() {
  return (
    <section>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-green-400">
            SELECTED WORK
          </p>

          <h2 className="mt-4 text-5xl font-black">Featured Projects</h2>
        </div>

        <Link
          href="/projects"
          className="hidden md:flex items-center gap-2 text-green-400 hover:text-white transition"
        >
          View All
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="mt-14 space-y-8">
        {PROJECTS.slice(0,2).map((project) => (
          <article
            key={project.title}
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/60
              backdrop-blur-xl
              p-10
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-green-500
              hover:shadow-[0_20px_70px_rgba(34,197,94,.12)]
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="uppercase tracking-[0.3em] text-sm text-green-400">
                  {project.subtitle}
                </p>

                <h3 className="mt-3 text-4xl font-bold">{project.title}</h3>
              </div>

              <ArrowUpRight
                className="
                  text-zinc-500
                  transition
                  duration-300
                  group-hover:text-green-400
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.architecture?.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-zinc-800
                    bg-zinc-900
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
