<template>
  <div>
    <SubHeader />
    <div class="kt-content kt-grid__item kt-grid__item--fluid " id="kt_content">
      <div class="row">
        <div class="col-lg-12">
          <div class="kt-portlet kt-portlet--last kt-portlet--responsive-mobile">
            <div class="kt-portlet__head">
              <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">
                  Your Requests
                </h3>
              </div>
              <div class="kt-portlet__head-toolbar">
                <div class="btn-group">
                  <input 
                    v-model="active_search"
                    type="text" 
                    class="form-control" 
                    placeholder="Type Request Code"
                  />
                  <button 
                    type="button" 
                    class="btn btn-sm btn-brand pr-2"
                  >
                    <i class="la la-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="kt-form">
              <div class="kt-portlet__body">
                <UiLoader :loadingState="getLoadingState">
                  <table class="table table-striped table-bordered table-hover table-checkable" id="my-table">
                    <thead>
                      <tr>
                        <th class="text-center"><i class="fa fa-hashtag"></i></th>
                        <th class="text-center" width="150">Request Code</th>
                        <th class="text-center">Date Created</th>
                        <th>Justification</th>
                        <th class="text-center" width="50"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in getEmployeeRequests" :key="index">
                        <td class="text-center">{{ index+1}}</td>
                        <td class="text-center">{{ item.request_code }}</td>
                        <td class="text-center">{{ item.created_at | toDateString }}</td>
                        <td>{{ item.justification }}</td>
                        <td nowrap>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-warning btn-icon"
                            @click="openRequest(item.request_code)"
                          >
                            <i class="fa fa-folder-open text-white"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </UiLoader>
              </div>
              <RequestFormModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SubHeader from '../layouts/SubHeader'
import RequestFormModal from '../components/RequestFormModal'
import UiLoader from '../plugins/UiLoader'

export default {
  name: 'RequestForms',
  components: {
    SubHeader, RequestFormModal, UiLoader
  },
  data () {
    return {
      active_search: ''
    }
  },
  computed: {
    ...mapGetters('requestForm', [
      'getEmployeeRequests',
      'getLoadingState'
    ]),

    employeeId () {
      return this.$store.getters['login/userDetails'].employee_id
    }
  },
  watch: {
    active_search: {
      handler: 'fetchEmployeeRequests',
      immediate: true
    }
  },
  created () {
    this.$store.dispatch('requestForm/setApproversAction', this.$store.getters['login/userDetails'].employee_id)
  },
  methods: {
    fetchEmployeeRequests () {
      this.$store.dispatch('requestForm/setDefaultItemsAction', {employee_id: this.employeeId})
    },

    async openRequest (request_code) {
      const data = {
        request_code: request_code, requests: this.getEmployeeRequests
      }
      const request = await this.$store.dispatch('requestForm/setRequestbyCodeAction', data)

      if (request) this.$store.dispatch('requestForm/setModalStateAction', true)
    }
  }
}
</script>
