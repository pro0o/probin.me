import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    // ppr: true,
    // reactCompiler: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/09ir0bgwfb/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/ai',
        destination: 'https://sup-bud.ddns.net',
      },
      {
        source: '/ai/:path*',
        destination: 'https://sup-bud.ddns.net/:path*',
        basePath: false,
      },
      {
        source: '/raft-home',
        destination: 'https://raft-in-motion.vercel.app',
        basePath: false,
      },
      {
        source: '/raft-home/:path*',
        destination: 'https://raft-in-motion.vercel.app/:path*',
        basePath: false,
      },
    ];
  },
}

export default nextConfig