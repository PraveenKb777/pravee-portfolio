import React from "react";
import HoverColorChange from "./hover-color-change";

export interface IWorkDetailsProps {
  start?: string;
  end?: string;
  job: string;
  company: string;
  desc: string;
  url?: string;
}
export default function WorkDetails({
  company,
  desc,
  job,
  end,
  start,
  url,
}: IWorkDetailsProps) {
  return (
    <div className="text-xl flex justify-start mt-8 w-full ">
      <div className="mr-12 w-[400px] ">
        {start} - {end}
      </div>
      <div className="max-w-[400px]">
        <h2>{job}</h2>
        <HoverColorChange label={company} url={url} />
        <p>{desc}</p>
      </div>
    </div>
  );
}
