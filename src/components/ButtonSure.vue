<template>
  <div>
    按钮确认组件
    <p>组件名称最好是多个单词</p>
    <!-- 总是用 key 配合 v-for;便于维护内部组件及其子树的状态 -->
    <!-- 永远不要把 v-if v-for 在同一元素上使用 -->
    <div v-if="flag" v-for="item in list" :key="item.id"></div>
  </div>
</template>

<script>
  export default {
    name: 'ButtonSure',
    //prop定义应该尽量详细，至少需要指定其类型
    prop: {
      params: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        //组件中的data必须是一个函数除了 new Vue 外的任何地方
        list: [{id: 1, name: '小米'}, {id: 2, name: '华为'}, {id: 3, name: '三星'}, {id: 4, name: '苹果'}, {id: 5, name: '锤子'}],
        flag:false
      }
    }
  }
</script>

<!-- 为组件样式设置作用域  更倾向于用 class 选择器 -->
<style scoped>

</style>
