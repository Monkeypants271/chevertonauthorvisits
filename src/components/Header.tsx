"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="text-lg font-bold leading-tight text-navy-900 sm:text-xl"
          onClick={() => setOpen(false)}
        >
          Mark Cheverton
          <span className="block text-xs font-semibold uppercase tracking-wide text-cyan-accent">
            Author Visits
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.cta ? (
                <Link
                  href={item.href}
                  className="ml-2 inline-flex items-center rounded-lg bg-cyan-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#107aa0] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-navy-900 ${
                    isActive(item.href)
                      ? "text-navy-900"
                      : "text-ink-soft"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-navy-100 bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    item.cta
                      ? "mt-1 block rounded-lg bg-cyan-accent px-4 py-3 text-center text-base font-semibold text-white"
                      : `block rounded-md px-3 py-3 text-base font-medium ${
                          isActive(item.href) ? "bg-navy-50 text-navy-900" : "text-ink-soft"
                        }`
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
