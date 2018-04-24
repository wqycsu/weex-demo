<template>
  <div class="wrapper">
    <home-header></home-header>
    <header-tab :tabItems="tabs" @moreIconClick="moreIconClick" ref="headertab"></header-tab>
    <labels v-if="showMoreLabels" :labels="labels" ref="labelsRef" :style="{top: topOffset + 'px'}" @labelClick="labelClick"></labels>
    <scroller class="main-scroller" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore" show-scrollbar="false">
      <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <text class="refresh-indicator-text">{{ refreshIndicatorText }}</text>
      </refresh>
      <slider class="slider" auto-play="true">
        <div v-for="(image, index) in sliderLists" :key="index">
          <image class="slider-image" resize="cover" :src="image.src"></image>
        </div>
        <indicator class="indicator"></indicator>
      </slider>
      <div class="slogan">
        <text class="slogan-item">&#xe629; 网易自营品牌</text>
        <text class="slogan-item">&#xe629; 30天无忧退货</text>
        <text class="slogan-item">&#xe629; 48小时快速退款</text>
      </div>
      <div class="makers-block">
        <text class="makers-title iconfont">{{ makers.title }} &#xe63e;</text>
        <div class="makers-box">
          <s-good-card v-for="(item, index) in makers.items" :key="index" :item="item"></s-good-card>
        </div>
      </div>
      <goods-recommend class="goods-recommend-box" :type="0" :head="headerNew" :goods="goodsNew"></goods-recommend>
      <goods-recommend class="goods-recommend-box" :type="1" :head="headerHot" :goods="goodsHot"></goods-recommend>
      <div class="good-list-container">
        <text class="good-list-title">猜你喜欢</text>
        <div class="good-list-box">
          <cc-good-card v-for="(good, index) in goodsList" :key="index" :good="good"></cc-good-card>
        </div>
      </div>
      <loading class="loading" @loading="onloading" :display="loading ? 'show' : 'hide'">
        <text class="loading-indicator-text">加载中...</text>
      </loading>
    </scroller>
  </div>
</template>

<script>
import CButton from '../components/button'
import HomeHeader from '../components/homeheader'
import HeaderTab from '../components/headertab'
import Labels from '../components/labels'
import CGoodCard from '../components/goodcard_c'
import SGoodCard from '../components/goodcard_s'
import GoodsRecommend from '../components/goods-recommend'
import CcGoodCard from '../components/goodcard_cc'
// eslint-disable-next-line no-undef
const dom = weex.requireModule('dom')
// eslint-disable-next-line no-undef
const animation = weex.requireModule('animation')
export default {
  components: {CcGoodCard, GoodsRecommend, SGoodCard, CGoodCard, Labels, HeaderTab, CButton, HomeHeader},
  data () {
    return {
      tabs: [
        {
          index: 0,
          text: '推荐',
          selected: false
        },
        {
          index: 1,
          text: '限时购',
          selected: false
        },
        {
          index: 2,
          text: '新品',
          selected: false
        },
        {
          index: 3,
          text: '居家',
          selected: false
        },
        {
          index: 4,
          text: '餐厨',
          selected: false
        },
        {
          index: 5,
          text: '配件',
          selected: false
        },
        {
          index: 6,
          text: '服装',
          selected: false
        },
        {
          index: 7,
          text: '电器',
          selected: false
        },
        {
          index: 8,
          text: '洗护',
          selected: false
        },
        {
          index: 9,
          text: '杂货',
          selected: false
        }
      ],
      labels: ['推荐', '限时购', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货'],
      sliderLists: [],
      makers: {},
      headerNew: {},
      goodsNew: [],
      headerHot: {},
      goodsHot: [],
      goodsList: [],
      showMoreLabels: false,
      moreIconClicked: false,
      headerTabSize: {},
      labelsSize: {},
      topOffset: -300,
      refreshIndicatorText: '下拉刷新',
      refreshing: false,
      loading: false
    }
  },
  mounted () {
    this.setNavTitle('Awesome Project')
    this.computeHeadTabSize()
  },
  created () {
    this.get('api/home/index', res => {
      let result = res.data.result
      this.sliderLists = result['banners']
      this.makers = result['makers']
      this.headerNew = result['recommend']['head1']
      this.headerHot = result['recommend']['head2']
      this.goodsNew = result['recommend']['goods1']
      this.goodsHot = result['recommend']['goods2']
    })
    this.get('api/home/pullGoods', res => {
      let result = res.data.result
      this.goodsList = result['goods']
    })
  },
  methods: {
    moreIconClick () {
      if (!this.showMoreLabels) {
        this.showMoreLabels = true
      }
      this.moreIconClicked = !this.moreIconClicked
      this.showHideMoreLabels()
    },
    computeHeadTabSize () {
      dom.getComponentRect(this.$refs.headertab, option => {
        if (option.result) {
          this.headerTabSize = option.size
        } else {
          this.toast('getComponentRect of headerTag failed!')
        }
      })
    },
    showHideMoreLabels () {
      this.$nextTick(function () {
        if (this.moreIconClicked) {
          animation.transition(this.$refs.labelsRef, {
            styles: {
              transform: 'translate(0, ' + ((this.headerTabSize ? this.headerTabSize.bottom : 168) - this.topOffset) + 'px)'
            },
            duration: 300,
            timingFunction: 'ease-in-out',
            needLayout: true,
            delay: 0
          }, () => {
            dom.getComponentRect(this.$refs.labelsRef, option => {
              if (option.result) {
                this.labelsSize = option.size
              } else {
                this.toast('getComponentRect of labelsRef failed!')
              }
            })
          })
        } else {
          animation.transition(this.$refs.labelsRef, {
            styles: {
              transform: 'translate(0, ' + (this.labelsSize.top - this.labelsSize.height) + 'px)'
            },
            duration: 300,
            timingFunction: 'ease-in-out'
          }, () => {
            this.showMoreLabels = false
          })
        }
      })
    },
    closeLabels () {
      this.$refs.headertab.moreItemClick()
    },
    labelClick (index) {
      this.$refs.headertab.onTabItemSelect(index, true)
      this.closeLabels()
    },
    onpullingdown (event) {
      if (event.pullingDistance < 200) {
        this.refreshIndicatorText = '下拉刷新'
      } else {
        this.refreshIndicatorText = '释放刷新'
      }
    },
    onrefresh () {
      this.refreshIndicatorText = '刷新中...'
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 3000)
    },
    onloading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    onloadmore () {
      this.loading = true
      setTimeout(() => {
        this.goodsList.push(...this.goodsHot)
        this.loading = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
  .main-scroller {
    position: absolute;
    top: 168px;
    left: 0;
    right: 0;
  }
  .refresh {
    width: 750px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .refresh-indicator-text {
    height: 150px;
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .loading-indicator-text {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .slider {
    width: 750px;
    height: 400px;
  }
  .slider-image {
    width: 750px;
    height: 400px;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    item-size: 10px;

    item-color: #ffffff;
    item-selected-color: #b4282d;
  }
  .slogan {
    display: flex;
    background-color: #ffffff;
    flex-direction: row;
    height: 66px;
    align-items: center;
  }
  .slogan-item {
    font-family: iconfont;
    font-size: 26px;
    flex: 1;
    text-align: center;
    color: #b4282d;
  }
  .makers-block {
    margin-top: 12px;
    justify-content: center;
    background-color: #ffffff;
  }
  .makers-title {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 26px;
    font-size: 30px;
  }
  .makers-box {
    width: 750px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .goods-recommend-box {
    position: relative;
    background-color: #ffffff;
    margin-top: 10px;
    padding-bottom: 15px;
  }
  .iconfont {
    font-family: iconfont;
  }
  .good-list-container {
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding-top: 30px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .good-list-title {
    text-align: center;
    color:#333333;
    width: 750px;
    padding: 10px;
    font-size: 30px;
  }
  .good-list-box {
    width: 750px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
