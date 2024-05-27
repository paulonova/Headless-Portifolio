/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.paulonova.se',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
