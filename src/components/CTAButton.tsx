import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan-accent text-white hover:bg-[#107aa0] shadow-sm focus-visible:ring-offset-white",
  secondary:
    "bg-white text-navy-900 ring-1 ring-inset ring-navy-200 hover:bg-navy-50 focus-visible:ring-offset-white",
  ghost:
    "bg-white/10 text-white ring-1 ring-inset ring-white/40 hover:bg-white/20 focus-visible:ring-offset-navy-900",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export default function CTAButton({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
