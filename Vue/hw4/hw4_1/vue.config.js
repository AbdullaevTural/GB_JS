const { defineConfig } = require("@vue/cli-service");
module.exports = {
  devServer: {
    port: 3001,
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
