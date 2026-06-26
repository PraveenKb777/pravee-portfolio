"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/get-in-touch",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg">
      <div className="flex items-center justify-between border-b border-zinc-800 py-6">

        <Link href="/">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Praveen K B
            </h1>

            <p className="font-mono text-sm text-zinc-500">
              React Native Developer
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-8">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all hover:text-green-400 ${
                pathname === link.href
                  ? "text-green-400"
                  : "text-zinc-400"
              }`}
            >
              {link.title}
            </Link>
          ))}

          <a
            href="/praveen-resume.pdf"
            download
            className="rounded-full border border-green-500 px-5 py-2 transition hover:bg-green-500 hover:text-black"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}