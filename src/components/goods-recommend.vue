<template>
  <div class="container">
    <div class="header">
      <image class="header-bg" resize="cover" :src="head.tltBg"></image>
      <text class="header-title" :class="[type === 0 ? 'title-new' : 'title-hot']">{{ head.tlt }}</text>
      <text class="header-nav iconfont" :class="[type === 0 ? 'nav-new' : 'nav-hot']">查看全部 &#xe604;</text>
    </div>
    <scroller class="goods-list" scroll-direction="horizontal" show-scrollbar="false">
      <c-good-card v-for="(good,index) in goods" :key="index" :good="good"></c-good-card>
      <div class="more-box">
        <text class="see-more">查看全部</text>
      </div>
    </scroller>
  </div>
</template>
<script>
import CGoodCard from './goodcard_c'
export default {
  components: {CGoodCard},
  name: 'goods-recommend',
  props: {
    head: {},
    goods: {},
    type: 0
  }
}
</script>
<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .container {
    flex-direction: column;
  }
  .header {
    justify-content: center;
    align-items: center;
    width: 750px;
    height: 260px;
  }
  .header-title {
    text-align: center;
    font-size: 34px;
  }
  .header-nav {
    text-align: center;
    font-size: 26px;
    width: 220px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
  }
  .title-new {
    color: #8ba0b6;
  }
  .nav-new {
    color: #8ba0b6;
    background-color: #D8E5F1;
  }
  .title-hot {
    color: #b4a078;
  }
  .nav-hot {
    color: #b4a078;
    background-color: #f4e9cb;
  }
  .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .goods-list {
    flex-direction: row;
    padding-bottom: 30px;
    padding-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .more-box {
    padding-left: 15px;
    padding-right: 15px;
  }
  .see-more{
    height: 286px;
    width: 286px;
    font-size: 28px;
    line-height: 40px;
    border-width: 6px;
    padding-top: 120px;
    padding-bottom: 120px;
    border-color: #f4f4f4;
    text-align: center;
  }
</style>
