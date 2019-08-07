import store from '../../store'

export const checkAuthParams = (queryParams, next) => {
  if (queryParams.employee_number && queryParams.password) {
    // console.log(queryParams);
    store.dispatch('login/loginAction', queryParams)
  } else {
    next()
  }
}