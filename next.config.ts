import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.43.34"],
  // Serve canonical URLs with trailing slash to match sitemap/canonical config,
  // preventing redirect chains reported by Google Search Console.
  trailingSlash: true,
};

export default nextConfig;
