import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'tailwindui.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
            },
        ],
      },
};

export default nextConfig;
