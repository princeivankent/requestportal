import RequestService from '../../services/modules/request.service'
import ItemService from '../../services/modules/item.service'
import _ from 'lodash'

const request = {
  namespaced: true,

  state: {
    items: {}
  },

  getters: {
    getAllItems: (state) => state.items
  },

  mutations: {
    STORE_ITEMS (state, items) {
      state.items = items
    },

    SET_DEFAULT_ITEMS (state, items) {
      state.items = items
    },

    SET_TARGET_DATE (state, payload) {
      state.items.requested_items[payload.index].target_date = payload.target_date
    },

    SET_SELECT_ITEM (state, payload) {
      state.items.requested_items[payload.index].id = payload.status
    }
  },

  actions: {
    async setDefaultItems ({commit}) {
      const {data} = await ItemService.getAllItems()
      commit('SET_DEFAULT_ITEMS', data)
    },

    async getItems ({commit}, request_code) {
      if (request_code) {
        const {data} = await RequestService.getAllRequests(request_code)
        return commit('STORE_ITEMS', data)
      }

      return {}
    }
  }
}

export default request