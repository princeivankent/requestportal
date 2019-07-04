import ApiService from '../api.service'

const ApproverService = {
  resourceUrl: `/api/approvers`,

  async getAllApprovers (employee_id) {
    const response = await ApiService.get(`${this.resourceUrl}/${employee_id}`)
    return response
  }
}

export default ApproverService