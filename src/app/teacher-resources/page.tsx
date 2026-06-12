import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Section, { SectionHeading } from "@/components/Section";
import FeatureCards from "@/components/FeatureCards";
import FinalCTA from "@/components/FinalCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teacher Resources | Extend the Author Visit",
  description:
    "Free teacher resources from Mark Cheverton, including writing prompts, companion guides, reluctant-writer strategies, and student story opportunities after an author visit.",
};

const resources = [
  {
    title: "Writing Prompts",
    body: "Creative prompts to help students begin their own stories.",
  },
  {
    title: "Companion Guides",
    body: "Resources connected to Mark's books for classroom reading and discussion.",
  },
  {
    title: "Reluctant Writer Strategies",
    body: "Practical ways to help students who think they have nothing to say.",
  },
  {
    title: "Fan Fiction and Student Stories",
    body: "Use student interests as a bridge into reading and writing.",
  },
  {
    title: "Growth Mindset Reflection",
    body: "Post-visit reflection prompts about failure, effort, and persistence.",
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
            students keep writing after the assembly. These resources help
            teachers turn Mark&apos;s visit into classroom writing, discussion,
            and creative work.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <Section tone="white" ariaLabel="Teacher resources">
        <SectionHeading
          eyebrow="Classroom Resources"
          title="Turn the Visit Into Lasting Classroom Work"
        />
        <FeatureCards items={resources} />
      </Section>

      {/* Student Story Submission */}
      <Section tone="cream" ariaLabel="Student story submission">
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Student Story Submissions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">
            After the presentation, students can write and submit stories.
            Selected stories may be shared on Mark&apos;s main author website so
            young writers can see their work reach a real audience.
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
