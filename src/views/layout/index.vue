<template>
  <div class="my-container">
    <side-bar></side-bar>
    <div class="main-container">
      <header-nav></header-nav>
      <main-content></main-content>
    </div>
  </div>
</template>

<script>
  // import { SideBar, HeaderNav, MainContent } from './components'
  import SideBar from './components/SideBar'
  import HeaderNav from './components/HeaderNav'
  import MainContent from './components/MainContent'
  export default {
    name:'index',
    components:{
      SideBar,
      HeaderNav,
      MainContent
    }
  }
</script>

<style lang="scss">
  .my-container{
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    .main-container{
      width: calc(100% - 200px);
      height: 100%;
      overflow: hidden;
      background-color: #f5f5f5;
    }
  }


</style>
