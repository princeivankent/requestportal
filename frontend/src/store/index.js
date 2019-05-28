import Vue from 'vue'
import Vuex from 'vuex'
import login from './login.module';

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {login, ...modules}
})
