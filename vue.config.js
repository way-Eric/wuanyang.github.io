const path = require('path')
module.exports = {
  baseUrl: './',
  outputDir: 'way',
  devServer: {
    proxy: {
      '/': {
        target: require('./proxy.config').proxy,
        ws: true,
        changeOrigin: true
      }
    }
  }
}
