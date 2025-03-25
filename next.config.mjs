/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_QLU2_BACKEND_URL: process.env.NEXT_PUBLIC_QLU2_BACKEND_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media-exp1.licdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
