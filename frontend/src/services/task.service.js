import ApiService from './api.service'

const TaskService = {
  resourceUrl: process.env.VUE_APP_URL + '/api/tasks',

  async getAllTasks () {
    const response = await ApiService.get(this.resourceUrl)
    return response
  }
}

export default TaskService