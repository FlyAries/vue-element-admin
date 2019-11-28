<template>
    <div class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  export default {
    name:'MainContent'
  }
</script>

<style lang="scss" scoped>
  .app-main{
    /*min-height: calc(100vh - 50px);*/
    /*width: 100%;*/
    /*overflow: hidden;*/
    /*box-shadow: 0 1px 4px rgba(0,0,0,0.3);*/
    margin: 20px;
  }
</style>
