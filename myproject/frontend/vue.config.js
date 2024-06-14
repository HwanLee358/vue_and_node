const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir : "../backend/public",
  devServer: {
    proxy: {
      "/api" :{
        target: 'http://localhost:3000',
        ws: false,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    }
  }
})