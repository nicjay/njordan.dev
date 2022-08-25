const { withPlaiceholder } = require('@plaiceholder/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true
    },
    newNextLinkBehavior: true,
    browsersListForSwc: true,
    legacyBrowsers: false
  },
  async headers() {
    return [
      {
        source: '/fonts/IBMPlexSansVar-Roman.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
};

module.exports = withPlaiceholder(nextConfig);
