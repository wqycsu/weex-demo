<template>
  <div class="container">
    <image class="img" resize="cover" :src="item.bg"></image>
    <text class="name">{{ item.name }}</text>
    <div class="price">
      <text class="price-num">{{ item.price }}</text>
      <text class="price-text">元起</text>
    </div>
    <text v-if="item.state" class="state">{{ item.state }}</text>
  </div>
</template>

<script>
export default {
  name: 's-good-card',
  props: {
    item: {}
  }
}
</script>

<style scoped>
  .container {
    width: 350px;
    height: 226px;
    padding: 20px;
    background-color: #efefef;
    margin: 5px;
  }
  .name {
    position: relative;
    color: #333333;
    font-size: 28px;
  }
  .price {
    flex-direction: row;
    position: relative;
    margin-top: 10px;
    align-items: flex-end;
  }
  .price-num {
    font-size: 36px;
    color: #333333;
  }
  .price-text {
    color: #333333;
    font-size: 24px;
  }
  .state {
    position: relative;
    font-size: 20px;
    color: #b8a989;
    width: 70px;
    padding: 5px;
    margin-top: 10px;
    line-height: 20px;
    text-align: center;
    border-width: 1px;
    border-color: #b8a989;
    border-radius: 4px;
  }
  .img {
    width: 350px;
    height: 226px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
