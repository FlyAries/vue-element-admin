<template>
    <div class="sider-bar">
      <el-scrollbar style="height: 100%;">
        <el-menu class="el-menu-vertical-demo" :router="router" background-color="#2c3e50" text-color="#f1f1f1" active-text-color="#1890ff">
          <template v-for="(item,index) in menuList">
            <el-submenu :index="item.path" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="items.path" v-for="(items,ind) in item.children" :key="ind">{{items.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>

        </el-menu>
      </el-scrollbar>
    </div>
</template>

<script>
  export default {
    name:'SideBar',
    data(){
      return{
        router:true,
        menuList:[
          {
            hasChildren: true,
            title:'首页',
            path: '/',
            icon: "el-icon-news",
            children: [
              {
                name: '首页',
                path: '/home'
              }
            ]
          },
          {
            hasChildren: true,
            title: "图表",
            path: "/charts",
            icon: "el-icon-news",
            children: [{
              name: "饼图",
              path: "/charts/pieChart"
            },
              {
                name: "条形图",
                path: "/charts/lineChart"
              }
            ]
          },
        ]
      }
    },
    created () {
      console.log(this.$route)
    }
  }
</script>

<style lang="scss" scoped>
  .sider-bar{
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 0;*/
    width: 200px;
    height: 100%;
    overflow: hidden;
    background-color: #2c3e50;
    .el-scrollbar{
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
  }
</style>
