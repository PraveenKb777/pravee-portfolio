import { SKILLS } from "@/constants/skills";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

export default function TechStack() {
  return (
    <section className="mt-28">

      <SectionHeading
        subtitle="STACK"
        title="Technologies I work with"
      />

      <div className="flex flex-wrap gap-3">

        {SKILLS.map((skill) => (

          <Badge key={skill}>

            {skill}

          </Badge>

        ))}

      </div>

    </section>
  );
}