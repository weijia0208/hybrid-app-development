<!-- # hybrid-app-development -->
<!-- web开发 -->
# webpack 学习
>模块打包机，打包所有资源、脚本、图片、样式表，自动刷新，代码校验
##项目初始化
-新建一个webpack文件夹
-cd webpack 执行yarn init -y(初始化一个package.json文件)
-创建一个src文件夹，里面创建一个index.js文件
##安装webpack
-本地安装  -D代表是开发依赖，上线不需要
    ...
    yarn add webpack webpack-cli -D
    ...
-创建.gitgnore文件
-webpack可以进行0配置，运行 npx webpack
##配置webpack
-创建一个 webpack.config.js
-配置package.json文件，设置npm脚本，执行npm run build
-设定HtmlWebpackPligin
    、、、
    yarn add html-webpack-plugin -D
    、、、
-设置clean-webpack-plugin插件，清除原来生成的文件
    、、、
    yarn add clean-webpack-plugin -D
    、、、
-设置webback-dev-server，直接执行npx webpack-dev-server
    、、、
    yarn add webpack-dev-server -D
    、、、
##loader
    、、、
    yarn add style-loader css-loader -D

    npm install --save-dev less-loader less
    
    、、、
-安装
-配置
