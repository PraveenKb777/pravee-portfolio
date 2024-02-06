import React from "react";
import { PROJECTS } from "../page";
import ProjectData from "@/components/project-data";

export default function Page() {
  return (
    <main className="py-12">
      <h1 className="text-green-400 text-4xl font-bold">PROJECTS</h1>
      {PROJECTS.map((e) => (
        <ProjectData key={e.description} {...e} />
      ))}
    </main>
  );
}
