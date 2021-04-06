module.exports = {
  publicPath: '/vue3',
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // Paths
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://www.vue3.com/api', //后端接口地址
        changeOrigin: true,  //是否允许跨越
        pathRewrite: {
          '^/api': '/api',        //重写,
        }
      }
    },
    host: 'localhost',   //本地ip
    port: 8080,
  }
}


