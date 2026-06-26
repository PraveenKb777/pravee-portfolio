interface Props {
  children: React.ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <div className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-green-500 hover:text-white">
      {children}
    </div>
  );
}