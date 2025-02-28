/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    console.log("Resolved alias:", JSON.stringify(config.resolve.alias, null, 2));
    return config;
  },
};
export default nextConfig;
