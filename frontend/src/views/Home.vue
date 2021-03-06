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
                  Rush Form Request
                </h3>
              </div>
              <div class="kt-portlet__head-toolbar">
                <input 
                  v-model="active_search"
                  type="text" 
                  class="form-control" 
                  placeholder="Type control number"
                />
              </div>
            </div>
            <div class="kt-form">
              <div class="kt-portlet__body">
                <notifications 
                  group="success_notif" 
                  position="bottom right" 
                />
                <div 
                  v-if="itemErrors.length > 0"
                  class="alert alert-danger" 
                  role="alert"
                >
                  <div class="alert-text">
                    <i class="flaticon-warning-sign"></i>&nbsp;
                    Please select atleast one (1) item to request.
                  </div>
                </div>
                <UiLoader :loadingState="getLoadingState">
                  <table class="table table-striped table-bordered table-hover table-checkable" id="my-table">
                    <thead>
                      <tr>
                        <th><i class="fa fa-hashtag"></i></th>
                        <th>Request Item</th>
                        <th>Target Date of releasing</th>
                        <th>Approver</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="!items">
                        <td colspan="5">
                          <div class="alert-text text-center">
                            <i class="fa fa-exclamation-triangle"></i>&nbsp;
                            No Data found.
                          </div>
                        </td>
                      </tr>
                      <tr v-for="(item, index) in items" :key="index">
                        <td>{{ index+1}}</td>
                        <td>{{ item.item.description }}</td>
                        <td>
                          <datepicker 
                            @input="targetDateForm(index, $event)"
                            :value="item.target_date"
                            :calendar-button="true"
                            :bootstrap-styling="true"
                            :clear-button="searchActiveStatus ? false : true"
                            format="MMM dd yyyy"
                            calendar-button-icon="la la-calendar-check-o"
                            placeholder="Select date" 
                            readonly
                            :disabledDates="disabledDates"
                            :disabled="searchActiveStatus"
                          ></datepicker>
                        </td>
                        <td nowrap>{{ item.item.item_approver_type.type | upperCase }}</td>
                      </tr>
                    </tbody>
                  </table>
                </UiLoader>
                <RequestForm />
              </div>

              <div class="kt-portlet__foot kt-portlet__foot--solid">
                <div class="kt-form__actions kt-form__actions--right">
                  <button 
                    @click="onSubmitRequest()"
                    class="btn btn-brand"
                    :disabled="searchActiveStatus || $store.state.request.submission"
                  >
                    <i 
                      :class="`fa ${$store.state.request.submission ? 'fa-sync fa-spin' : 'fa-check'}`"
                    ></i>&nbsp;
                    Submit
                  </button>
                </div>
              </div>
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
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import RequestForm from '@/components/RequestForm'
import UiLoader from '../plugins/UiLoader'

export default {
  name: 'Home',
  components: {
    SubHeader,
    Datepicker,
    RequestForm,
    UiLoader
  },
  data () {
    return {
      active_search: '',
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      }
    }
  },
  computed: {
    ...mapGetters('request', [
      'getAllItems', 'getAllApprovers', 'searchActiveStatus', 'getLoadingState'
    ]),

    employeeId () {
      return this.$store.getters['login/userDetails'].employee_id
    },

    items () {
      if (!this.getAllItems) return [];

      return this.getAllItems.requested_items
    },

    itemErrors () {
      const items = this.$store.state.request.submissionError.items;
      return items ? items : []
    }
  },
  watch: {
    active_search (value) {
      if (value.length === 5)
        this.$store.dispatch('request/getItems', value)
      else if (value.length === 0)
        this.$store.dispatch('request/setDefaultItemsAction', this.employeeId)
    }
  },
  created () {
    this.$store.dispatch('request/setDefaultItemsAction', this.employeeId)
    this.$store.dispatch('request/setApproversAction', this.employeeId)
  },
  methods: {
    targetDateForm (index, value) {
      if (value === null || value === undefined || value === '') {
        return this.$store.commit('request/SET_TARGET_DATE', {index, target_date: ''})
      }

      return this.$store.commit('request/SET_TARGET_DATE', {index, target_date: moment(value).format('YYYY-MM-DD')})
    },

    async onSubmitRequest () {
      const request = await this.$store.dispatch('request/submitFormRequest')
      
      if (request) {
        this.$store.dispatch('request/setDefaultItemsAction', this.employeeId)

        this.$notify({
          group: 'success_notif',
          type: 'success',
          title: 'System Alert',
          text: 'Success! You may now print your request form. Just navigate to <strong>"Go to your requests"</strong> on the upper navigation',
          speed: 1000,
          duration: 15000
        })
      }
    }
  }
}
</script>
