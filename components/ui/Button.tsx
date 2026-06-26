import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: boolean;
}

export default function Button({
  href,
  children,
  primary,
  download,
}: Props) {
  return (
    <Link
      href={href}
      download={download}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300

      ${
        primary
          ? "bg-green-500 text-black hover:scale-105"
          : "border border-zinc-700 hover:border-green-500"
      }`}
    >
      {children}

      <ArrowUpRight
        size={18}
        className="transition group-hover:translate-x-1"
      />
    </Link>
  );
}