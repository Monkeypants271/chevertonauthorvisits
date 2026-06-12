import type { ReactNode } from "react";

export type Feature = {
  title: string;
  body?: ReactNode;
};

export default function FeatureCards({
  items,
  columns = 3,
}: {
  items: Feature[];
  columns?: 2 | 3;
}) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`mt-10 grid gap-6 ${cols}`}>
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
          {item.body && <p className="mt-2 text-ink-soft">{item.body}</p>}
        </li>
      ))}
    </ul>
  );
}
