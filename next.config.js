/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tykit.rometheme.pro", "cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
