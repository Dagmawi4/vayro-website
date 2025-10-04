/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ✅ Allow local LAN devices (phones, tablets, etc.) to access dev server
    allowedDevOrigins: ["192.168.1.0/24"], 
  },
};

export default nextConfig;
