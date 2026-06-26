interface Props {
  title: string;

  children: React.ReactNode;
}

export default function CaseSection({
  title,

  children,
}: Props) {
  return (
    <section className="mt-24">
      <h2 className="text-4xl font-bold">{title}</h2>

      <div className="mt-8 text-lg leading-9 text-zinc-400">{children}</div>
    </section>
  );
}
