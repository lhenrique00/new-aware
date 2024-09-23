/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})
module.exports = withPWA({
  reactStrictMode: true,
  transpilePackages: ['geist'],
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.MEDIA_PROTOCOL,
        hostname: process.env.MEDIA_HOSTNAME,
        port: process.env.MEDIA_PORT,
        pathname: process.env.MEDIA_PATHNAME
      }
    ]
  }
})
