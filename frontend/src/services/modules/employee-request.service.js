import ApiService from '../api.service'

const EmployeeRequestService = {
  resourceUrl: process.env.VUE_APP_URL + '/api/employee-requests',

  async getAllEmployeeRequests (employee_id, id) {
    let formRequests = []
    if (!id) 
      formRequests = await ApiService.get(`${this.resourceUrl}/${employee_id}`)
    else 
      formRequests = await ApiService.get(`${this.resourceUrl}/${employee_id}/${id}`)
      
    return formRequests.data
  }
}

export default EmployeeRequestService