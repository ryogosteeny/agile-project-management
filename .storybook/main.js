module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async (options) => {
    options.presets.push('@emotion/babel-preset-css-prop');
    return options;
  },
};
