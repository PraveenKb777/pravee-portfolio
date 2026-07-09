import Image from "next/image";
import ColoredBtn from "../colored-btn";

export default function Hero() {
  return (
    <section className="relative">
      {/* Availability */}

      <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

        <span className="text-sm font-medium text-green-400">
          Available in 90 Days
        </span>
      </div>

      {/* Hero */}

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
            PRAVEEN BALASUBRAMANIAM
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[1.05] md:text-7xl">
            Building
            <span className="block text-green-400">React Native</span>
            Applications.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
            Associate Developer at <span className="text-white">Revature</span>,
            currently contributing to the Brightspeed Account Management
            platform. Passionate about building high-performance mobile
            applications with React Native, TypeScript and modern backend
            technologies.
          </p>

          {/* Highlight */}

          <div className="mt-10 flex flex-wrap gap-6">
            <div>
              <h2 className="text-5xl font-black text-green-400">250K+</h2>

              <p className="mt-2 text-zinc-500">App Downloads</p>
            </div>

            <div className="h-20 w-px bg-zinc-800" />

            <div>
              <h2 className="text-5xl font-black text-green-400">40+</h2>

              <p className="mt-2 text-zinc-500">APIs Integrated</p>
            </div>

            <div className="h-20 w-px bg-zinc-800" />

            <div>
              <h2 className="text-5xl font-black text-green-400">3+</h2>

              <p className="mt-2 text-zinc-500">Years Experience</p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">
            <ColoredBtn
              href="/praveen-resume.pdf"
              download
              variant="colored"
              label="Download Resume"
            />

            <ColoredBtn
              href="/work"
              variant="normal"
              label="View Projects"
            />
          </div>
        </div>

        {/* Avatar */}

        <div className="relative self-center lg:self-start">
          <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl" />

          <Image
            src="/avatar.jpeg"
            alt="Praveen"
            width={260}
            height={260}
            priority
            className="relative rounded-full border border-zinc-700 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
