import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic Next.js configuration
  reactStrictMode: true,
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
