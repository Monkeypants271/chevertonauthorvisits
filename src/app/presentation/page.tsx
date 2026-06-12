import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Section, { SectionHeading } from "@/components/Section";
import PullQuote from "@/components/PullQuote";
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

const storyThemes = [
  {
    title: "Failure",
    body: "253 rejections and seven years of trying before success.",
  },
  {
    title: "Courage",
    body: "Writing one more story when quitting would have been easier.",
  },
  {
    title: "Growth",
    body: "Learning that failure is not the end. It is information.",
  },
  {
    title: "Empathy",
    body: "Understanding that being bullied is never the victim's fault.",
  },
  {
    title: "Persistence",
    body: "The simple message students remember: If you quit, you guarantee the outcome.",
  },
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

      {/* The Story */}
      <Section tone="white" ariaLabel="The story Mark tells">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="The Presentation"
            title="253 Rejections. One More Try."
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Mark Cheverton&apos;s author visit is a funny, honest, and deeply
              personal growth mindset presentation about failure, persistence,
              and the power of stories.
            </p>
            <p>
              Mark begins with the truth students rarely hear from successful
              authors: before his books reached readers around the world, he
              spent seven years writing four books that no one wanted to publish.
              His first book alone received 253 rejections.
            </p>
            <p>
              Then, ten years ago, Mark&apos;s son was bullied while playing
              Minecraft and believed it was his fault. Mark tried to explain that
              it wasn&apos;t, but the words didn&apos;t reach him. So Mark did
              what he knew how to do. He wrote one more story.
            </p>
            <p>
              That Minecraft-inspired story helped his son understand the truth:
              being bullied was not his fault. It also became the breakthrough
              that launched Mark&apos;s bestselling author career.
            </p>
            <p>
              Students leave the presentation with a message they can carry into
              writing, school, friendships, and life:
            </p>
          </div>
          <div className="mt-10">
            <PullQuote>If you give up, you guarantee the outcome.</PullQuote>
          </div>
        </div>
      </Section>

      {/* Students Hear a Story About */}
      <Section tone="cream" ariaLabel="Students hear a story about">
        <SectionHeading eyebrow="The Message" title="Students Hear a Story About" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {storyThemes.map((t) => (
            <li
              key={t.title}
              className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-cyan-accent">{t.title}</h3>
              <p className="mt-2 text-ink-soft">{t.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Q&A */}
      <Section tone="white" ariaLabel="Question and answer time">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Q&amp;A"
            title="Plenty of Time for Student Questions"
            intro="Students ask about publishing, writing, Minecraft, favorite books, how stories are made, and what it feels like to become an author after years of failure. Mark prefers smaller groups whenever possible because more students get to participate."
          />
          <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-navy-100">
            <Image
              src="/author-visit-students-2.jpg"
              alt="Mark Cheverton gestures during a school presentation while students raise their hands, beside a screen reading “What did I learn from this experience?”"
              width={1100}
              height={1100}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
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
