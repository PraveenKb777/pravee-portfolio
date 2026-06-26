interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-green-400">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {title}
      </h2>

    </div>
  );
}