"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="shrink-0">
          <div>
            <p className="text-xl font-bold tracking-tight">
              Praveen K B
            </p>

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
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/praveen-resume.pdf"
            download
            className="rounded-full border border-zinc-700 p-2 transition hover:border-green-500 hover:text-green-400"
          >
            <FileText size={18} />
          </a>

          <a
            href="https://github.com/PraveenKb777"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 p-2 transition hover:border-green-500 hover:text-green-400"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/praveen-balasubramaniam"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 p-2 transition hover:border-green-500 hover:text-green-400"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-zinc-700 p-2 transition hover:border-green-500 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      <div
        className={`overflow-hidden border-t border-zinc-900 bg-black/95 transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-6 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 transition ${
                pathname === link.href
                  ? "bg-green-500/10 text-green-400"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6 flex items-center gap-3">
            <a
              href="/praveen-resume.pdf"
              download
              className="rounded-full border border-zinc-700 p-3 transition hover:border-green-500 hover:text-green-400"
            >
              <FileText size={18} />
            </a>

            <a
              href="https://github.com/PraveenKb777"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 p-3 transition hover:border-green-500 hover:text-green-400"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/praveen-balasubramaniam"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 p-3 transition hover:border-green-500 hover:text-green-400"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}