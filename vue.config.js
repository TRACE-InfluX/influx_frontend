module.exports = {
  parallel: false,
  chainWebpack: (config) => {
    config.module.rule('worker')
      .test(/\.worker\.js$/i)
      .use('worker-loader')
      .loader('worker-loader');
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/variables.scss";
        `
      }
    }
  }
}