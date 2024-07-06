const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { images: { remotePatterns: [{ hostname: "**" }] }, };

module.exports = withContentlayer(nextConfig);
