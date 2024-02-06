import HoverColorChange from "./hover-color-change";

export interface PProjectData {
  title: string;
  description: string;
  link?: string;
  category?: "react" | "next" | "react-native" | "vanilla";
}

export default function ProjectData({
  description,
  title,
  link,
  category,
}: PProjectData) {
  return (
    <div className="w-full mt-8">
      <a href={link ? link : undefined} target="_blank">
        <HoverColorChange label={title} />
      </a>
      <p className="mt-5 text-green-50 text-lg">{description}</p>
    </div>
  );
}
