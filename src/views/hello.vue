<template>
  <div id="div" class="container" ref="container">
    <recycle-list for="(item, index) in itemList" :key="index" switch="type" @loadmore="loadMore" loadmoreoffset="100">
      <cell-slot case="0">
        <scroller class="topic-header" scroll-direction="horizontal" show-scrollbar="false">
          <div class="header-item" v-for="(data, i) in item.item" :key="i">
            <image class="item-image" resize="cover" :src="data.img"></image>
            <text class="item-name">{{ data.name }}</text>
          </div>
        </scroller>
      </cell-slot>
      <cell-slot case="1">
        <div class="body-item">
          <div class="author-info">
            <image class="author-head" :src="item.item.autherImg"></image>
            <text class="author-name">{{ item.item.auther }}</text>
          </div>
          <image class="item-image-1" :src="item.item.img"></image>
          <div class="title-info">
            <text class="item-title">{{ item.item.tlt }}</text>
            <text v-if="item.item.price" class="price">{{ item.item.price }}元起</text>
          </div>
          <text class="item-info">{{ item.item.info }}</text>
        </div>
      </cell-slot>
      <cell-slot case="2">
        <div class="body-item">
          <div class="author-info">
            <image class="author-head" :src="item.item.autherImg"></image>
            <text class="author-name">{{ item.item.auther }}</text>
          </div>
          <div class="item-image-container">
            <image class="item-image-main" :src="item.item.img[0]"></image>
            <div class="sub-image-container">
              <image class="item-image-sub" :src="item.item.img[1]"></image>
              <image class="item-image-sub" :src="item.item.img[2]"></image>
            </div>
          </div>
          <div class="title-info">
            <text class="item-title">{{ item.item.tlt }}</text>
            <text v-if="item.item.price" class="price">{{ item.item.price }}元起</text>
          </div>
          <text class="item-info">{{ item.item.info }}</text>
        </div>
      </cell-slot>
    </recycle-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mounted: false,
      itemList: []
    }
  },
  computed: {
  },
  created () {
    this.get('api/topic/index', res => {
      let result = res.data.result
      this.topics = result['topics']
      let topic = {}
      topic.type = '0'
      topic.item = result['topics']
      this.itemList.push(topic)
      this.get('api/topic/articles', res => {
        let result = res.data.result
        const articles = result['articles']
        for (let i = 0; i < articles.length; i++) {
          let article = {}
          if (typeof articles[i].img === 'string') {
            article.type = '1'
            article.item = articles[i]
          } else if (typeof articles[i].img === 'object' && articles[i].img.length >= 3) {
            article.type = '2'
            article.item = articles[i]
          }
          this.itemList.push(article)
        }
        console.log(JSON.stringify(this.itemList))
      })
    })
  },
  mounted () {
    if (!this.isWeb()) {
      this.setNavTitle('专题')
      // eslint-disable-next-line no-undef
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
    loadMore () {
      this.toast('load more')
      this.$nextTick(() => {
        let data = [
          {
            item: {
              auther: '居家组：朵朵',
              autherImg: 'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64',
              img: [
                'https://yanxuan.nosdn.127.net/15040927525260414.jpg',
                'https://yanxuan.nosdn.127.net/15040927586650416.jpg',
                'https://yanxuan.nosdn.127.net/15040927556820415.jpg'
              ],
              info: '连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...',
              price: '',
              tlt: '初秋，最想用它来裸睡'
            },
            type: '2'
          },
          {
            item: {
              auther: '严选推荐',
              autherImg: 'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',
              img: 'http://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg',
              info: '那些值得珍藏的严选手作好物',
              price: '29',
              tlt: '不为繁华易匠心'
            },
            type: '1'
          }
        ]
        this.itemList.push(...data)
      })
    }
  }
}
</script>
<style scoped>
  .container {
    background-color: #dddddd;
  }
  .container_mounted {
    left: 0;
  }
  .topic-header {
    flex-direction: row;
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 12px;
  }
  .header-item {
    width: 275px;
    height: 150px;
    margin: 10px;
    justify-content: center;
    align-items: center;
  }
  .item-image {
    width: 270px;
    height: 150px;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .item-name {
    font-size: 28px;
    overflow: hidden;
    text-align: center;
    color:#fff;
    lines:1;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-image-1 {
    width: 750px;
    height: 380px;
  }
  .body-item {
    width: 750px;
    flex-direction: column;
    background-color: #ffffff;
    margin-bottom: 12px;
  }
  .author-info {
    width: 750px;
    padding: 20px;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .author-head {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .author-name {
    text-align: center;
    margin-left: 10px;
    font-size: 24px;
    color: #333333;
    lines: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-info {
    width: 750px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
  }
  .item-title {
    font-size: 28px;
    color: #333333;
  }
  .price {
    font-size: 28px;
    color: #b4282d;
    position: absolute;
    right: 20px;
  }
  .item-info {
    font-size: 24px;
    color: #7f7f7f;
    width: 750px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
  .item-image-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .item-image-main {
    flex: 1;
    height: 380px;
  }
  .sub-image-container {
    width: 190px;
    height: 380px;
  }
  .item-image-sub {
    width: 190px;
    height: 188px;
    margin-left: 3px;
    margin-bottom: 3px;
  }
</style>
