/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://givemesql.vercel.app/:path*',
        },
      ]
    },

}