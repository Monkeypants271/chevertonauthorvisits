import CTAButton from "./CTAButton";

export default function FinalCTA({
  title = "Bring Mark to Your School",
  body = "Every school is different, so pricing depends on location, schedule, format, and number of presentations. Request availability and Mark will follow up with details.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">{body}</p>
        <div className="mt-8">
          <CTAButton href="/request-pricing" variant="primary">
            Request Pricing &amp; Availability
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
