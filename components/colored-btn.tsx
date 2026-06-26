import { AnchorHTMLAttributes } from "react";

const styles = {
  colored:
    "rounded-xl bg-green-500 px-7 py-4 font-semibold text-black transition-all hover:scale-[1.02] hover:bg-green-400",

  normal:
    "rounded-xl border border-zinc-700 px-7 py-4 font-semibold text-white transition-all hover:border-green-500 hover:bg-zinc-900",
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: keyof typeof styles;
  label: string;
}

export default function ColoredBtn({
  variant,
  label,
  ...props
}: Props) {
  return (
    <a
      {...props}
      className={styles[variant]}
    >
      {label}
    </a>
  );
}