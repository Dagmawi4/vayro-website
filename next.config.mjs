/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // fully disable LightningCSS
  },
};

export default nextConfig;
