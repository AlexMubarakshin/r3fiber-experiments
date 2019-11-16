
const config = {
  test: {
    isProd: false,
  },
  development: {
    isProd: false,
  },
  production: {
    isProd: true,
  },
}[process.env.NODE_ENV || 'development'];

const assetsPrefix = config.isProd ? '/r3fiber-experiments' : '';

const defaultConfig = {
  assetsPrefix,
  ...config,
};

export default defaultConfig;
