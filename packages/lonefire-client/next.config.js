/* eslint-disable */

module.exports = {
  images: {
    domains: ['placeholder.pics', 'images.unsplash.com'],
  },
  pageExtensions: ['tsx'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
};
