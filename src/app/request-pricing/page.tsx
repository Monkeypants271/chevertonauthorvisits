import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request Pricing & Availability | Mark Cheverton Author Visits",
  description:
    "Request pricing and availability for a Mark Cheverton author visit at your school, library, literacy program, or growth mindset event.",
};

export default function RequestPricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Request Pricing &amp; Availability
          </h1>
          <p className="mt-6 text-lg text-navy-100">
            Mark offers in-person and virtual author visits for schools,
            libraries, literacy programs, and growth mindset events. Share a few
            details about your event, and Mark will follow up with availability,
            pricing, and next steps.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-10">
            <ContactForm />
          </div>

          <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-navy-900">
              Where Mark Travels
            </h2>
            <p className="mt-3 text-ink-soft">
              Mark has done school visits from New York City to Buffalo to
              Boston, but he is based near Clifton Park, NY. Travel within the
              Capital Region is simple to arrange. For schools farther away,
              travel costs may be included in the final quote depending on
              distance, schedule, and whether multiple schools book during the
              same trip.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
