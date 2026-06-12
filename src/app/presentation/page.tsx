import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Section, { SectionHeading } from "@/components/Section";
import FeatureCards from "@/components/FeatureCards";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "The Presentation | Failure, Bullying, Minecraft, and Growth Mindset",
  description:
    "Learn about Mark Cheverton's growth mindset author presentation for schools, built around 253 rejections, bullying, Minecraft, and the courage to keep trying.",
  openGraph: {
    title: "The Presentation: Failure Wasn't the End of the Story",
    description:
      "An honest, funny, age-appropriate story about rejection, discouragement, false starts, and the choice to keep trying anyway.",
    images: ["/author-visit-raised-hands.jpg"],
  },
};

const arc = [
  "I wanted to write a book for my son",
  "That book received 253 rejections",
  "I wrote three more books, and they failed too",
  "My son was bullied while playing Minecraft",
  "I wrote one more story to help him understand",
  "That story became the breakthrough",
];

const takeaways = [
  { title: "Failure is not the end" },
  { title: "Bullying is not your fault" },
  { title: "Trying hard things matters" },
  { title: "Creativity can help solve real problems" },
  { title: "Stories can help us understand ourselves" },
  { title: "Your story matters" },
];

export default function PresentationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-bright">
              The Presentation
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              The Presentation: Failure Wasn&apos;t the End of the Story
            </h1>
            <p className="mt-6 text-xl font-semibold text-white">
              A True Story About Failure, Bullying, Creativity, and Not Giving Up
            </p>
            <p className="mt-4 text-lg text-navy-100">
              Mark&apos;s presentation is not a lecture about success. It is an
              honest, funny, age-appropriate story about what happened before
              success: rejection, discouragement, false starts, and the choice to
              keep trying anyway.
            </p>
            <div className="mt-8">
              <CTAButton href="/request-pricing" variant="primary">
                Request Pricing &amp; Availability
              </CTAButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10">
            <Image
              src="/author-visit-raised-hands.jpg"
              alt="Mark Cheverton speaking to students during an author visit as several students raise their hands to ask questions."
              width={1200}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Arc of the Talk */}
      <Section tone="white" ariaLabel="The arc of the talk">
        <SectionHeading eyebrow="The Arc of the Talk" title="How the Story Unfolds" />
        <ol className="mt-10 space-y-4">
          {arc.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-cream p-5"
            >
              <span
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy-900 text-base font-bold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="text-lg font-medium text-navy-900">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Student Takeaways */}
      <Section tone="cream" ariaLabel="Student takeaways">
        <SectionHeading eyebrow="Student Takeaways" title="What Students Walk Away With" />
        <FeatureCards items={takeaways} />
      </Section>

      {/* Q&A */}
      <Section tone="white" ariaLabel="Question and answer time">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Q&amp;A"
            title="Plenty of Time for Student Questions"
            intro="Students ask about publishing, writing, Minecraft, favorite books, how stories are made, and what it feels like to become an author after years of failure. Mark prefers smaller groups whenever possible because more students get to participate."
          />
        </div>
      </Section>

      {/* CTA */}
      <FinalCTA
        title="Want students to hear this message?"
        body="Request availability and Mark will follow up with pricing, scheduling, and the details for your school."
      />
    </>
  );
}
