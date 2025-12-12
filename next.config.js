/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Final-CREATIVITY-AND-IDEATION' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Final-CREATIVITY-AND-IDEATION/' : '',
  output: 'export',
}

module.exports = nextConfig
