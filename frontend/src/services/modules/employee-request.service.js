import ApiService from '../api.service'

const EmployeeRequestService = {
  resourceUrl: `/api/employee-requests`,

  async getAllEmployeeRequests (employee_id, control_number) {
    let formRequests = []
    if (!control_number) 
      formRequests = await ApiService.get(`${this.resourceUrl}/${employee_id}`)
    else 
      formRequests = await ApiService.get(`${this.resourceUrl}/${employee_id}/${control_number}`)

    return formRequests.data
  }
}

export default EmployeeRequestService