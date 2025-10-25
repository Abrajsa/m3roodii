import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic Next.js configuration
  reactStrictMode: true,
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
