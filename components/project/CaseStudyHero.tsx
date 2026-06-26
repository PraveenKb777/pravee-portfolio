import { ExternalLink, Github } from "lucide-react";
import Badge from "../ui/Badge";

interface Props {
  title: string;
  subtitle: string;
  overview: string;
  technologies: string[];

  company?: string;

  impact?: string[];

  github?: string;
  live?: string;

  playStore?: string;
  appStore?: string;
}

export default function CaseStudyHero({
  title,
  subtitle,
  overview,
  technologies,
  company,
  impact,
  github,
  live,
  playStore,
  appStore,
}: Props) {
  return (
    <section className="border-b border-zinc-800 pb-20">
      <p className="uppercase tracking-[0.35em] text-green-400">{subtitle}</p>

      <h1 className="mt-5 text-6xl font-black md:text-7xl">{title}</h1>

      {company && (
        <p className="mt-4 text-lg text-zinc-500">
          Built at <span className="text-white font-medium">{company}</span>
        </p>
      )}

      <p className="mt-10 max-w-4xl text-xl leading-9 text-zinc-400">
        {overview}
      </p>

      {impact && (
        <div className="mt-12 flex flex-wrap gap-3">
          {impact.map((item) => (
            <div
              key={item}
              className="rounded-full bg-green-500/10 px-5 py-3 text-sm font-medium text-green-400"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {(github || live || playStore || appStore) && (
        <div className="mt-10 flex flex-wrap gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-green-500 hover:text-green-400"
            >
              <div className="flex items-center gap-2">
                <Github size={18} />
                GitHub
              </div>
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-green-500 hover:text-green-400"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={18} />
                Live Demo
              </div>
            </a>
          )}

          {playStore && (
            <a
              href={playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-green-500 hover:text-green-400"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={18} />
                Google Play
              </div>
            </a>
          )}

          {appStore && (
            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-green-500 hover:text-green-400"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={18} />
                App Store
              </div>
            </a>
          )}
        </div>
      )}

      <div className="mt-12">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
