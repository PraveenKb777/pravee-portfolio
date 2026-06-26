import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`mx-auto w-full max-w-5xl px-6 md:px-10 ${className}`}
    >
      {children}
    </section>
  );
}