#### webpack 安装使用方法

##### 项目运行

```
   npx webpack --config webpack.config.js

   // 运行上边配置比较繁琐， 我们可以使用npm 脚本来运行我们的配置

   在package.json 中配置 'build':'webpack', 然后执行npm build 就能达到相同的结果

   感觉webpack 会自自动寻找webapck.config.js 文件

   - css loader  使得css可以引入js 文件
   - style loader 使得css loader 解析并且生成style 插入 html 页面中

   - HtmlWebpackPlugin  避免html中引用路径更改问题，我们需要使用这个plugin

    ```
        npm install --save-dev html-webpack-plugin
        将会生成一个新的html页面，然后将所有的bundle.js自动引入这个html中
    ```

    - clean-webpack-plugin

    ```
      npm install clean-webpack-plugin --save-dev
      将会清理dist 文件夹中的不会不用到的文件，只会生成用到的文件

      备注： 中文官方文档出现问题，导致不能找到 clean-webpack-plugin
      所以我们需要使用 新方法

    ```

    - source map  映射关系，帮助我们快速寻找到错误的文件, 而不是合并文件，（寻找错误代码文件）

    - webpack-dev-server  提供一个简单的web serve 并且能够实时重新加载

    ```
      每次编译时候都需要手动运行npm run build 会变得很麻烦，这种服务会帮助我们自动编译代码

      npm install --save-dev webpack-dev-server

      webpack-dev-server --port 8088 端口号

      webpack-dev-server --inline 改变完代码以后，自动刷新浏览器
      
      webpack-dev-server --hot 热重载(局部更改)

      ####  加载的

    ```

    - 模块热替换目前还不太清楚用法（待查看）
    - tree shaking   通用模块以及压缩输出等操作（待查看）

```



##### 环境配置

   开发环境和生产环境需要的配置不一样，所以需要区分不同的配置页面

  // 指定开发环境的方式有两种如如下 mode 其中开发环境只能指定
  mode: "development",
  // 第二种方式就是如下，可以任意指定开发环境，并且环境优先级别要高于mode
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]

   - CommonsChunkPlugin  webpack中的plugin 移除模块中多余的部分 




   #####  vue 脚手架相关的配置
  ```
    npm install vue --save
    npm install --save-dev babel-core babel-loader
    bable 官网 http://babeljs.cn/

    https://juejin.im/post/5a425cb4f265da43294e4f2e


    // 这是配置的关键信息
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }

    vue-loader 通常情况下 webpack 是不识别*.vue的文件，以及相互之间的引用

    通过下边的loader可以解决这个问题

    npm install --save-dev vue-loader vue-template-compiler

    报错 const VueLoaderPlugin = require("vue-loader/lib/plugin");

      需要单独的引入 plugin 

      热加载 只加载局部信息


  ```
