/*
 * @Description:
 * @version:
 * @Author: liuct
 * @Date: 2022-03-08 10:43:32
 * @LastEditors: liuct
 * @LastEditTime: 2022-03-08 11:27:09
 */
const path = require('path');

module.exports = {
  mode: 'development', // 打包模式
  // entry: './src/index.js', // 打包入口地址
  entry: './src/index.css', // 打包入口地址
  // entry: './src/index.json', // 打包入口地址
  output: {
    // filename: 'bundle.js', // 输出文件名称
    filename: 'bundle.css', // 输出文件名称
    // filename: 'bundle.json', // 输出文件名称
    path: path.join(__dirname, 'dist'), // 输出文件目录
  },
  module: {
    rules: [
      {
        test: /\.css/, // 匹配所有css文件
        use: 'css-loader', // 使用对应的loader
      },
    ],
  },
};
