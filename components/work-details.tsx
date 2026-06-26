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
  job,
  start,
  end,
  desc,
}: IWorkDetailsProps) {
  return (
    <div className="relative mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition-all duration-300 hover:border-green-500/50">

      <div className="absolute left-0 top-8 h-14 w-1 rounded-r-full bg-green-500" />

      <div className="ml-4">

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-2xl font-semibold">
              {job}
            </h2>

            <HoverColorChange label={company} />

          </div>

          <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400">
            {start} — {end}
          </span>

        </div>

        <p className="mt-6 leading-8 text-zinc-400">
          {desc}
        </p>

      </div>

    </div>
  );
}