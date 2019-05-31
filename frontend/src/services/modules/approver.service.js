import ApiService from '../api.service'

const ApproverService = {
  resourceUrl: process.env.VUE_APP_URL + '/api/approvers',

  async getAllApprovers (employee_id) {
    const response = await ApiService.get(`${this.resourceUrl}/${employee_id}`)
    return response
  }
}

export default ApproverService