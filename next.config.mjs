/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn.piyushgarg.dev",
      },
    ],
  },
};

export default nextConfig;
