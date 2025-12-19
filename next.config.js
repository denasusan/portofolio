/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  output: 'export',

  images: {
    unoptimized: true,
  },

  // GANTI dengan nama repo kamu
  basePath: process.env.NODE_ENV === 'production' ? '/NAMA_REPO' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/NAMA_REPO/' : '',
};

module.exports = nextConfig;
