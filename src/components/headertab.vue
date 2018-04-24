<template>
  <div class="wrapper">
    <div class="scroller-wrapper">
      <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false">
        <div class="indicator" :style="indicatorPosition" ref="indicator"></div>
        <header-tab-item v-for="tabItem in tabItems"
                         :key="tabItem.index"
                         v-bind="tabItem"
                         :ref="'item' + tabItem.index"
                         @on-tab-item-select="onTabItemSelect">
        </header-tab-item>
      </scroller>
    </div>
    <div class="more" @click="moreItemClick">
      <text class="iconfont" ref="more">{{ moreIcon }}</text>
    </div>
  </div>
</template>
<script>
import HeaderTabItem from './headertabitem'
export default {
  name: 'header-tab',
  components: {HeaderTabItem},
  props: {
    tabItems: {
      default: []
    }
  },
  data () {
    return {
      selectedIndex: 0,
      indicatorPosition: {},
      moreClicked: false,
      moreIcon: '\ue669'
    }
  },
  mounted () {
    this.computeIndicatorPosition()
    this.tabItems[this.selectedIndex].selected = true
  },
  methods: {
    computeIndicatorPosition () {
    },
    onTabItemSelect (index, shouldScrollScroller = false) {
      if (this.selectedIndex === index) {
        return
      }
      this.selectedIndex = index
      for (let i = 0; i < this.tabItems.length; i++) {
        if (i === index) {
          this.tabItems[i].selected = true
        } else {
          this.tabItems[i].selected = false
        }
      }
      // eslint-disable-next-line no-undef
      const animation = weex.requireModule('animation')
      animation.transition(this.$refs.indicator, {
        styles: {
          transform: 'translate(' + (this.selectedIndex) * 110 + 'px, 0)'
        },
        duration: 300,
        timingFunction: 'ease'
      }, () => {})
      if (shouldScrollScroller) {
        // eslint-disable-next-line no-undef
        const dom = weex.requireModule('dom')
        dom.scrollToElement(this.$refs[`item${index}`][0], {})
      }
    },
    moreItemClick () {
      if (!this.moreClick) {
        this.moreClick = true
        this.moreIcon = '\ue66a'
      } else {
        this.moreClick = false
        this.moreIcon = '\ue669'
      }
      this.$emit('moreIconClick')
    }
  }
}
</script>
<style>
  .wrapper {
    flex-direction: row;
    position: fixed;
    top: 114px;
    left: 0;
    right: 0;
    height: 54px;
    z-index: 100;
    background-color: #fafafa;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
  }
  .scroller-wrapper {
    width: 650px;
  }
  .scroller {
    flex: 1;
    flex-direction: row;
    height: 54px;
  }
  .indicator {
    position: absolute;
    left: 15px;
    bottom: 0;
    width: 80px;
    height: 4px;
    background-color: #b4282d;
  }
  .iconfont {
    font-family: iconfont;
    text-align: center;
  }
  .more {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 52px;
    width: 100px;
    background-color: #fafafa;
    opacity: 0.9;
    box-shadow: -6px -4px 4px #fafafa;
  }
</style>
