export default function PullQuote({ children }: { children: string }) {
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <blockquote className="text-2xl font-bold leading-snug text-navy-900 sm:text-3xl">
        <span className="text-cyan-accent" aria-hidden="true">
          &ldquo;
        </span>
        {children}
        <span className="text-cyan-accent" aria-hidden="true">
          &rdquo;
        </span>
      </blockquote>
    </figure>
  );
}
