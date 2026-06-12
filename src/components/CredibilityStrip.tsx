const badges = [
  "New York Times bestselling author",
  "Internationally published",
  "Author of 32 novels",
  "Former teacher",
  "Registered with BOCES Arts-in-Education",
];

export default function CredibilityStrip() {
  return (
    <div className="border-y border-navy-100 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ul className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-5">
          {badges.map((badge) => (
            <li
              key={badge}
              className="flex items-center justify-center rounded-xl bg-white px-4 py-4 text-sm font-semibold text-navy-900 shadow-sm ring-1 ring-navy-100"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
