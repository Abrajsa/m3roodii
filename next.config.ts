import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic Next.js configuration
  reactStrictMode: true,
  experimental: {
    // Remove invalid turbo key - turbopack is enabled by default in Next.js 16
  },
  // Configure turbopack root to fix workspace detection
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
