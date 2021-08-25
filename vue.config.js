module.exports = {
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        pathRewrite:{'^/api':''},
        changeOrigin:true
      }
    }
  },
  publicPath:'./',
  pages:{
    index:{
      entry:'src/main.js'
    }
  }
}