/*
 * @Author: your name
 * @Date: 2019-12-21 12:04:45
 * @LastEditTime: 2019-12-21 13:51:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /faceshopping/faceshopping/postcss.config.js
 */
module.exports = {
  plugins: {
    'postcss-px2rem': {
      remUnit: 37.5
    },
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 16,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ['*']
    }
  }
}
