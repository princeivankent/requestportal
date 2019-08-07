import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import Notifications from 'vue-notification'
import './helpers/filters'
import VueMeta from 'vue-meta'
import { appUrl } from './helpers/url'

Vue.use(VueMeta)
Vue.use(Notifications)
ApiService.init(appUrl())

// If token exists set header
if (TokenService.getToken()) ApiService.setHeader()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')