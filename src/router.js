/* global Vue */
import Router from 'vue-router'
import Hello from '@/views/hello'
import Main from '@/views/Main'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
