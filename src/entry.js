/* global Vue */
import mixins from '@/mixins/gmixin.js'
/* weex initialized here, please do not move this line */
const router = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
Vue.config.debug = true

Vue.mixin(mixins)

new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
