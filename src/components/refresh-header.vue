<template>
  <refresh class="refresh" @refresh="onRefresh" @pullingdown="onPullingDown" :display="refreshing ? 'show' : 'hide'">
    <text class="refresh-indicator-text">{{ refreshIndicatorText }}</text>
  </refresh>
</template>
<script>
export default {
  name: 'refresh-header',
  data () {
    return {
      refreshIndicatorText: '',
      refreshing: false
    }
  },
  methods: {
    onPullingDown (event) {
      if (event.pullingDistance < 200) {
        this.refreshIndicatorText = '下拉刷新'
      } else {
        this.refreshIndicatorText = '释放刷新'
      }
    },
    onRefresh () {
      this.refreshIndicatorText = '刷新中...'
      this.refreshing = true
      this.$emit('onrefresh')
    }
  }
}
</script>
<style scoped>
  .refresh-indicator-text {
    height: 150px;
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
</style>
