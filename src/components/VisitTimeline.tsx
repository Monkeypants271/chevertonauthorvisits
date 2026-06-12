export type TimelineStep = {
  title: string;
  body: string;
};

export default function VisitTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="mt-10 space-y-6">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative rounded-2xl border border-navy-100 bg-white p-6 pl-16 shadow-sm"
        >
          <span
            className="absolute left-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-accent text-sm font-bold text-white"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <h3 className="text-lg font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-2 text-ink-soft">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
