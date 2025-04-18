import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.roya-tv.com',
        port: '',
        pathname: '/**', // Allows all paths
      },
    ],
  },
};

export default nextConfig;
