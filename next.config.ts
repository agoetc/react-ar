import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ALL origins during development (use with caution).
  // This satisfies Next.js dev server cross-origin checks for /_next/* resources.
  // Docs: next.config.js -> allowedDevOrigins
  allowedDevOrigins: ["*"],
};

export default nextConfig;
