/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
    {
      source: "/public/cv.html",
      destination: "/pages/api/cv.js",
    },
  ]},
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      }
}

module.exports = nextConfig
