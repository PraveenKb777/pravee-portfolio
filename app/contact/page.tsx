import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="py-24">

      {/* Hero */}

      <p className="font-mono uppercase tracking-[0.35em] text-green-400">
        CONTACT
      </p>

      <h1 className="mt-4 text-6xl font-black">
        Let's Connect.
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
        I'm always interested in discussing React Native, scalable backend
        systems, exciting products and great engineering teams.
        If you think I'd be a good fit, let's have a conversation.
      </p>

      {/* Terminal */}

      <section className="mt-20 overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d1117] shadow-2xl">

        {/* Terminal Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">

          <div className="flex gap-2">

            <div className="h-3 w-3 rounded-full bg-red-500" />

            <div className="h-3 w-3 rounded-full bg-yellow-500" />

            <div className="h-3 w-3 rounded-full bg-green-500" />

          </div>

          <span className="font-mono text-sm text-zinc-500">
            praveen@portfolio:~
          </span>

        </div>

        {/* Terminal Body */}

        <div className="space-y-6 p-8 font-mono text-[15px] leading-8">

          <TerminalCommand
            command="whoami"
            result="Praveen Balasubramaniam"
          />

          <TerminalCommand
            command="role"
            result="Associate Developer @ Revature"
          />

          <TerminalCommand
            command="currently_building"
            result="Brightspeed Account Management Platform"
          />

          <TerminalCommand
            command="experience"
            result="3+ Years"
          />

          <TerminalCommand
            command="primary_stack"
            result="React Native • TypeScript • Node.js • Cloudflare Workers"
          />

          <TerminalCommand
            command="availability"
            result="Available in 90 Days"
            green
          />

          <TerminalCommand
            command="expected_ctc"
            result="14–15 LPA (Negotiable)"
          />

          <TerminalCommand
            command="location"
            result="Chennai, Tamil Nadu, India"
          />

          <div>

            <p>
              <span className="text-green-400">$</span>{" "}
              contact
            </p>

            <div className="ml-5 mt-2 space-y-2">

              <a
                href="mailto:kbpraveen1999@gmail.com"
                className="block text-green-400 hover:underline"
              >
                📧 kbpraveen1999@gmail.com
              </a>

              <a
                href="tel:+918838725704"
                className="block text-green-400 hover:underline"
              >
                📱 +91 88387 25704
              </a>

            </div>

          </div>

          <div className="flex items-center">

            <span className="text-green-400">$</span>

            <span className="ml-2 animate-pulse text-green-400">
              █
            </span>

          </div>

        </div>

      </section>

      {/* Social */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Connect Online
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <SocialCard
            href="https://github.com/PraveenKb777"
            title="GitHub"
            subtitle="Projects & Open Source"
            icon={<Github size={30} />}
          />

          <SocialCard
            href="https://linkedin.com/in/praveen-balasubramaniam"
            title="LinkedIn"
            subtitle="Professional Network"
            icon={<Linkedin size={30} />}
          />

          <SocialCard
            href="mailto:kbpraveen1999@gmail.com"
            title="Email"
            subtitle="Usually replies within 12 hours"
            icon={<Mail size={30} />}
          />

        </div>

      </section>

      {/* CTA */}

      <section className="mt-24 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-12">

        <h2 className="text-4xl font-bold">
          Ready to build something amazing?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm passionate about building production-grade mobile applications,
          designing scalable backend systems and delivering delightful user
          experiences. If that sounds like what you're looking for, let's talk.
        </p>

        <a
          href="mailto:kbpraveen1999@gmail.com"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Say Hello

          <ArrowUpRight size={18} />
        </a>

      </section>

    </main>
  );
}

interface TerminalProps {
  command: string;
  result: string;
  green?: boolean;
}

function TerminalCommand({
  command,
  result,
  green,
}: TerminalProps) {
  return (
    <div>
      <p>
        <span className="text-green-400">$</span>{" "}
        {command}
      </p>

      <p
        className={`ml-5 ${
          green ? "text-green-400" : "text-zinc-300"
        }`}
      >
        {result}
      </p>
    </div>
  );
}

interface SocialCardProps {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

function SocialCard({
  href,
  title,
  subtitle,
  icon,
}: SocialCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-500"
    >
      <div className="text-green-400">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-zinc-500">
        {subtitle}
      </p>

      <ArrowUpRight className="mt-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}