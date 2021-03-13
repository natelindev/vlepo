/* eslint-disable */

module.exports = {
  images: {
    domains: ['placeholder.pics', 'images.unsplash.com'],
  },
  pageExtensions: ['tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/:path*`, // Proxy to Backend
      },
    ];
  },
};
