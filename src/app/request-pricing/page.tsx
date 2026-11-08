import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import ContactForm from "@/components/ContactForm";
import Section, { SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Pricing & Availability | Mark Cheverton Author Visits",
  description:
    "Choose StoryDogs for grades K–3 or Growth Mindset for grades 3–6. Explore Mark Cheverton's $2,000 full-day school visit and request dates and a quote.",
};

const takeaways = [
  {
    title: "Laugh and participate",
    body: "A lively, interactive experience with humor and audience participation.",
  },
  {
    title: "Hear an honest story",
    body: "An age-appropriate story about rejection, false starts, and perseverance.",
  },
  {
    title: "See a reason to try again",
    body: "A growth mindset message: effort, reflection, and trying again can lead to improvement.",
  },
];

const inclusions = [
  "Presentations and Q&A",
  "Lunch with selected students when schedules allow",
  "Book autographing after the presentations; book purchases are optional",
  "Custom bookmarks and a book order form sent 2–3 weeks ahead",
];

function VisitButton() {
  return (
    <CTAButton
      href="#contact"
      className="w-full bg-[#107aa0]! text-center hover:bg-navy-700! sm:w-auto"
    >
      Check Dates &amp; Request a Visit
    </CTAButton>
  );
}

export default function RequestPricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-bright">
              Author visits for schools
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Bring stories and growth mindset to your school.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
              Give students an engaging, memorable day with a New York Times
              bestselling author and former teacher.
            </p>
            <div className="mt-7"><VisitButton /></div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/20">
            <Image
              src="/author-visit-hero.jpg"
              alt="Mark Cheverton and a teacher speaking to students seated in a school gym"
              width={1348}
              height={941}
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <div className="border-t border-white/15 bg-navy-950/30">
          <ul className="mx-auto grid max-w-6xl gap-3 px-4 py-5 text-sm font-medium text-navy-100 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:text-center">
            <li>New York Times bestselling author</li>
            <li>Former teacher</li>
            <li>Registered with BOCES Arts-in-Education</li>
          </ul>
        </div>
      </section>

      <Section tone="cream" ariaLabel="School visit programs">
        <SectionHeading
          title="Find the presentation for your students"
          intro="Two distinct programs, with a clear fit for each age group."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
            <div className="flex h-64 items-center justify-center bg-navy-50 p-6 sm:h-72">
              <Image
                src="https://www.markcheverton.com/images/story-dogs/who.webp"
                alt="Orange and white StoryDogs plush corgi wearing a red cape"
                width={400}
                height={400}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="inline-flex rounded-full bg-navy-50 px-3 py-1 text-sm font-bold text-navy-700">
                Grades K–3
              </p>
              <h3 className="mt-4 text-3xl font-bold text-navy-900">StoryDogs</h3>
              <p className="mt-2 text-lg font-semibold text-navy-700">Imagination is where a story begins.</p>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                A playful, interactive presentation about how stories grow from imagination.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
            <div className="h-64 overflow-hidden sm:h-72">
              <Image
                src="/author-visit-students-1.jpg"
                alt="Mark Cheverton presents to students raising their hands in a school library"
                width={1100}
                height={1100}
                sizes="(max-width: 768px) 100vw, 560px"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="inline-flex rounded-full bg-navy-700 px-3 py-1 text-sm font-bold text-white">
                Grades 3–6
              </p>
              <h3 className="mt-4 text-3xl font-bold text-navy-900">Growth Mindset</h3>
              <p className="mt-2 text-lg font-semibold text-navy-700">Setbacks don&apos;t mean you should give up.</p>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                Mark shares his true story: 253 rejections, seven years of
                unsuccessful writing, his son&apos;s experience with bullying,
                and the Minecraft-inspired story that became his breakthrough.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-8"><VisitButton /></div>
      </Section>

      <Section tone="white" ariaLabel="Growth Mindset student takeaways">
        <p className="text-sm font-bold uppercase tracking-wide text-navy-700">
          Inside the Growth Mindset presentation · Grades 3–6
        </p>
        <SectionHeading title="What students take away" />
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {takeaways.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-navy-100 bg-cream p-6">
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" ariaLabel="Full-day visit and pricing">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="lg:py-6">
            <SectionHeading title="A full day, shaped around your school" />
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              I can present to the whole school in one large assembly or meet
              with students in multiple grade-level sessions. We&apos;ll shape
              the schedule around your school&apos;s grades, group sizes, and
              available time.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Tell Mark who will be attending and what your day looks like.
              Together, you can agree on a schedule that works for your school.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lg">
            <div className="bg-navy-900 p-6 text-white sm:p-8">
              <h3 className="text-lg font-semibold leading-relaxed">
                Full-day, in-person school visit:{" "}
                <span className="mt-2 block text-5xl font-bold tracking-tight">$2,000</span>
              </h3>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-lg font-bold text-navy-900">Your school receives</h4>
              <ul className="mt-5 space-y-4">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft">
                    <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m4 10 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-navy-100 pt-5 text-sm leading-relaxed text-ink-soft">
                <p>Travel costs may apply outside the Capital District.</p>
                <p className="mt-2">Virtual visits and other formats are priced separately.</p>
              </div>
              <div className="mt-6"><VisitButton /></div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" ariaLabel="Free educator and student resources" className="py-10! sm:py-12!">
        <div className="flex flex-col gap-6 rounded-2xl border border-navy-100 bg-navy-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900">Keep the ideas growing</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Explore free educator and student writing resources on
              MarkCheverton.com, including writing prompts and companion guides.
              Available whether or not you book a visit.
            </p>
          </div>
          <CTAButton href={`${site.mainSite}/for-educators`} variant="secondary" className="shrink-0 text-center" aria-label="Explore free resources on MarkCheverton.com (opens in a new tab)">
            Explore Free Resources <span aria-hidden="true" className="ml-2">↗</span>
          </CTAButton>
        </div>
      </Section>

      <section aria-labelledby="contact" className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 id="contact" tabIndex={-1} className="scroll-mt-24 text-3xl font-bold tracking-tight text-navy-900 focus:outline-none sm:text-4xl">
            Request Pricing &amp; Availability
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Share your school&apos;s details and preferred dates. Mark will
            follow up with availability and a quote.
          </p>
          <p className="mt-4 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-900">
            Submitting this form requests availability and a quote; it does not confirm a booking.
          </p>
          <div className="mt-6 rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
