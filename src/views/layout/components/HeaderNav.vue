<template>
    <div class="header-nav">
      <h3 class="header-title">后台管理系统</h3>
    </div>
</template>

<script>
  export default {
    name:'HeaderNav'
  }
</script>

<style lang="scss" scoped>
.header-nav{
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  .header-title{
    margin:0;
    margin-left: 50px;
    line-height: 60px;
  }
}
</style>
