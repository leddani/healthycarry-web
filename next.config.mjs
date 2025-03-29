/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-avatar', '@radix-ui/react-slot']
  }
};

export default nextConfig;