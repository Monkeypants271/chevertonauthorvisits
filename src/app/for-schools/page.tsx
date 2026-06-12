import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Section, { SectionHeading } from "@/components/Section";
import ImageTextSection from "@/components/ImageTextSection";
import FinalCTA from "@/components/FinalCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Schools | Author Visit Logistics and Booking Information",
  description:
    "Plan an author visit with Mark Cheverton. Learn about visit structure, grade-level presentations, bookmarks, book orders, student lunch, signing, virtual visits, and BOCES Arts-in-Education.",
};

const beforeVisit = [
  "Mark sends bookmarks 2–3 weeks in advance.",
  "Teachers can hand bookmarks to students to build excitement.",
  "Schools receive an optional book order form.",
  "Students may order books ahead of time for autographing.",
  "Students may also bring books they already own.",
  "Book sales do not affect the visit.",
];

const schedule = [
  { label: "Morning", text: "Grade-level presentations" },
  { label: "Midday", text: "Lunch with selected students" },
  { label: "Afternoon", text: "Book autographing" },
  { label: "Optional", text: "Additional sessions depending on school schedule" },
];

const locations = ["Library", "Cafeteria", "Auditorium", "Large classroom", "Virtual classroom"];

const techNeeds = [
  "Projector or large display",
  "Screen or smartboard",
  "Audio/microphone for large groups",
  "Laptop connection or ability to run slides",
  "Internet access if needed",
  "Table for books/signing",
];

export default function ForSchoolsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-bright">
            For Schools
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Planning an Author Visit with Mark Cheverton
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-navy-100">
            Mark&apos;s author visits are designed to be simple for schools to
            host. He typically spends a full day at the school, meeting with
            grade-level groups, answering student questions, joining selected
            students for lunch, and autographing books after lunch.
          </p>
        </div>
      </section>

      {/* Before the Visit */}
      <Section tone="white" ariaLabel="Before the visit">
        <SectionHeading eyebrow="Before the Visit" title="Building Excitement Ahead of Time" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {beforeVisit.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-none text-growth"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Visit-Day Schedule */}
      <Section tone="cream" ariaLabel="Visit-day schedule">
        <SectionHeading eyebrow="Visit-Day Schedule" title="A Flexible Day That Fits Your Schedule" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schedule.map((slot) => (
            <li key={slot.label} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-accent">
                {slot.label}
              </p>
              <p className="mt-2 text-lg font-medium text-navy-900">{slot.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg text-ink-soft">
          Each presentation is usually around 45 minutes but can be adjusted to
          fit the school&apos;s schedule.
        </p>
      </Section>

      {/* Group Size */}
      <Section tone="white" ariaLabel="Group size">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Group Size"
            title="Smaller Groups, More Participation"
            intro="Mark can speak to larger groups, but he prefers grade-level groups of about 30–50 students when possible. Smaller groups give more students a chance to ask questions and make the visit feel more personal."
          />
        </div>
      </Section>

      {/* Locations + Technology */}
      <Section tone="cream" ariaLabel="Locations and technology">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Locations" title="Where Mark Can Present" />
            <ul className="mt-6 flex flex-wrap gap-3">
              {locations.map((loc) => (
                <li
                  key={loc}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 ring-1 ring-navy-100"
                >
                  {loc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Technology Needs" title="A Simple Checklist" />
            <ul className="mt-6 space-y-3">
              {techNeeds.map((need) => (
                <li key={need} className="flex items-start gap-3 text-lg text-ink">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-cyan-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {need}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* In-Person and Virtual Visits */}
      <Section tone="white" ariaLabel="In-person and virtual visits">
        <ImageTextSection
          src="/author-visit-virtual.jpg"
          alt="Students in a classroom participating in a virtual author visit with Mark Cheverton projected on a screen."
          eyebrow="In-Person and Virtual Visits"
          title="Flexible Formats for Every School"
        >
          <p>
            Mark offers in-person visits and virtual visits. Virtual visits work
            well for classrooms, library programs, and schools outside the normal
            travel area.
          </p>
        </ImageTextSection>
      </Section>

      {/* BOCES + Pricing */}
      <Section tone="cream" ariaLabel="BOCES and pricing">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy-900">BOCES Arts-in-Education</h2>
            <p className="mt-3 text-lg text-ink-soft">{site.boces}</p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy-900">Pricing</h2>
            <p className="mt-3 text-lg text-ink-soft">
              Pricing depends on location, format, schedule, and number of
              presentations. Schools can request pricing and availability through
              the contact form.
            </p>
            <div className="mt-6">
              <CTAButton href="/request-pricing" variant="primary">
                Request Pricing &amp; Availability
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
