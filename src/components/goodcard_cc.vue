<template>
  <div class="container">
    <image class="img" :src="good.img"></image>
    <text class="info">{{ good.info }}</text>
    <text class="title">{{ good.tlt }}</text>
    <text class="price">￥{{ good.price }}</text>
  </div>
</template>
<script>
export default {
  name: 'cc-good-card',
  props: {
    good: {}
  }
}
</script>
<style>
  .container {
    flex-direction: column;
    margin: 10px;
  }
  .img {
    background-color: #efefef;
    width: 350px;
    height: 350px;
  }
  .title {
    font-size: 28px;
    color: #333333;
    width: 286px;
    margin-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    lines: 1;
    white-space: nowrap;
  }
  .info {
    font-size: 24px;
    width: 350px;
    height: 65px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #9f8a60;
    overflow: hidden;
    text-overflow: ellipsis;
    lines: 1;
    white-space: nowrap;
    background-color: #F1ECE2;
  }
  .price{
    font-size: 28px;
    width: 286px;
    margin-top: 8px;
    color:#b4282d;
    overflow: hidden;
    lines:1;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
