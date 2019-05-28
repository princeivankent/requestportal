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
                  <table class="table table-striped table-bordered table-hover table-checkable">
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
                            :clear-button="true"
                            format="MMM dd yyyy"
                            calendar-button-icon="la la-calendar-check-o"
                            placeholder="Select date" 
                            readonly
                          ></datepicker>
                        </td>
                        <td nowrap>{{ item.item.item_approver_type.type | upperCase }}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="form-group">
                    <label for="exampleSelect1">Select Approver</label>
                    <select class="form-control col-md-6" id="exampleSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group form-group-last">
                    <label for="justification">Justification</label>
                    <textarea 
                      class="form-control col-md-6" 
                      id="justification" rows="3"
                    ></textarea>
                  </div>
                </div>
                <div class="kt-portlet__foot kt-portlet__foot--solid">
                  <div class="kt-form__actions kt-form__actions--right">
                    <button class="btn btn-brand">
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

  export default {
    name: 'Home',
    components: {SubHeader,Datepicker},
    data () {
      return {
        active_search: ''
      }
    },
    computed: {
      ...mapGetters('request', [
        'getAllItems'
      ]),

      items () {
        if (!this.getAllItems) return [];

        return this.getAllItems.requested_items
      }
    },
    watch: {
      active_search (value) {
        if (value.length === 5)
          this.$store.dispatch('request/getItems', value)
        else
          this.$store.dispatch('request/setDefaultItems')
      }
    },
    mounted () {
      this.$store.dispatch('request/setDefaultItems')
    },
    methods: {
      targetDateForm (index, value) {
        const target_date = moment(value).format('YYYY-MM-DD')

        this.$store.commit('request/SET_TARGET_DATE', {index, target_date})
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
