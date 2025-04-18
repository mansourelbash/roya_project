import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['roya.tv'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.roya-tv.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tpc.googlesyndication.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
