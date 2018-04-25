<template>
  <div class="wrapper" @androidback="back">
    <router-view class="content"></router-view>
    <tab-bar :tabItems="tabs" @tab-item-click="tabItemClick"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar'
// eslint-disable-next-line no-undef
var eventModule = weex.requireModule('event')
export default {
  components: {TabBar},
  name: 'App',
  data () {
    return {
      isBack: false,
      tabs: [{
        index: 0,
        icon: '\ue601',
        title: '首页',
        dot: '0',
        needNum: true,
        selected: true
      },
      {
        index: 1,
        icon: '\ue617',
        title: '专题',
        dot: '1',
        needNum: false,
        selected: false
      },
      {
        index: 2,
        icon: '\ue7f8',
        title: '分类',
        dot: '1',
        needNum: false,
        selected: false
      },
      {
        index: 3,
        icon: '\ue603',
        title: '购物车',
        dot: '5',
        needNum: true,
        selected: false
      },
      {
        index: 4,
        icon: '\ue602',
        title: '我',
        dot: '1',
        needNum: false,
        selected: false
      }],
      selectedIndex: 0,
      tabPaths: [
        '/main',
        '/hello',
        '/main',
        '/hello',
        '/main'
      ]
    }
  },
  created () {
    this.initIconFont()
  },
  watch: {
    '$route' (to, from) {
    }
  },
  methods: {
    back () {
      this.isBack = true
      let path = this.$route.path
      if (path === '/') {
        eventModule.quitApp()
      } else {
        this.$router.back()
      }
      console.log('back' + this.$route.path)
    },
    tabItemClick (index) {
      this.selectedIndex = index
      this.$router.push(this.tabPaths[index])
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .content {
    background-color: #f5f5f5;
    position: absolute;
    top: 0;
    bottom: 100px;
    left: 0;
    right: 0;
  }
</style>
