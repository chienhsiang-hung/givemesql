// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://givemesql.vercel.app/:path*',
        },
      ]
    },
};