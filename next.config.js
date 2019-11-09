const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const REPO_NAME = 'r3fiber-experiments';
const ASSET_PREFIX = process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '';

module.exports = () => {
  return withImages(
    withSass({
      exportPathMap: function () {
        return {
          '/': { page: '/' },
        };
      },

      assetPrefix: ASSET_PREFIX,

      webpack: (config, { isServer, webpack }) => {
        config.plugins.push(new webpack.DefinePlugin({
          __CLIENT__: !isServer,
          __SERVER__: isServer,
        }));

        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.ASSET_PREFIX': JSON.stringify(ASSET_PREFIX),
          }),
        );

        return config;
      },
    })
  );
};
