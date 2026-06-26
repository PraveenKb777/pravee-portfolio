interface Props {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-green-500">

      <h3 className="text-3xl font-bold">
        {value}
      </h3>

      <p className="mt-2 text-zinc-500">
        {label}
      </p>

    </div>
  );
}