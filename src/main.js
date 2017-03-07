import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
