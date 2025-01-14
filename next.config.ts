import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
