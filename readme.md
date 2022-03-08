<!--
 * @Description:
 * @version:
 * @Author: liuct
 * @Date: 2022-03-08 10:05:09
 * @LastEditors: liuct
 * @LastEditTime: 2022-03-08 11:12:56
-->

### 这是一个学习 webpack 的项目

webpack 默认只能处理 js 和 json 文件，
其他类型都处理不了，必须借助 Loader 来对不同类型的文件进行处理

1. 先安装 webpack 和 webpack-cli

```js
   npm install webpack webpack-cli -D
```

2. webpack 在 4 以后就支持 0 配置打包
   在控制台执行

```js
npx webpack
```
