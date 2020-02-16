const path = require('path')
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `
          @import "~bootstrap/scss/_functions.scss";
          @import "~bootstrap/scss/_variables.scss";
          @import "~bootstrap/scss/mixins/_breakpoints.scss";
          @import "@/styles/setup/_mixins.scss";
          @import "@/styles/setup/_variables.scss";
          @import "@/styles/setup/_typography.scss";
        `
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.resolve.alias
      .set('@img', path.resolve(__dirname, 'src/assets/img'))
      .set('@svg', path.resolve(__dirname, 'src/assets/svg'))
      .set('@components', path.resolve(__dirname, 'src/components'))
  }
}
