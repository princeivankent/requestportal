<template>
  <div>
    <UiLoader
      v-if="!loginUsingIPC"
      :state="$store.state.login.authenticating"
      msg="Please wait, while authenticating..."
    >
    </UiLoader>
    <AuthNavigation />
    <div class="container-fluid mt-5">
      <div class="row justify-content-md-center">
        <div class="col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3">
          <template v-if="loginUsingIPC">
            <div class="alert alert-success" role="alert">
              <div class="alert-text">
                <i class="fa fa-sync fa-spin"></i>&nbsp;
                Please wait while <strong>authenticating...</strong>
              </div>
            </div>
          </template>
          <template v-else>
            <h3 class="text-center mb-4">Login</h3>
            <form @submit.prevent="login" novalidate>
              <div class="form-group">
                <label>Employee Number</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="Employee Number" 
                v-model="form.employee_number"
                autofocus
                >
              </div>
              <div class="form-group">
                <label>Password</label>
                <input 
                type="password" 
                class="form-control" 
                placeholder="Password" 
                v-model="form.password"
                >
              </div>
              
              <!-- Auth Errors -->
              <div class="form-group">
                <div v-if="authenticationError" class="alert alert-danger">
                  {{ authenticationError }}
                </div>
              </div>

              <!-- Session Error -->
              <div class="form-group">
                <div v-if="$store.state.login.isSessionExpires" class="alert alert-danger">
                  Your Session has been Expired. <br> Please re-login your account.
                </div>
              </div>

              <div class="form-group">
                <button class="btn btn-success btn-block">Submit</button>
              </div>
            </form>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AuthNavigation from './AuthNavigation'
import UiLoader from '@/components/loaders/UiLoader'

export default {
  name: 'login',
  components: {AuthNavigation,UiLoader},
  data() {
    return {
      form: {
        employee_number: '',
        password: ''
      },
      loginUsingIPC: true
    }
  },
  computed: mapState('login', ['authenticationError']),
  created () {
    this.initializedLogin()
  },
  methods: {
    login (emp_no, password) {
      this.$store.dispatch('login/login', {
        employee_number: emp_no ? emp_no : this.form.employee_number, 
        password: password ? password : this.form.password
      })
    },

    /**
     * -------------------------
     * Auto Login User
     * -------------------------
     * 
     * Should direct on URL 
     * http://${domain}/ipc_rushform/login?emp_no=${employee_number}&password=${password}
     * from IPC Centralized Portal
     */
    initializedLogin () {
      const { emp_no, password } = this.getUrlParams()

      if (emp_no && password) {
        this.loginUsingIPC = true
        this.login(emp_no,password)
      }
      else {
        this.loginUsingIPC = false
      }
    },

    // Get Current url parameters
    getUrlParams () {
      const urlParams = new URLSearchParams(window.location.search);
      const emp_no = urlParams.get('emp_no');
      const password = urlParams.get('password');

      return {emp_no,password}
    }
  }
}
</script>
