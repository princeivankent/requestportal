import ApiService from '../api.service'

const EmployeeRequestService = {
  resourceUrl: process.env.VUE_APP_URL + '/api/employee-requests',

  async getAllEmployeeRequests (employee_id) {
    const {data} = await ApiService.get(`${this.resourceUrl}/${employee_id}`)
    return data
  },
}

export default EmployeeRequestService