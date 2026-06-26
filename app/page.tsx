import AvailableWork from "@/components/avilable-work";
import ColoredBtn from "@/components/colored-btn";
import CategoryTab from "@/components/category-tab";
import ProjectData from "@/components/project-data";
import SubHeading from "@/components/sub-heading";
import WorkDetails from "@/components/work-details";
import Image from "next/image";
import TechStack from "@/components/tech-stack";
import Stats from "@/components/stats";
import CurrentlyBuilding from "@/components/currently-building";
import FeaturedWork from "@/components/home/FeaturedWork";
export const CONNECTION = [
  {
    label: "GitHub",
    url: "https://github.com/PraveenKb777",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/praveen-balasubramaniam",
  },
  {
    label: "Email",
    url: "mailto:kbpraveen1999@gmail.com",
    isEmail: true,
  },
];


const EXPERIENCE = [
  {
    company: "Revature",
    start: "2024",
    end: "Present",
    job: "Associate Developer",
    desc: "Working with Brightspeed on a large-scale React Native application. Migrated React Native 0.68 → 0.76.6, redesigned 20+ screens, integrated 40+ APIs and improved application performance.",
  },

  {
    company: "Cendrol",
    start: "2023",
    end: "2024",
    job: "Full Stack Mobile Developer",
    desc: "Built Procurement and Partners mobile applications from scratch with React Native, Node.js, Express and PostgreSQL.",
  },
];

export default function Home() {
  return (
    <main className="py-20">
      <section>
        <div className="flex items-center gap-5">
          <Image
            src="/avatar.jpeg"
            alt="Praveen"
            width={72}
            height={72}
            className="rounded-full border border-zinc-700"
          />

          <div>
            <p className="text-green-400 font-medium">
              Available for opportunities
            </p>

            <h1 className="text-5xl font-bold leading-tight mt-2">
              React Native
              <br />
              Developer.
            </h1>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-xl text-zinc-400 leading-9">
          I build production-grade mobile applications with React Native,
          TypeScript and modern backend technologies. Currently contributing to
          Brightspeed while building scalable personal products powered by
          Cloudflare Workers.
        </p>

        <AvailableWork />

        <div className="mt-10 flex gap-4">
          <ColoredBtn
            href="/praveen-resume.pdf"
            download
            variant="colored"
            label="Download Resume"
          />

          <ColoredBtn href="/projects" variant="normal" label="View Projects" />
        </div>
      </section>

      <Stats />

      <FeaturedWork />

      <section>
        <SubHeading label="Experience" />

        {EXPERIENCE.map((item) => (
          <WorkDetails key={item.company} {...item} />
        ))}
      </section>
      <TechStack />

      <Stats />

      <CurrentlyBuilding />

      <section>
        <SubHeading label="Connect" />

        <div className="flex flex-wrap gap-4 mt-8">
          {CONNECTION.map((item) => (
            <CategoryTab key={item.label} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
