import Image from "next/image";
import ExternalLink from "./ExternalLink";
import { site } from "@/lib/site";

// Recreates Mark's BOCES Arts-in-Education listing card in the site's own style.
// The button links out to the official NYS Arts Enrichment listing (new tab).
export default function BocesCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
      <div className="bg-navy-900 px-6 py-4">
        <p className="text-xl font-bold text-white">Mark Cheverton</p>
      </div>

      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
        <Image
          src="/mark-cheverton-boces.jpg"
          alt="Headshot of Mark Cheverton, New York Times bestselling author."
          width={600}
          height={600}
          sizes="(max-width: 640px) 100vw, 200px"
          className="h-44 w-44 flex-none rounded-lg object-cover ring-1 ring-navy-100"
        />
        <p className="text-lg leading-relaxed text-ink-soft">
          <strong className="text-navy-900">
            Growth Mindset Through Real Failure.
          </strong>{" "}
          New York Times bestselling author Mark Cheverton visits schools with an
          interactive presentation about persistence and learning from setbacks —
          available as an assembly, small-group classroom session, or virtual
          visit for grades 3–8.
        </p>
      </div>

      <ExternalLink
        href={site.bocesUrl}
        aria-label="View Mark Cheverton's BOCES Arts-in-Education listing (opens in a new tab)"
        className="block bg-cyan-accent px-6 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#107aa0]"
      >
        Click Here for More Information!
      </ExternalLink>
    </div>
  );
}
