import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import {store} from './store/index'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'

// Vue Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)

ApiService.init(process.env.VUE_APP_URL)

// If token exists set header
if (TokenService.getToken()) ApiService.setHeader()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')