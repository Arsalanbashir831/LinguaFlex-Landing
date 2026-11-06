import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cpuyqovhchnijrtpusis.supabase.co",
      },
      {
        protocol: "https",
        hostname: "fuzaihuypcqtfdsrwxxe.supabase.co",
      },
    ],
  },
};

export default nextConfig;
