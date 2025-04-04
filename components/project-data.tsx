import Link from "next/link";
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
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <HoverColorChange label={title} />
        </a>
      ) : (
        <HoverColorChange label={title} />
      )}
      <p className="mt-5 text-green-50 text-lg">{description}</p>
    </div>
  );
}
