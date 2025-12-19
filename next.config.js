/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  output: 'export',

  images: {
    unoptimized: true,
  },

  // GANTI dengan nama repo kamu
  basePath: process.env.NODE_ENV === 'production' ? '/portofolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portofolio/' : '',
};

module.exports = nextConfig;
