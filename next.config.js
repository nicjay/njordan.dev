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
  }
};

module.exports = withPlaiceholder(nextConfig);
