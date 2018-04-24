<template>
  <div class="wrapper" @stopPropagation="stopPropagation">
    <text class="label" v-for="(label, index) in labels" :key="index" @click="onLabelClick(index)">{{ label }}</text>
  </div>
</template>
<script>
export default {
  name: 'labels',
  props: {
    labels: []
  },
  methods: {
    onLabelClick (index) {
      this.$emit('labelClick', index)
    },
    stopPropagation: function (e) {
      return true
    }
  }
}
</script>
<style scoped>
  .wrapper {
    background-color: #ffffff;
    padding-bottom: 18px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .label {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-top: 18px;
    border-radius: 28px;
    margin-left: 12px;
    background-color: #f8f8f8;
    font-size: 24px;
    color: #333333;
    max-width: 700px;
  }
  .label:active {
    background-color: #c9c9c9;
  }
</style>
