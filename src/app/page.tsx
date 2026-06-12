import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import CredibilityStrip from "@/components/CredibilityStrip";
import Section, { SectionHeading } from "@/components/Section";
import FeatureCards from "@/components/FeatureCards";
import VisitTimeline from "@/components/VisitTimeline";
import TestimonialCards from "@/components/TestimonialCards";
import PullQuote from "@/components/PullQuote";
import FinalCTA from "@/components/FinalCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Growth Mindset Author Visits for Schools | Mark Cheverton",
  description:
    "New York Times bestselling author Mark Cheverton brings growth mindset author visits to elementary and middle schools with a true story about failure, bullying, Minecraft, and persistence.",
  openGraph: {
    title: "Growth Mindset Author Visits for Schools | Mark Cheverton",
    description:
      "A true story about 253 rejections, bullying, Minecraft, and the courage to keep trying — brought to elementary and middle schools.",
    images: ["/author-visit-hero.jpg"],
  },
};

const studentExperience = [
  {
    title: "They laugh and participate",
    body: "Humor and audience interaction keep students engaged from the first few minutes.",
  },
  {
    title: "They hear real failure",
    body: "Mark shares the rejections and false starts that came before any success.",
  },
  {
    title: "They leave encouraged",
    body: "Students learn that failure is not proof they should quit. It can be part of how they grow.",
  },
];

const perfectFor = [
  "Growth mindset assemblies",
  "Author visits",
  "Library programs",
  "Literacy events",
  "Anti-bullying programs",
  "Reluctant reader outreach",
  "Young Author Days",
  "Minecraft-loving readers",
];

const visitSteps = [
  {
    title: "Before the Visit",
    body: "Mark sends bookmarks for teachers to share with students, helping build excitement around the presentation and reading. Schools also receive an optional book order form so students can order books ahead of time for autographing. Students may also bring books they already own.",
  },
  {
    title: "Morning Presentations",
    body: "The school has Mark for the full day. Through the morning, up until lunch, he gives multiple presentations to grade-level groups — from grade 3 through middle school — in the library, cafeteria, or auditorium. Mark prefers smaller groups because more students get to ask questions and the visit feels more personal, but he can accommodate any group size and any number of presentations the schedule calls for. Each presentation runs about 45 minutes and can be adjusted to fit your day.",
  },
  {
    title: "Lunch with Students",
    body: "When possible, Mark has lunch with a small group of students selected by the school. This gives students a more personal chance to ask questions about books, writing, Minecraft, publishing, and creativity.",
  },
  {
    title: "Book Signing",
    body: "After lunch, Mark autographs pre-ordered books and books students already own. Book sales are optional and never the focus of the visit. The heart of the day is the time spent with students.",
  },
];

const whatMarkOffers = [
  "Full-day author visits",
  "Multiple presentations for smaller grade-level groups",
  "Book order form and custom bookmarks sent 2–3 weeks in advance",
  "Lunch with selected students chosen by the school",
  "Book autographing after lunch",
  "Q&A with students",
  "Virtual visits available",
  "BOCES Arts-in-Education registration",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Author Visits That Turn Failure Into Real Growth
            </h1>
            <p className="mt-6 text-lg text-navy-100">
              New York Times bestselling author Mark Cheverton shares the true
              story of 253 rejections, seven years of failure, a son who was
              bullied, and the Minecraft-inspired book that changed everything.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/request-pricing" variant="primary">
                Request Pricing &amp; Availability
              </CTAButton>
              <CTAButton href="/presentation" variant="ghost">
                See the Presentation
              </CTAButton>
            </div>
            <p className="mt-6 text-sm text-navy-200">
              For elementary and middle schools, libraries, literacy programs,
              and growth mindset events.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10">
            <Image
              src="/author-visit-hero.jpg"
              alt="Mark Cheverton and a teacher present at the front of a school gym to seated students, beside a screen reading “Mark Cheverton, Author” with a Minecraft creeper."
              width={1348}
              height={941}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Quick Credibility Strip */}
      <CredibilityStrip />

      {/* 3. What Students Experience */}
      <Section tone="white" ariaLabel="What students experience">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="What Students Experience"
            title="An honest story students remember"
            intro="Students laugh, participate, ask questions, and hear an honest, age-appropriate story about rejection, false starts, bullying, perseverance, and learning from failure."
          />
          <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-navy-100">
            <Image
              src="/author-visit-students-1.jpg"
              alt="Mark Cheverton presents in a school library as students raise their hands, beside a screen reading “Don’t let other people’s no’s define you.”"
              width={1100}
              height={1100}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <FeatureCards items={studentExperience} />
      </Section>

      {/* 4. The Story Behind the Visit */}
      <Section tone="cream" ariaLabel="The story behind the visit">
        <SectionHeading
          eyebrow="The Story Behind the Visit"
          title="253 Rejections. Seven Years of Failure. One Story That Finally Worked."
        />
        <div className="mt-6 grid gap-6 text-lg text-ink-soft lg:grid-cols-2">
          <p>
            When Mark first started writing, he did not know anything about
            publishing. He wrote a book for his son, certain it would connect
            with readers. Instead, it received 253 rejections. Rather than quit,
            Mark wrote three more books over the next seven years. They failed
            too.
          </p>
          <p>
            Then his son was bullied while playing Minecraft and believed it was
            his fault. Mark wrote one more story, set inside the world of
            Minecraft and starring his son&apos;s Minecraft character,
            Gameknight999, to help him understand that bullying was not his
            fault. That story became the breakthrough that launched Mark&apos;s
            career.
          </p>
        </div>
        <div className="mt-12">
          <PullQuote>If I give up, I guarantee the outcome.</PullQuote>
        </div>
      </Section>

      {/* 5. Perfect For */}
      <Section tone="white" ariaLabel="Perfect for school events like these">
        <SectionHeading eyebrow="Perfect For" title="Perfect For School Events Like These" />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {perfectFor.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-navy-100 bg-cream px-4 py-5 text-center text-sm font-semibold text-navy-900"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. What a Typical Visit Looks Like */}
      <Section tone="cream" ariaLabel="What a typical visit looks like">
        <SectionHeading
          eyebrow="A Typical Day"
          title="What a Typical Visit Looks Like"
          intro="Mark's visits are designed to be easy for schools to host and meaningful for students."
        />
        <VisitTimeline steps={visitSteps} />
      </Section>

      {/* 7. What Mark Offers */}
      <Section tone="white" ariaLabel="What Mark offers">
        <SectionHeading eyebrow="What Mark Offers" title="Everything a School Needs to Host a Visit" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {whatMarkOffers.map((item) => (
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
        <p className="mt-8 max-w-3xl rounded-xl bg-cream p-5 text-ink-soft">
          Book sales are optional and never the focus of the visit. Mark is there
          to talk with kids, answer their questions, and help them see failure
          differently.
        </p>
      </Section>

      {/* 8. Testimonials */}
      <Section tone="cream" ariaLabel="What schools say">
        <SectionHeading eyebrow="Testimonials" title="What Schools Say" />
        <TestimonialCards />
      </Section>

      {/* 9. Student Stories CTA */}
      <Section tone="white" ariaLabel="Student stories">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Give Students an Authentic Audience for Their Writing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">
            After the visit, students are invited to write and submit their own
            stories. All stories sent to Mark will be posted to his Fan Fiction
            page for other kids to read.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={site.mainSite} variant="primary">
              Explore Student Stories
            </CTAButton>
            <CTAButton href="/teacher-resources" variant="ghost">
              Teacher Resources
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* 10. Final CTA */}
      <FinalCTA />
    </>
  );
}
