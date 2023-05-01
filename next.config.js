/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apiv3.apifootball.com',
        port: '',
        pathname: '/badges/**',
      },
    ],
  },
};

module.exports = nextConfig;
