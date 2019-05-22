import TaskService from '../../services/task.service'

const task = {
  namespaced: true,
  state: {
    tasks: [],
    task: {},
    form: {
      task: '',
      description: '',
      user_id: ''
    }
  },
  getters: {
    getAllTasks (state) {
      return state.tasks
    }
    // getCompletedTodos (state) {
    //   return state.todos.filter(item => item.is_completed)
    // }, 
    // getPendingTodos (state) {
    //   return state.todos.filter(item => !item.is_completed)
    // }
  },
  mutations: {
    FILL_TASKS (state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    async fillTasks ({commit}) {
      const tasks = await TaskService.getAllTasks()
      commit('FILL_TASKS', tasks.data)
    },
  }
}

export default task