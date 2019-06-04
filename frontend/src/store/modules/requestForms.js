import EmployeeRequestService from '../../services/modules/employee-request.service'

const requestForms = {
  state: {
    items: {}
  },

  getters: {
    getEmployeeRequests: (state) => state.items
  },

  mutations: {
    SET_DEFAULT_ITEMS (state, payload) {
      state.items = payload.items
    }
  },

  actions: {
    async setDefaultItemsAction ({commit}, payload) {
      const result = await EmployeeRequestService.getAllEmployeeRequests(payload.employee_id)

      commit('SET_DEFAULT_ITEMS', {items: result})
    }
  }
}

export default requestForms