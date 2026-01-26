import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler (if this causes TypeScript errors, remove this line)
  reactCompiler: true,

  // Image Configuration (Required for randomuser.me)
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
    ],
  },

  // Turbopack Configuration (Fixes lockfile warning)
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
