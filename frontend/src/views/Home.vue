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
                <notifications 
                  group="foo" 
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
                          :disabled="searchActiveStatus"
                        ></datepicker>
                      </td>
                      <td nowrap>{{ item.item.item_approver_type.type | upperCase }}</td>
                    </tr>
                  </tbody>
                </table>

                <RequestForm />
              </div>

              <div class="kt-portlet__foot kt-portlet__foot--solid">
                <div class="kt-form__actions kt-form__actions--right">
                  <button 
                    @click="onSubmitRequest()"
                    class="btn btn-brand"
                    :disabled="searchActiveStatus"
                  >
                    <i class="la la-check"></i>
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
import { upperCase } from '../helpers/stringHelper'

export default {
  name: 'Home',
  components: {SubHeader,Datepicker,RequestForm},
  data () {
    return {
      active_search: ''
    }
  },
  computed: {
    ...mapGetters('request', [
      'getAllItems', 'getAllApprovers', 'searchActiveStatus'
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
      else
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

        window.open(`http://localhost/${process.env.VUE_APP_NAME}/api/generate-pdf?formData=${JSON.stringify(this.paramEnricher())}`);
        
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'System Alert',
          text: 'Your request has been successfully submitted! \n Get you request form.',
          speed: 1000,
          duration: 5000
        })
      }
    },

    paramEnricher () {
      const approver_id = this.$store.state.request.items.approver_id
      const approvers = this.$store.state.request.approvers
      const items = this.$store.state.request.items.requested_items.filter(item => item.target_date)

      const newArray = []
      items.forEach((element) => {
        newArray.push({
          request_item: element.item.description,
          target_date: moment(element.target_date).format("MMMM D, YYYY"),
          approver_type: element.item.item_approver_type.type
        })
      })

      const pdfParams = {
        requesting_department: this.$store.getters['login/userDetails']['department'],
        submission_date: moment().format("MMMM D YYYY"),
        items: newArray,
        justification: upperCase(this.$store.state.request.items.justification),
        prepared_by: this.$store.getters['login/userDetails']['name'],
        approved_by: approvers.find(item => item.employee_id === approver_id)['name']
      }

      return pdfParams
    },
  },
  filters: {
    upperCase: function (value) {
      if (!value) return ''
      value = value.toString()
      var str = value.replace('_', ' ')
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>
