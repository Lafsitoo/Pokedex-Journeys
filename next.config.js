/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pokeapi.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
