// vue.config.js
module.exports = {
  // 选项
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  css: {
    modules: false,
    sourceMap: false,
  },
  // 开启热加载
  devServer: {
    hot: true,
    host: '127.0.0.1',
    port: 8080,
  },
  parallel: require('os').cpus().length > 1
}