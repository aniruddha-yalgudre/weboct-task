import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.codepen.io',
        pathname: '/7558/**',
      },
      {
        protocol: 'https',
        hostname: 'files.peachworlds.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'htarchitecte.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
