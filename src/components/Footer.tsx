import Link from "next/link";
import { navItems, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy-900 text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">Mark Cheverton Author Visits</p>
          <p className="mt-1 text-sm text-navy-200">New York Times bestselling author</p>
          <p className="mt-4 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-cyan-bright underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              href={site.mainSite}
              className="font-medium text-cyan-bright underline-offset-4 hover:underline"
            >
              markcheverton.com
            </a>
          </p>
        </div>

        <nav aria-label="Footer" className="md:justify-self-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-200">
            Pages
          </p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-navy-100 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label === "Request Pricing"
                    ? "Request Pricing & Availability"
                    : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy-200">
            About the Visit
          </p>
          <p className="mt-3 max-w-xs text-sm text-navy-100">
            A growth mindset author visit where students hear how 253 rejections,
            seven years of failure, and one Minecraft-inspired story became the
            beginning of a bestselling author career.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-navy-200 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{site.boces}</p>
          <p>&copy; {new Date().getFullYear()} Mark Cheverton. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
