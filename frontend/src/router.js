import Vue from 'vue'
import VueRouter from 'vue-router'
import { TokenService } from './services/storage.service'
import { getUrlParams } from './helpers/url-params.service'

const Main     = () => import(/* webpackChunkName: "main" */ './layouts/Main')
const Login    = () => import(/* webpackChunkName: "login" */ './views/auth/Login')
const Register = () => import(/* webpackChunkName: "register" */ './views/auth/Register')

const Home = () => import(/* webpackChunkName: "home" */ './views/Home')
const RequestForms = () => import(/* webpackChunkName: "request" */ './views/RequestForms')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_NAME,
  routes: [
    { path: '*', redirect: '/home' },
    { path: '/', redirect: '/home'},
    { 
      path: '/', 
      component: Main,
      meta: { 
        requiresAuth: true 
      },
      children: [
        { path: 'home', component: Home },
        { path: 'your-requests', component: RequestForms }
      ]
    },
    { 
      path: '/login',
      component: Login,
      meta: { 
        forVisitors: true 
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        forVisitors: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const forVisitors = to.matched.some(record => record.meta.forVisitors)
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const loggedIn = !!TokenService.getToken()

  if (forVisitors) {
    if (loggedIn) {
      if (getUrlParams()) {
        console.log('user has been relogged in')
        TokenService.removeToken()
        next({ path: '/login', params: { emp_no: getUrlParams.emp_no, password: getUrlParams.password }})
      }
      else {
        next()
      }
    }
    else next()
  }
  else if (requiresAuth) {
    if (!loggedIn) {
      window.location = `http://${window.location.hostname}/ipc_central`
      next();
    }
    else next()
  }
})

export default router