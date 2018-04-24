<template>
  <div id="div" :class="[mounted ? 'container_mounted' : 'container']" ref="container">
    <text class="message">Now, let's use Vue.js to build your Weex app.</text>
  </div>
</template>
<script>
/* eslint-disable no-undef */
import CButton from '../components/button'
export default {
  components: {CButton},
  data () {
    return {
      mounted: false
    }
  },
  computed: {
  },
  mounted () {
    if (!this.isWeb()) {
      this.setNavTitle('Hello')
      const animation = weex.requireModule('animation')
      animation.transition(this.$refs.container, {
        styles: {
          left: 0
        },
        duration: 300,
        timingFunction: 'ease-in-out',
        needLayout: false,
        delay: 0
      }, function () {

      })
    } else {
      this.mounted = true
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    changeClass () {
      // eslint-disable-next-line no-undef
    }
  }
}
</script>
<style scoped>
  .container {
    background-color: #dddddd;
    transition: left 0.3s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 750px;
  }
  .container_mounted {
    left: 0;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
    text-overflow:clip;
    width: 750px;
  }
  .button_p {
    flex-direction: row;
    flex-wrap: nowrap;
  }
</style>
