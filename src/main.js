import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import * as api from './utils/request'
import Cube from 'cube-ui'
import 'amfe-flexible'

Vue.prototype.$api = api

Vue.config.productionTip = false

Vue.use(Cube)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
