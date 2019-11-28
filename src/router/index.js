import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: "/",
      component: Layout,
      redirect: "/home",
      name: "Home",
      hidden: true,
      alwaysShow: false,
      children:[
        {
          path: 'home',
          component: () => import('@/views/home/home'),
          meta: {title: '首页'}
        }
      ]
    },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/home',
    //   name: 'home',
    //   // meta:{title: '首页'},
    //   hidden:true,
    //   children: [
    //     {
    //       path: 'home',
    //       name:'home',
    //       component: () => import('@/views/home/home'),
    //       meta: {title: '首页'}
    //     }
    //   ]
    // },
    //charts
    {
      path: '/charts',
      component: Layout,
      redirect: '/charts/pieChart',
      name: 'charts',
      meta: {title: '图表'},
      children: [
        {
          path: 'pieChart',
          name: 'pieChart',
          component: () => import('@/views/charts/pieChart'),
          meta: {title: '饼图'}
        },
        {
          path: 'lineChart',
          name: 'lineChart',
          component: () => import('@/views/charts/lineChart'),
          meta: {title: '条形图'}
        }
      ]
    },
  ]
})
