<template>
  <div class="container">
    <image class="img" :src="good.img"></image>
    <text class="title">{{ good.tlt }}</text>
    <text class="info">{{ good.info }}</text>
    <text class="price">￥{{ good.price }}</text>
  </div>
</template>
<script>
export default {
  name: 'c-good-card',
  props: {
    good: {}
  }
}
</script>
<style>
  .container {
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
  }
  .img {
    background-color: #efefef;
    width: 286px;
    height: 286px;
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
    width: 286px;
    margin-top: 8px;
    color: #7f7f7f;
    overflow: hidden;
    text-overflow: ellipsis;
    lines: 1;
    white-space: nowrap;
  }
  .price{
    font-size: 28px;
    width: 286px;
    margin-top: 16px;
    color:#b4282d;
    overflow: hidden;
    lines:1;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
