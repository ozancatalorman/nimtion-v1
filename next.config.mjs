/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: { allowedOrigins: ["*"] } // !!! CHANGE LATER with the actual domain
  }
};
export default nextConfig;