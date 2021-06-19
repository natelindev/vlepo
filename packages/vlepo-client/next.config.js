/* eslint-disable */
// @ts-check

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  images: {
    domains: [
      'disqus.com',
      'api.nate-lin.com',
      'dev-to-uploads.s3.amazonaws.com',
      'placeholder.pics',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'www.redditstatic.com',
      'lh1.googleusercontent.com',
      'lh2.googleusercontent.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      'lh7.googleusercontent.com',
      'lh8.googleusercontent.com',
      'lh9.googleusercontent.com',
      'localhost',
    ],
  },
  webpack5: true,
  pageExtensions: ['tsx'],
  // Proxy to Backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/:path*`,
      },
      {
        source: '/graphql/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql/:path*`,
      },
      {
        source: '/images/user-upload/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/images/user-upload/:path*`,
      },
    ];
  },
});
