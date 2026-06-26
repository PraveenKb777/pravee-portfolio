export interface PCategory {
  url: string;
 label: string;
 isEmail?: boolean;
}

export default function CategoryTab({
  url,
  label,
  isEmail,
}: PCategory) {
  return (
    <a
      href={url}
      target={isEmail ? undefined : "_blank"}
      className="rounded-full border border-zinc-700 px-5 py-3 text-sm uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black"
    >
      {label}
    </a>
  );
}