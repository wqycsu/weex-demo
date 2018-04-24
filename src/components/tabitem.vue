<template>
  <div class="bar-item" @click="onTabItemClick">
    <text class="icon iconfont" :class="[ selected ? 'active' : '' ]">{{ icon }}</text>
    <text class="text" :class="[ selected ? 'active' : '' ]">{{ title }}</text>
    <div v-if="shouldShow" class="dot-c">
      <text v-if="needNum" class="notice">{{ dot }}</text>
      <text v-else class="dot"></text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tab-item',
  props: {
    index: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    needNum: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dot: '',
      shouldShow: false
    }
  },
  methods: {
    setNum (num) {
      if (num <= 0) {
        this.dot = ''
      } else {
        this.dot = num + ''
      }
    },
    onTabItemClick () {
      var params = {
        index: this.index
      }
      this.$emit('tabItemOnClick', params)
    }
  },
  watch: {
    dot: function (num) {
      if (num) {
        let i = parseInt(num)
        if (i && i > 0) {
          this.shouldShow = true
        } else {
          this.shouldShow = false
        }
      } else {
        this.shouldShow = false
      }
    }
  }
}
</script>

<style scoped>
  .bar-item {
    flex: 1;
  }
  .text, .icon {
    color: #666666;
    text-align: center;
  }
  .iconfont {
    font-family: iconfont;
  }
  .icon {
    padding-top: 14px;
    font-size: 38px;
  }
  .text {
    font-size: 22px;
    padding-top: 2px;
  }
  .active {
    color: #b4282d
  }
  .notice {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    font-size: 26px;
    line-height: 30px;;
    text-align: center;
    color: #ffffff;
    background-color: #ff0000;
  }
  .dot {
    height: 15px;
    width: 15px;
    border-radius: 100%;
    color: #ffffff;
    background-color: #ff0000;
  }
  .dot-c {
    position: absolute;
    top:5px;
    right: 40px;
    width: 30px;
    height: 30px;
  }
</style>
