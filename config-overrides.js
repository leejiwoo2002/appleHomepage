/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable no-useless-computed-key */
const path = require('path');
const { addWebpackAlias, override } = require('customize-cra');

module.exports = {
  webpack: override(
    addWebpackAlias({
      ['@components']: path.resolve(__dirname, 'src/components/'),
      ['@resources']: path.resolve(__dirname, 'src/resources/'),
    })
  ),
};
