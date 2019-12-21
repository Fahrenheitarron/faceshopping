/*
 * @Author: your name
 * @Date: 2019-12-21 12:04:45
 * @LastEditTime : 2019-12-21 22:38:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /faceshopping/faceshopping/vue.config.js
 */
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  }
}
