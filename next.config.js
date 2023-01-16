/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
