import { notFound } from "next/navigation";

import { PROJECTS } from "@/constants/projects";

import CaseStudyHero from "@/components/project/CaseStudyHero";

import CaseSection from "@/components/project/CaseSection";

import Badge from "@/components/ui/Badge";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-24">
      <CaseStudyHero
        title={project.title}
        subtitle={project.subtitle}
        overview={project.overview}
        technologies={project.technologies}
        appStore={project.appStore}
        playStore={project.playStore}
      />

      <CaseSection title="Problem">
        <p>{project.problem}</p>
      </CaseSection>

      <CaseSection title="Solution">
        <p>{project.solution}</p>
      </CaseSection>

      <CaseSection title="Impact">
        <div className="flex flex-wrap gap-3">
          {project.impact.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Key Features">
        <div className="flex flex-wrap gap-3">
          {project.features.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Challenges">
        <ul className="space-y-4">
          {project.challenges?.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection title="What I Learned">
        <ul className="space-y-4">
          {project.learned?.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </CaseSection>
    </main>
  );
}
