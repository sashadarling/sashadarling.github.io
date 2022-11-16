/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: 'static/media/'
  },
  assetPrefix: './'
}

module.exports = nextConfig
