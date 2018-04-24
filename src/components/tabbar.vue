<template>
  <div class="container">
    <div class="tab-line"></div>
    <div class="tabbar">
      <tab-item v-for="item in tabItems"
                :key="item.index"
                v-bind="item"
                :ref="'item' + item.index"
                @tab-item-on-click="tabItemOnClick"
      >
      </tab-item>
    </div>
  </div>
</template>
<script>
import TabItem from './tabitem.vue'
export default {
  name: 'tab-bar',
  components: {TabItem},
  props: {
    tabItems: {
      default: []
    }
  },
  data () {
    return {
      selectedIndex: 0
    }
  },
  created () {
    this.select(this.selectedIndex)
  },
  mounted () {
    for (let i = 0; i < this.tabItems.length; i++) {
      let tabItem = this.tabItems[i]
      const tabItemEl = this.$refs[`item${i}`][0]
      tabItemEl.setNum(parseInt(tabItem.dot))
    }
  },
  methods: {
    tabItemOnClick (params) {
      this.selectedIndex = params.index
      this.select(this.selectedIndex)
      this.$emit('tabItemClick', params.index)
    },
    select (index) {
      this.$emit('tabItemClick', index)
      for (let i = 0; i < this.tabItems.length; i++) {
        let tabItem = this.tabItems[i]
        if (i === index) {
          tabItem.selected = true
        } else {
          tabItem.selected = false
        }
      }
    }
  }
}
</script>
<style scoped>
  .container {
    width: 750px;
    flex-direction: column;
  }
  .tab-line {
    position: fixed;
    bottom: 100px;
    width: 750px;
    height: 1px;
    background-color: #efefef;
  }
  .tabbar {
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 99px;
    flex-wrap: nowrap;
    flex-direction: row;
  }
</style>
