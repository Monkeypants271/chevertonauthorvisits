import type { AnchorHTMLAttributes, ReactNode } from "react";
import { newTabProps } from "@/lib/links";

type Props = {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

// An off-site link. Always opens in a new tab so visitors keep
// chevertonauthorvisits.com open behind them.
export default function ExternalLink({ href, children, ...rest }: Props) {
  return (
    <a href={href} {...newTabProps} {...rest}>
      {children}
    </a>
  );
}
