const prod = process.env.NODE_ENV === 'production';

const REPO_NAME = 'r3fiber-experiments';

module.exports = {
  'process.env.BACKEND_URL': prod ? `/${REPO_NAME}` : '',
};
