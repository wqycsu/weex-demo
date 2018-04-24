<template>
  <div class="header-wrapper">
    <div class="header-icon-text">
      <text class="icon">&#xe612;</text>
      <text class="text">扫一扫</text>
    </div>
    <text class="header-search icon">&#xe628; 搜索好商品，无限好物</text>
    <div class="header-icon-text">
      <text class="icon">&#xe618;</text>
      <text class="text">消息</text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-header'
}
</script>
<style scoped>
  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 114px;
    padding-top: 40px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    z-index: 101;
    background-color: #fafafa;
  }
  .header-icon-text {
    height: 80px;
    width: 96px;
  }
  .icon {
    font-family: iconfont;
    font-size: 32px;
    text-align: center;
    color: #666666
  }
  .text {
    font-size: 18px;
    text-align: center;
    color: #666666
  }
  .header-search {
    flex: 1;
    height: 60px;
    font-size: 26px;
    padding-top: 13px;
    background-color: #ededed;
    border-radius: 8px;
  }
</style>
