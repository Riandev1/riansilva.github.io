/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https:; media-src 'none'; frame-ancestors 'none';"
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 