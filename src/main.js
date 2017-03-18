import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import VueResource from 'vue-resource'
import vMediaQuery from 'v-media-query'


Vue.use(VueResource)

Vue.use(vMediaQuery)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
