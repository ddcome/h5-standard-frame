const path = require('path');
const argv = process.argv.splice(2);
const BundleAnalyzerPlugin = argv.includes('--analyzer')
  ? [new (require('webpack-bundle-analyzer')).BundleAnalyzerPlugin()]
  : [];
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', // 部署应用包时的基本 URL
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    // https: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolvePath('src'),
        'apiconfig': resolvePath('src/apiconfig'),
        'api': resolvePath('src/api'),
        'styles': resolvePath('src/styles'),
        'common': resolvePath('src/components'),
      },
      extensions: ['.js', '.vue', '.json']
    },
     plugins: [...BundleAnalyzerPlugin]
  },
};
function resolvePath(relativePath) {
  return path.resolve(__dirname, relativePath);
}
