import EmployeeRequestService from '../../services/modules/employee-request.service'
import ApproverService from '../../services/modules/approver.service';

const requestForm = {
  state: {
    items: [],
    request_form: {},
    approvers: [],
    modalState: false,
    loadingState: false
  },

  getters: {
    getEmployeeRequests: (state) => state.items,
    getRequestForm: (state)  => state.request_form,
    getAllApprovers: (state) => state.approvers,
    getModalState: (state) => state.modalState,
    getLoadingState: (state) => state.loadingState
  },

  mutations: {
    SET_LOADER (state, payload) {
      state.loadingState = payload
    },

    SET_DEFAULT_ITEMS (state, payload) {
      state.items = payload.items
    },

    SET_MODAL_STATE (state, payload) {
      state.modalState = payload
    },

    SET_REQUEST_FORM (state, payload) {
      state.request_form = payload
    },

    SET_APPROVERS (state, approvers) {
      state.approvers = approvers
    },

    SET_CLEAR_FORM (state) {
      state.request_form = {}
    }
  },

  actions: {
    async setDefaultItemsAction ({commit, state}, payload) {
      if (state.items.length == 0) {
        commit('SET_LOADER', true)
      }

      const result = await EmployeeRequestService.getAllEmployeeRequests(payload.employee_id, payload.control_number)
      commit('SET_DEFAULT_ITEMS', {items: result})
      commit('SET_LOADER', false)
    },

    async setRequestbyCodeAction ({commit}, payload) {
      const request = await payload.requests.find(item => item.id === payload.id)
      commit('SET_REQUEST_FORM', request)

      return true
    },

    async setApproversAction ({commit}, employee_id) {
      const {data} = await ApproverService.getAllApprovers(employee_id)
      return commit('SET_APPROVERS', data)
    },

    setModalStateAction ({commit}, payload) {
      if (!payload) {
        commit('SET_CLEAR_FORM')
      }
      
      commit('SET_MODAL_STATE', payload)
    }
  }
}

export default requestForm