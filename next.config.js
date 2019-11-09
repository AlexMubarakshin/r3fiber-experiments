const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const REPO_NAME = 'r3fiber-experiments';

module.exports = () => {
  return withImages(
    withSass({
      exportPathMap: function () {
        return {
          '/': { page: '/' },
        };
      },

      assetPrefix: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '',

      webpack: (config, { isServer, webpack }) => {
        config.plugins.push(new webpack.DefinePlugin({
          __CLIENT__: !isServer,
          __SERVER__: isServer,
        }));

        return config;
      },
    })
  );
};

//https://alexmubarakshin.github.com/r3fiber-experiments