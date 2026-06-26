"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl">
      <div className="relative flex items-center justify-between border-b border-zinc-800 py-6">
        {/* Logo */}

        <Link href="/">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Praveen K B
            </h1>

            <p className="text-sm text-zinc-500">
              React Native Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-green-400"
                  : "text-zinc-400 hover:text-white"
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

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Dropdown */}

        {open && (
          <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl md:hidden">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 transition ${
                    pathname === link.href
                      ? "bg-green-500/10 text-green-400"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  {link.title}
                </Link>
              ))}

              <a
                href="/praveen-resume.pdf"
                download
                className="mt-3 rounded-xl bg-green-500 px-4 py-3 text-center font-medium text-black transition hover:bg-green-400"
              >
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}