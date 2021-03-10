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
};
