import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/constants/projects";
import Badge from "../ui/Badge";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_20px_80px_rgba(34,197,94,.12)]">
      <Link href={`/work/${project.slug}`} className="block">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-green-400">
              {project.subtitle}
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {project.title}
            </h2>

            {project.company && (
              <p className="mt-2 text-zinc-500">
                {project.company}
              </p>
            )}
          </div>

          <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          {project.overview}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.impact.map((item) => (
            <span
              key={item}
              className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Link>

      {(project.playStore || project.appStore) && (
        <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-800 pt-6">
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition hover:border-green-500 hover:text-green-400"
            >
              Google Play
              <ExternalLink size={16} />
            </a>
          )}

          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition hover:border-green-500 hover:text-green-400"
            >
              App Store
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}