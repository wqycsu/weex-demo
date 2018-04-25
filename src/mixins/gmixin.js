/**
 * Created by weiquanyun on 2018/4/9.
 */
// eslint-disable-next-line no-undef
const stream = weex.requireModule('stream')
export default {
  methods: {
    jump (to) {
      if (to) {
        if (this.$router) {
          this.$router.push(to)
        }
      }
    },
    setNavTitle (title, needBack = false) {
      // eslint-disable-next-line no-undef
      const navigator = weex.requireModule('navigator')
      navigator.setNavBarTitle(title)
      if (needBack) {
        navigator.setNavBarLeftItem('back')
      } else {
        navigator.setNavBarLeftItem('null')
      }
    },
    toast (message) {
      // eslint-disable-next-line no-undef
      const modal = weex.requireModule('modal')
      modal.toast({
        message: message,
        duration: 3
      })
    },
    isWeb () {
      // eslint-disable-next-line no-undef
      const platform = weex.config.env.platform
      return !platform || platform.toLowerCase() === 'web'
    },
    initIconFont () {
      // eslint-disable-next-line no-undef
      let domModule = weex.requireModule('dom')
      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': "url('http://at.alicdn.com/t/font_627710_3zxmndg2v6y1fw29.ttf')"
      })
    },
    get (api, callback) {
      return stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'http://cdn.zwwill.com/yanxuan/' + api
      }, callback)
    }
  }
}
