# project

> '开发规范'

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 原本是想练习一下vue的开发规范，觉得并没什么用处，就想着自己按照 vue 开发规范搭建一套代码

# 首先安装 npm i vue-cli -g

# 基于 webpack 搭建项目  vue init webpack your file name

# 完成之后 npm run dev 启动项目 npm run bulid 打包项目

# 这里我想拥有自己的一套后台管理系统

# 所以我首先引入了 element-ui 

# 配置路由 先把整体后台系统的框架搭建出来

# 这里用到了 scss 所以要安装相应插件、并对其配置

# 首先在 app 实例中新增组件 对后台系统进行布局

# 侧边栏导航用的是 element 中的菜单导航组件 这里需要配置菜单列表 并且相应的要在路由中配置相关的页面组件

###  这里的组件要与菜单列表中的路径配置一一对应
