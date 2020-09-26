const path = require('path');  // add styles in storybook

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // Load styles in storybook
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/styles'),
    });

    // Return the altered config
    return config;
  },
}
