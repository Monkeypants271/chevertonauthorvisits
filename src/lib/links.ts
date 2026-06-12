// A link is "external" (and should open in a new tab) when it points off-site.
// Internal links (starting with "/" or "#") stay in the same tab. mailto:/tel:
// open the mail/phone app, so they don't need a new tab either.
export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

// Props to spread onto an <a>/<Link> for an external link: opens a new tab
// safely (noopener prevents the new page from accessing window.opener).
export const newTabProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
