const DUMMY = "¯_(◉‿◉)_/¯".split("");

export default function Footer() {
  return (
    <footer className="self-start text-lg">
      <div className="my-6">
        {DUMMY.map((e, i) => (
          <span
            className="hover:text-green-400 transition-all cursor-default"
            key={i + e}
          >
            {e}
          </span>
        ))}
      </div>
      &copy; {new Date().getFullYear()} developed by praveen
      <div className="text-gray-500">VER 1.0.3</div>
    </footer>
  );
}
