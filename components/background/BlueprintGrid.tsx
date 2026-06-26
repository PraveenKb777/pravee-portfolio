export default function BlueprintGrid() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">

        {/* vertical */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* horizontal */}

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,197,94,.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* animated highlight */}

        <div className="grid-scan absolute inset-0" />

      </div>
    </>
  );
}