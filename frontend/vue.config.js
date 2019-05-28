const webpack = require("webpack");

module.exports = {
  // Dynamic public path for dev/prod environment
  publicPath: 
    process.env.NODE_ENV === 'production' ? `${process.env.VUE_APP_NAME}/public` 
    : `/${process.env.VUE_APP_NAME}/`,

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../public',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html',

  /**
   * For SVG file loader
   */
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default'],
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        $: 'jquery',
        moment: 'moment',
      }),
    ]
  }
}