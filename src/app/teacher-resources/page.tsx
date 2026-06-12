import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import ExternalLink from "@/components/ExternalLink";
import Section, { SectionHeading } from "@/components/Section";
import FinalCTA from "@/components/FinalCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teacher Resources | Extend the Author Visit",
  description:
    "Free teacher resources from Mark Cheverton, including writing prompts, companion guides, reluctant-writer strategies, and student story opportunities after an author visit.",
};

// These all live on Mark's main site / BookFunnel — we summarize and link out
// rather than duplicate them. (Off-site links open in a new tab via ExternalLink.)
const ELA_HUB = "https://books.bookfunnel.com/ELAresources";
const FOR_EDUCATORS = `${site.mainSite}/for-educators`;

const writingTools = [
  {
    title: "365 Writing Prompts",
    description:
      "A full year of quick daily prompts to build a consistent 15-minute writing habit.",
    href: ELA_HUB,
  },
  {
    title: "5 Strategies for Reluctant Writers",
    description:
      "Proven ways to get a hesitant writer putting words on the page — and eventually enjoying it.",
    href: "https://dl.bookfunnel.com/r5jtl2b948",
  },
  {
    title: "How to Give Constructive Feedback",
    description:
      "Ten strategies for responding to a child's writing without crushing their motivation.",
    href: "https://dl.bookfunnel.com/ml5ysytccc",
  },
  {
    title: "11 Strategies to Finish Long Assignments",
    description:
      "Practical ways to help students push through long, challenging assignments to the finish.",
    href: "https://dl.bookfunnel.com/3dff13u88b",
  },
  {
    title: "Linking Fan Fiction to Reading",
    description:
      "Fifteen strategies for using fan fiction and creative writing to strengthen reading and writing.",
    href: "https://dl.bookfunnel.com/q4steblaey",
  },
  {
    title: "Creative Writing for Homeschool",
    description:
      "How to weave creative writing into a homeschool routine without adding a whole new program.",
    href: ELA_HUB,
  },
];

const companionGuides = [
  {
    title: "Invasion of the Overworld",
    label: "Book One · ELA Companion Guide",
    href: "https://dl.bookfunnel.com/o8nfliewox",
    image: "/companion-guide-1.jpg",
  },
  {
    title: "Battle for the Nether",
    label: "Book Two · ELA Companion Guide",
    href: "https://dl.bookfunnel.com/gd6moashpf",
    image: "/companion-guide-2.jpg",
  },
  {
    title: "Confronting the Dragon",
    label: "Book Three · ELA Companion Guide",
    href: "https://dl.bookfunnel.com/ei4ll9gvrf",
    image: "/companion-guide-3.jpg",
  },
];

export default function TeacherResourcesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-bright">
            Teacher Resources
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Teacher Resources That Extend the Visit
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-navy-100">
            An author visit can spark excitement, but the real magic happens when
            students keep writing after the assembly. These free resources from
            Mark help teachers turn the visit into classroom writing, discussion,
            and creative work.
          </p>
        </div>
      </section>

      {/* Free writing tools (links to BookFunnel downloads) */}
      <Section tone="white" ariaLabel="Free writing resources">
        <SectionHeading
          eyebrow="Free Downloads"
          title="Writing Tools to Use After the Visit"
          intro="Free, classroom-ready downloads from Mark's main site. Each one opens in a new tab so you can keep this page handy."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {writingTools.map((r) => (
            <li key={r.title}>
              <ExternalLink
                href={r.href}
                aria-label={`Get the free resource: ${r.title} (opens in a new tab)`}
                className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-accent hover:shadow-md"
              >
                <span className="text-lg font-semibold text-navy-900">
                  {r.title}
                </span>
                <span className="mt-2 flex-1 text-ink-soft">{r.description}</span>
                <span className="mt-4 text-sm font-semibold text-cyan-accent">
                  Get it free →
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Section>

      {/* ELA companion guides for the Gameknight999 books */}
      <Section tone="cream" ariaLabel="ELA companion guides">
        <SectionHeading
          eyebrow="ELA Companion Guides"
          title="Teach With the Gameknight999 Books"
          intro="Each guide turns a Minecraft-inspired novel students already love into lesson-ready grammar, vocabulary, comprehension, and writing activities — free via BookFunnel."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {companionGuides.map((g) => (
            <li key={g.title}>
              <ExternalLink
                href={g.href}
                aria-label={`Get the free ELA companion guide for ${g.title} (opens in a new tab)`}
                className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-accent hover:shadow-md"
              >
                <div className="mb-5 flex justify-center">
                  <Image
                    src={g.image}
                    alt={`Cover of the ELA Companion Guide for ${g.title} by Mark Cheverton`}
                    width={400}
                    height={600}
                    sizes="(max-width: 640px) 80vw, 240px"
                    className="h-56 w-auto rounded-md object-contain shadow-md ring-1 ring-navy-100"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-accent">
                  {g.label}
                </span>
                <span className="mt-1 text-lg font-semibold text-navy-900">
                  {g.title}
                </span>
                <span className="mt-4 text-sm font-semibold text-cyan-accent">
                  Get the free guide →
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CTAButton href={FOR_EDUCATORS} variant="primary">
            Browse All Educator Resources
          </CTAButton>
        </div>
      </Section>

      {/* Student Story Submission */}
      <Section tone="white" ariaLabel="Student story submission">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Give Students an Authentic Audience for their Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">
            At the end of the presentation, students are encouraged to write and
            submit their stories to Mark, emailing them to{" "}
            <a
              href="mailto:MarkTheMinecraftAuthor@gmail.com"
              className="font-semibold text-cyan-bright underline-offset-4 hover:underline"
            >
              MarkTheMinecraftAuthor@gmail.com
            </a>
            . Every story Mark receives will be posted to his kid-safe Fan
            Fiction page.
          </p>
          <div className="mt-8">
            <CTAButton href={site.mainSite} variant="primary">
              View Student Stories on MarkCheverton.com
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Teacher CTA */}
      <FinalCTA
        title="Planning a visit?"
        body="Request availability and Mark will follow up with pricing, scheduling, and everything your school needs to get started."
      />
    </>
  );
}
