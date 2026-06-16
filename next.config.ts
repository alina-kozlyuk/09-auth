// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ac.goit.global",
      },
    ],
  },
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // Замінити URL нижче на реальну адресу бекенду, яку вам надали в GoIT (наприклад, https://api.goit.global або іншу)
        destination: 'https://api.goit.global/:path*', 
      },
    ];
  },
};

export default nextConfig;
