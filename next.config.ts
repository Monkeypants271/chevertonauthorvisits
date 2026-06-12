import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — deploys to Cloudflare Pages as plain assets.
  // The contact form is handled by a Cloudflare Pages Function (functions/api/contact.ts).
  output: "export",
  images: {
    // No image-optimization server on a static host; serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
