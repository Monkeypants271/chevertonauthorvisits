export type Testimonial = {
  quote: string;
  attribution: string;
};

// Placeholder testimonials from the spec — edit attribution/quotes as real data arrives.
const defaultTestimonials: Testimonial[] = [
  {
    quote: "One of the best author visits we've ever had.",
    attribution: "Librarian, Rosendale Elementary",
  },
  {
    quote: "Engaging, hilarious, and grounded in a real growth-mindset message.",
    attribution: "Librarian, Maple Ave Middle",
  },
  {
    quote: "The kids were still talking about it weeks later.",
    attribution: "Librarian, Craig Elementary",
  },
];

export default function TestimonialCards({
  items = defaultTestimonials,
}: {
  items?: Testimonial[];
}) {
  return (
    <ul className="mt-10 grid gap-6 md:grid-cols-3">
      {items.map((t) => (
        <li
          key={t.attribution}
          className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100"
        >
          <blockquote className="flex-1 text-lg font-medium text-navy-900">
            <span aria-hidden="true" className="text-cyan-accent">
              &ldquo;
            </span>
            {t.quote}
            <span aria-hidden="true" className="text-cyan-accent">
              &rdquo;
            </span>
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-ink-soft">— {t.attribution}</p>
        </li>
      ))}
    </ul>
  );
}
