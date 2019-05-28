import ApiService from '../api.service'

const RequestService = {
  resourceUrl: process.env.VUE_APP_URL + '/api/items',

  async getAllItems (request_code) {
    const url = request_code ? `${this.resourceUrl}/${request_code}` : `${this.resourceUrl}`
    const response = await ApiService.get(url)
    return response
  }
}

export default RequestService