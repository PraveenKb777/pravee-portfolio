export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16">

      <div className="flex flex-col gap-5">

        <p className="text-3xl font-semibold">
          Let&apos;s build something amazing.
        </p>

        <p className="max-w-xl text-zinc-500">
          I&apos;m currently open to React Native, Mobile Engineer and
          Full Stack opportunities.
        </p>

        <div className="flex gap-5 pt-4">

          <a
            href="mailto:kbpraveen1999@gmail.com"
            className="text-zinc-400 hover:text-green-400"
          >
            Email
          </a>

          <a
            href="https://github.com/PraveenKb777"
            target="_blank"
            className="text-zinc-400 hover:text-green-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/praveen-balasubramaniam"
            target="_blank"
            className="text-zinc-400 hover:text-green-400"
          >
            LinkedIn
          </a>
        </div>

        <div className="pt-10 text-sm text-zinc-600">
          © {new Date().getFullYear()} Praveen K B
        </div>

      </div>
    </footer>
  );
}