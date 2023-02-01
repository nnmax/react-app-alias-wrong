const { CracoAliasPlugin } = require("react-app-alias");

/**
 * @type { import('@craco/types').CracoConfig }
 */
module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {}
    }
  ],
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc"
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@mui/styled-engine$': '<rootDir>/node_modules/@mui/styled-engine-sc',
      },
    },
  },
};
