<template>
  <div class="wrapper" @click="onTabItemSelect">
    <text class ="text-common" :class="[selected ? 'text-selected' : 'text']">{{ text }}</text>
  </div>
</template>
<script>
export default {
  name: 'header-tab-item',
  props: {
    index: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onTabItemSelect () {
      this.$emit('onTabItemSelect', this.index)
    }
  }
}
</script>
<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
    height: 54px;
    width: 110px;
  }
  .text-common {
    font-size: 26px;
    text-align: center;
  }
  .text {
    color: #666666;
  }
  .text-selected {
    color: #b4282d
  }
</style>
