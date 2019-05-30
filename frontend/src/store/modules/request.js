import { RequestService, RequestError } from '../../services/modules/request.service'
import ItemService from '../../services/modules/item.service'
import _ from 'lodash'

const request = {
  namespaced: true,

  state: {
    submission: false,
    submissionError: {},
    submissionErrorCode: '',
    items: {}
  },

  getters: {
    getAllItems: (state) => state.items
  },

  mutations: {
    SUBMIT_LOADER (state) {
      state.submission = true
      state.submissionError = ''
      state.submissionErrorCode = ''
    },

    SUBMIT_SUCCESS (state) {
      state.submission = false
    },

    SUBMIT_ERROR (state,  {errorCode, errorMessage}) {
      state.submission = false
      state.submissionError = errorMessage
      state.submissionErrorCode = errorCode
    },

    // -------------------------
    STORE_ITEMS (state, items) {
      state.items = items
    },

    SET_DEFAULT_ITEMS (state, items) {
      state.items = items
    },

    SET_TARGET_DATE (state, payload) {
      state.submissionError.items = {}
      state.items.requested_items[payload.index].target_date = payload.target_date
    },

    SET_SELECT_ITEM (state, payload) {
      state.items.requested_items[payload.index].id = payload.status
    },

    SET_APPROVER_ID (state, id) {
      state.submissionError.approver_id = ''
      state.items.approver_id = id
    },

    SET_CREATED_BY (state, id) {
      state.items.created_by = id
    },

    SET_JUSTIFICATION (state, justification) {
      state.submissionError.justification = ''
      state.items.justification = justification
    }
  },

  actions: {

    async setDefaultItems ({commit}, id) {
      const {data} = await ItemService.getAllItems()
      await commit('SET_DEFAULT_ITEMS', data)
      return commit('SET_CREATED_BY', id)
    },

    async getItems ({commit}, request_code) {
      if (request_code) {
        const {data} = await RequestService.getAllRequests(request_code)
        return commit('STORE_ITEMS', data)
      }

      return {}
    },

    async submitFormRequest ({commit, state}) {
      commit('SUBMIT_LOADER')

      try {
        await RequestService.submitRequest(state.items)
        await commit('SUBMIT_SUCCESS')

        return true
      } 
      catch (e) {
        if (e instanceof RequestError) {
          commit('SUBMIT_ERROR', {errorCode: e.errorCode, errorMessage: e.message})
        }

        return false
      }
    }
  }
}

export default request