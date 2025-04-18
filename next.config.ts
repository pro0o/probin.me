import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
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

 async redirects() {
  return [
    {
      source: '/ai',
      destination: 'https://sup-bud.ddns.net/',
      permanent: false,
    },
    {
      source: '/ai/:path*',
      destination: 'https://sup-bud.ddns.net/:path*',
      permanent: false,
    },
    {
      source: '/raft-home',
      destination: 'https://raft-in-motion.vercel.app/',
      permanent: false,
    },
    {
      source: '/raft-home/:path*',
      destination: 'https://raft-in-motion.vercel.app/:path*',
      permanent: false,
    },
  ]
}
}

export default nextConfig
