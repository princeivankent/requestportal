import ApiService from '../api.service'

class RequestError extends Error {
  constructor (errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.errorCode = errorCode
    this.message = message
  }
}

const RequestService = {
  resourceUrl: `/api/requests`,

  async getAllRequests (control_number) {
    const url = control_number ? `${this.resourceUrl}/${control_number}` : `${this.resourceUrl}`
    const response = await ApiService.get(url)
    return response
  },

  async submitRequest (request_form) {

    const items = [];
    request_form.requested_items.forEach(element => {
      if (element.target_date) {
        items.push({
          item_id: element.item.id,
          target_date: element.target_date
        })
      }
    });

    const params = {
      created_by: request_form.created_by,
      approver_id: request_form.approver_id,
      justification: request_form.justification,
      items
    };

    try {
      const {data} = await ApiService.post(this.resourceUrl, params)
      return data
    }
    catch (error) {
      throw new RequestError(error.response.status, error.response.data.form_errors)
    }
  }
}

export { RequestService, RequestError }