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
      sass: {
        additionalData: (content, loaderContext) => {
          if (loaderContext.resourcePath.includes("/modules/main/")) {
            // main 모듈 관련 파일에는 landing 스타일 적용
            return `
              @use "@/assets/scss/landing/abstracts/variables" as v;
              ${content}
            `;
          }
          return content;
        },
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "src/assets/scss/landing"),
          ],
        },
      },
    },
  },
  transpileDependencies: ["vue-chartjs", "chart.js"],
};
