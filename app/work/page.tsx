import ProjectCard from "@/components/project/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/constants/projects";

export default function WorkPage() {
  const featured = PROJECTS.filter(
    (p) => p.category === "featured"
  );

  const production = PROJECTS.filter(
    (p) => p.category === "production"
  );

  return (
    <main className="py-24">

      <SectionHeading
        subtitle="FEATURED"
        title="Selected Work"
      />

      <p className="mb-12 max-w-3xl text-lg leading-8 text-zinc-400">
        Enterprise applications and products that showcase my experience
        building scalable mobile applications for real users.
      </p>

      <div className="space-y-8">
        {featured.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>

      <div className="mt-24" />

      <SectionHeading
        subtitle="PRODUCTION APPS"
        title="Applications Built From Scratch"
      />

      <p className="mb-12 max-w-3xl text-lg leading-8 text-zinc-400">
        Production applications I designed and developed from the ground up,
        covering the complete development lifecycle from architecture to
        deployment.
      </p>

      <div className="space-y-8">
        {production.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>

    </main>
  );
}