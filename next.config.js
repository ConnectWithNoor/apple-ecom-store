/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["rb.gy", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
