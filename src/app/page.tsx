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
import StoryDogsPreview from "@/components/StoryDogsPreview";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "StoryDogs & Growth Mindset Author Visits | Mark Cheverton",
  description:
    "Explore StoryDogs for grades K–3 and Growth Mindset for grades 3–6 with New York Times bestselling author Mark Cheverton. Plan a school visit shaped around your students.",
  openGraph: {
    title: "StoryDogs & Growth Mindset Author Visits | Mark Cheverton",
    description:
      "Two school presentations: imaginative storytelling with StoryDogs for grades K–3, and a true story of persistence with Growth Mindset for grades 3–6.",
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
    body: "The school has Mark for the full day. A visit can include StoryDogs for younger students in grades K–3 and Growth Mindset for older students in grades 3–6. Mark can present in the library, cafeteria, or auditorium, with one large assembly or multiple grade-level sessions. The presentation choices, group sizes, and schedule are arranged to fit your school.",
  },
  {
    title: "Lunch with Students",
    body: "When possible, Mark has lunch with a small group of students selected by the school. This gives students a more personal chance to ask questions about books, writing, Minecraft, publishing, and creativity.",
  },
  {
    title: "Book Signing",
    body: "After lunch, Mark autographs pre-ordered books and books students already own. Book sales are optional and never the focus of the visit. The heart of the day is the time spent with students.",
  },
  {
    title: "After-School Storywriting Workshop (Optional)",
    body: "Add a one-hour, hands-on workshop for up to 20 students in grades 3–6. Each student receives a story-building packet to take home. A teacher must be present throughout the workshop. The workshop is $300 when added to an in-person author visit.",
    href: "/#after-school-workshop",
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
              Author Visits That Spark Stories and Growth
            </h1>
            <p className="mt-6 text-lg text-navy-100">
              New York Times bestselling author and former teacher Mark
              Cheverton brings imaginative storytelling and growth mindset to
              your school, with two presentations for different age groups.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/request-pricing" variant="primary">
                Request Pricing &amp; Availability
              </CTAButton>
              <CTAButton href="/#programs" variant="ghost">
                Explore Both Programs
              </CTAButton>
            </div>
            <p className="mt-4 text-sm text-navy-100">
              Full-day, in-person visits start at $2,000. Travel costs may apply
              outside the Capital District.
            </p>
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

      <section id="programs" aria-labelledby="programs-heading" className="scroll-mt-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 id="programs-heading" className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Two presentations. A fit for your students.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
              <StoryDogsPreview />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="self-start rounded-full bg-navy-50 px-3 py-1 text-sm font-bold text-navy-700">Grades K–3</p>
                <h3 className="mt-4 text-3xl font-bold text-navy-900">StoryDogs</h3>
                <p className="mt-3 flex-1 text-lg leading-relaxed text-ink-soft">
                  A playful, interactive storytelling experience for younger
                  students. During the presentation, we’ll create a story
                  together. With the help of some memorable dogs, students
                  explore how stories take shape, from creating a hero to
                  imagining the challenges that hero might face. Together,
                  we’ll discover that everyone has ideas worth sharing.
                </p>
                <div className="mt-6">
                  <CTAButton href="/request-pricing#storydogs" className="w-full bg-[#107aa0]! text-center hover:bg-navy-700! sm:w-auto">Explore StoryDogs</CTAButton>
                </div>
              </div>
            </article>
            <article className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
              <Image src="/author-visit-students-1.jpg" alt="Mark Cheverton presenting Growth Mindset to students raising their hands in a school library" width={1100} height={1100} sizes="(max-width: 768px) 100vw, 560px" className="h-80 w-full object-cover object-top" />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="self-start rounded-full bg-navy-700 px-3 py-1 text-sm font-bold text-white">Grades 3–6</p>
                <h3 className="mt-4 text-3xl font-bold text-navy-900">Growth Mindset</h3>
                <p className="mt-3 flex-1 text-lg leading-relaxed text-ink-soft">
                  Through humor, audience participation, and the true story
                  behind his Minecraft novels, Mark shows students how setbacks,
                  persistence, and learning from mistakes can help them grow.
                </p>
                <div className="mt-6">
                  <CTAButton href="/request-pricing#growth-mindset" className="w-full bg-[#107aa0]! text-center hover:bg-navy-700! sm:w-auto">Explore Growth Mindset</CTAButton>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. What Students Experience */}
      <Section tone="white" ariaLabel="What students experience in Growth Mindset">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Growth Mindset · Grades 3–6"
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
      <Section tone="cream" ariaLabel="The story behind the Growth Mindset presentation">
        <SectionHeading
          eyebrow="The Story Behind Growth Mindset"
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

      <Section tone="white" ariaLabel="Inside the StoryDogs presentation">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-navy-700">
              StoryDogs · Grades K–3
            </p>
            <SectionHeading title="We’ll create a story together" />
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              How does an idea become an adventure? In StoryDogs, Mark and the
              students build a story together, with some memorable dogs to guide
              the way. We’ll imagine a hero, discover what they want, and follow
              the challenges and choices that shape their story.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              StoryDogs follows the storytelling pattern shared as Pixar’s
              Rule #4: start with a character’s everyday world, introduce a
              change, and connect what happens next through to the ending.
              Kids learn how stories take shape while practicing creativity,
              listening, and working together.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-navy-900" aria-label="Skills students practice">
              <li className="rounded-full bg-navy-50 px-4 py-2">Creativity</li>
              <li className="rounded-full bg-navy-50 px-4 py-2">Listening</li>
              <li className="rounded-full bg-navy-50 px-4 py-2">Working together</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="/request-pricing#storydogs" className="bg-[#107aa0]! text-center hover:bg-navy-700!">Plan a StoryDogs Visit</CTAButton>
              <CTAButton href={`${site.mainSite}/story-dogs`} variant="secondary" className="text-center" aria-label="Explore the StoryDogs website (opens in a new tab)">Explore StoryDogs ↗</CTAButton>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-navy-100 bg-cream shadow-sm">
            <StoryDogsPreview />
            <figcaption className="p-6">
              <p className="font-semibold text-navy-900">A look inside the StoryDogs story builder</p>
              <p className="mt-2 leading-relaxed text-ink-soft">
                A preview of the HERO step, using the real StoryDogs artwork,
                prompt, and a sample story idea.
              </p>
              <ol className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-navy-700" aria-label="The seven StoryDogs steps">
                {["HERO", "WISH", "UH-OH!", "TROUBLE", "YIKES!", "SHOWDOWN", "AFTER!"].map((step, index) => (
                  <li key={step} className="rounded-lg border border-navy-100 bg-white px-3 py-2">
                    <span className="mr-1 text-ink-soft">{index + 1}.</span> {step}
                  </li>
                ))}
              </ol>
            </figcaption>
          </figure>
        </div>
      </Section>

      <section id="after-school-workshop" aria-labelledby="workshop-heading" className="scroll-mt-20 bg-cream">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-navy-100">
            <Image
              src="/after-school-storywriting-workshop.png"
              alt="Mark Cheverton talking with a student while a small group of elementary students work at desks with printed story-building worksheets and pencils"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>
          <div>
            <h2 id="workshop-heading" className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              After-School Storywriting Workshop
            </h2>
            <p className="mt-5 text-xl font-semibold leading-relaxed text-navy-700">
              What happens when you give a hero a problem and let a roomful of kids decide what happens next?
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              In this one-hour, hands-on workshop, Mark helps students build
              stories of their own. They’ll invent a hero, decide what that hero
              wants, and make things a little harder every time the hero tries
              to solve the problem. Each student gets a story-building packet
              to work through in pencil and take home to keep writing.
            </p>
            <p className="mt-6 font-bold text-navy-900">Grades 3–6 · 60 minutes · Up to 20 students</p>
            <p className="mt-3 rounded-xl border-l-4 border-navy-700 bg-white p-4 font-medium text-navy-900">
              A teacher must be present throughout the workshop.
            </p>
            <div className="mt-6 space-y-2 text-lg text-ink-soft">
              <p><strong className="text-navy-900">$300</strong> when added to an in-person author visit</p>
              <p><strong className="text-navy-900">$400</strong> when booked on its own</p>
            </div>
            <div className="mt-6">
              <CTAButton href="/request-pricing#after-school-workshop" className="w-full bg-[#107aa0]! text-center hover:bg-navy-700! sm:w-auto">See Workshop Details</CTAButton>
            </div>
          </div>
        </div>
      </section>

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
            stories by emailing them to{" "}
            <a
              href="mailto:MarkTheMinecraftAuthor@gmail.com"
              className="font-semibold text-cyan-bright underline-offset-4 hover:underline"
            >
              MarkTheMinecraftAuthor@gmail.com
            </a>
            . Every story Mark receives will be posted to his kid-safe Fan
            Fiction page for other kids to read.
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
