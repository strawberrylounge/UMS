const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/landing/abstracts/variables" as v;
        `,
      },
    },
  },
};
