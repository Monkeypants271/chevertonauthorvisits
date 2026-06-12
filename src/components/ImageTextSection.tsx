import Image from "next/image";
import type { ReactNode } from "react";

export default function ImageTextSection({
  src,
  alt,
  eyebrow,
  title,
  children,
  reverse = false,
  priority = false,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  priority?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className={reverse ? "md:order-2" : ""}>
        <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-navy-100">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-lg text-ink-soft">{children}</div>
      </div>
    </div>
  );
}
