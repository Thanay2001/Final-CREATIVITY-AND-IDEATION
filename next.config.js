/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Final-CREATIVITY-AND-IDEATION' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Final-CREATIVITY-AND-IDEATION/' : '',
  output: 'export',
  // Force cache refresh
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
}

module.exports = nextConfig
