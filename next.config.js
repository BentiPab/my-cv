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
            source: '/:path*',
           destination: 'https://www.pablo-bentivengo.com.ar/:path*',
        permanent: true,
          },
        ]
      }
}

module.exports = nextConfig
