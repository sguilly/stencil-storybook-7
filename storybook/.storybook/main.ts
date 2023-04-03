/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    babelModeV7: true,
  },
};
export default config;
