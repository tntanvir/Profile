import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-expect-error - eslint property is supported by Next.js but might be missing from NextConfig type
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
