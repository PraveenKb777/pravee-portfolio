import AvailableWork from "@/components/avilable-work";
import CategoryTab, { PCategory } from "@/components/category-tab";
import ColoredBtn from "@/components/colored-btn";
import MouseTracker from "@/components/mouse-tracker";
import ProjectData, { PProjectData } from "@/components/project-data";
import RandomLetters from "@/components/random-letters";
import SubHeading from "@/components/sub-heading";
import WorkDetails, { IWorkDetailsProps } from "@/components/work-details";
import Image from "next/image";

export const CONNECTION: PCategory[] = [
  { label: "GITHUB", url: "https://github.com/PraveenKb777" },
  {
    label: "LINKEDIN",
    url: "https://www.linkedin.com/in/praveen-balasubramaniam/",
  },
  { label: "EMAIL", url: "mailto:kbpraveen1999@gmail.com", isEmail: true },
];

export const PROJECTS: PProjectData[] = [
  {
    description:
      "An interactive Board where you can create manage organization and collaborate real-time with your team",
    title: "MIRO-CLONE",
    link: "https://board.pkbmg.shop",
  },
  {
    description:
      "A Simple Blog website where you can add, comment, and share your thoughts to world. ",
    title: "Blog for everyone",
    link: "https://blog.pkbmg.shop",
  },
  {
    description:
      "A portfolio website for my friend. designed by Rich and developed by Myself",
    title: "Rich-PortFolio",
    link: "https://rich.pkbmg.shop",
  },
  {
    description:
      "An App which can collect wifi and sensors at particular point which is developed for IPS team in Cendrol",
    title: "Wifi-Finger-Print-Scanner",
    link: "https://personal.pkbmg.shop/WIFI%20Fingerprinting.apk",
  },
  {
    description:
      "An App which can generate construction and interior leads from brokers and real estate agents.Developed for CENDROL as per their requirement",
    title: "Partner app",
    link: "https://play.google.com/store/apps/details?id=com.cendrol.procurement",
  },
  {
    description:
      "App which will help the site engineers for ordering materials and handling miscellaneous expense from site and accepting order materials.Developed for CENDROL as per their requirement.",
    title: "Cendrol Procure",
    link: "https://play.google.com/store/apps/details?id=com.cendrolpartner",
  },
];

const WORK_EXPERIENCE: IWorkDetailsProps[] = [
  {
    company: "CENDROL IT",
    start: "2023",
    end: "PRESENT",
    desc: "Developed a design system for SoftNest with a focus on accessibility and user-friendliness.",
    job: "SOFTWARE DEVELOPER",
  },
];

export default function Home() {
  return (
    <>
      <main
        style={{ transform: "perspective(1200px)" }}
        className="relative flex justify-start py-12 flex-col"
      >
        <div className="py-12 flex justify-start items-center">
          <div className="bg-white rounded-full h-12 w-12 overflow-hidden">
            <Image src={"/avatar.jpeg"} alt="Praveen" height={48} width={48} />
          </div>
          <div className="ml-2">
            <RandomLetters
              text="PRAVEEN BALASUBRAMANIAM"
              className="text-xl text-green-400"
            />
            <RandomLetters text="Frontend Developer" />
          </div>
        </div>
        <h1 className="text-green-400 text-4xl font-bold">
          I BUILD ACCESSIBLE, INCLUSIVE PRODUCTS
        </h1>
        <p className="text-xl mt-5">
          I&apos;m a passionate and self-driven developer committed to creating
          web applications with focus on user-friendliness.
        </p>
        <AvailableWork />
        <SubHeading label="CONNECT" />
        <div className="flex flex-wrap my-8">
          {CONNECTION.map((e) => {
            return <CategoryTab {...e} key={e.url} />;
          })}
        </div>
        <SubHeading label="PROJECTS" />
        {PROJECTS.slice(0, 3).map((e) => (
          <ProjectData {...e} key={e.description} />
        ))}
        <div className="h-12" />
        <SubHeading label="WORK" />
        {WORK_EXPERIENCE.map((e) => (
          <WorkDetails {...e} key={e.company} />
        ))}
        <div className="flex mt-8">
          <ColoredBtn variant="normal" label="Download resume" />
          <div className="w-8" />
          <ColoredBtn
            href="/get-in-touch"
            variant="colored"
            label="Get in Touch"
          />
        </div>
      </main>
    </>
  );
}
