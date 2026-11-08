import Image from "next/image";

// A compact, noninteractive excerpt of the real StoryDogs HERO interface.
// Artwork, palette, prompt, and sample answer come from the main site's
// story-dogs page and src/data/storyDogs.ts. Keep it readable at card sizes.
export default function StoryDogsPreview() {
  return (
    <div
      role="img"
      aria-label="Preview of StoryDogs: a caped corgi beside the colorful Who’s Your Hero story-building panel, with a sample about Pip, a dragon who grows flowers."
      className="flex min-h-80 items-center gap-2 overflow-hidden bg-gradient-to-br from-[#351637] to-[#873b3d] px-3 py-6 sm:gap-3 sm:px-5"
    >
      <div aria-hidden="true" className="w-1/3 shrink-0">
        <Image
          src="/storydogs-hero.webp"
          alt=""
          width={640}
          height={640}
          sizes="(max-width: 768px) 30vw, 180px"
          className="h-auto w-full drop-shadow-lg"
        />
      </div>
      <div aria-hidden="true" className="min-w-0 flex-1 rounded-3xl bg-[#fff6e5] p-4 text-[#243141] shadow-[0_0_24px_#fff6e560] sm:p-5">
        <p className="text-lg font-extrabold leading-tight text-[#692696]">
          HERO <span className="block text-sm">Who’s Your Hero?</span>
        </p>
        <p className="mt-3 text-sm font-bold leading-snug">
          Who is your main character? Give them a name and tell us a little about them.
        </p>
        <p className="mt-2 rounded-lg border border-[#a8a396] bg-[#fffdf7] p-3 text-sm leading-snug">
          Pip is a tiny dragon who grows flowers instead of breathing fire.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-[#50314d]">
          <span className="rounded-md border border-[#b4ab9a] bg-[#f1e5ee] px-2 py-1">Dictate</span>
          <span className="rounded-md border border-[#b4ab9a] px-2 py-1">Another Idea</span>
        </div>
      </div>
    </div>
  );
}
