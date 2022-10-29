const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ['../public'],
  "addons": [
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
}