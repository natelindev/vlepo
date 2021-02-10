/* eslint-disable */
const images = require('remark-images')
const emoji = require('remark-emoji')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji]
  }
});

module.exports = withMDX({
  images: {
    domains: ['placeholder.pics', 'images.unsplash.com'],
  },
  pageExtensions: ['tsx', 'mdx', 'md'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
});
