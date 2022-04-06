const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: isProd ? "/word-card" : "",
  assetPrefix: isProd ? "/word-card/" : "",
};

module.exports = nextConfig;
