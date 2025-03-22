/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "archive.smashing.media",
      },
    ],
  },
};

module.exports = nextConfig;
