<template>
  <div>
    <text @click="click" class="button-view">{{ text }}</text>
  </div>
</template>
<script>
export default {
  name: 'c-button',
  props: {
    text: String,
    required: true
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
<style>
  .button-view {
    background-color: #00B5FB;
    border-radius: 40px;
    padding: 20px;
    color: #FFFFFF;
    text-align: center;
    margin: 10px;
  }
  .button-view:active {
    background-color: #BBBFF0;
    border-radius: 40px;
    padding: 20px;
    color: #FFFFFF;
    text-align: center;
    margin: 10px;
  }
</style>
