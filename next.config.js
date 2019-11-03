const withSass = require('@zeit/next-sass');
const withImages = require('next-images')

module.exports = () => {
  return withImages(
    withSass({
      webpack: (config, { isServer, webpack }) => {
        config.plugins.push(new webpack.DefinePlugin({
          __CLIENT__: !isServer,
          __SERVER__: isServer,
        }));

        return config;
      },
    })
  )
};
