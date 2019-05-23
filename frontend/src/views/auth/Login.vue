<template>
  <div>
    <AuthNavigation />
    <div class="container-fluid mt-5">
      <div class="row justify-content-md-center">
        <div class="col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3">
          <template v-if="$store.state.login.authenticating">
            <h4>Please wait, while authenticating ...</h4>
          </template>
          <template v-else>
            <h3 class="text-center">Login</h3>
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
import AuthNavigation from './AuthNavigation'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'login',
  components: {AuthNavigation},
  data() {
    return {
      form: {
        employee_number: '',
        password: ''
      }
    }
  },
  computed: mapState('login', ['authenticationError']),
  methods: {
    login () {
      this.$store.dispatch('login/login', {
        employee_number: this.form.employee_number, 
        password: this.form.password
      })
    }
  }
}
</script>
