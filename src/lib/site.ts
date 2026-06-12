export const site = {
  name: "Mark Cheverton Author Visits",
  email: "Mark.Cheverton1@gmail.com",
  mainSite: "https://www.markcheverton.com",
  tagline: "New York Times bestselling author",
  boces: "Mark is registered with BOCES Arts-in-Education.",
  // Canonical site URL — used for absolute Open Graph / social-share URLs.
  url: "https://www.chevertonauthorvisits.com",
};

// Public Cloudflare Turnstile site key. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in the
// Cloudflare Pages build environment. Falls back to Cloudflare's "always passes"
// TEST key so local dev and previews work without a real key.
export const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

export type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Presentation", href: "/presentation" },
  { label: "For Schools", href: "/for-schools" },
  { label: "Teacher Resources", href: "/teacher-resources" },
  { label: "Request Pricing", href: "/request-pricing", cta: true },
];
