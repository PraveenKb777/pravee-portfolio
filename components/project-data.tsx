import HoverColorChange from "./hover-color-change";

export interface PProjectData {
  title: string;
 description: string;
  link?: string;
  category?: string;
  tech?: string[];
}

export default function ProjectData({
  title,
 description,
 link,
 category,
 tech = [],
}: PProjectData) {
  const Card = (
    <div className="group mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]">

      <div className="flex items-center justify-between">

        <div>

          <HoverColorChange label={title} />

          {category && (
            <p className="mt-2 text-sm uppercase tracking-widest text-green-400">
              {category}
            </p>
          )}

        </div>

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">
          Production
        </span>

      </div>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        {description}
      </p>

      {tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {link && (
        <div className="mt-8 flex justify-end">

          <span className="text-green-400 transition-all group-hover:translate-x-1">
            View Project →
          </span>

        </div>
      )}

    </div>
  );

  if (!link) return Card;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Card}
    </a>
  );
}