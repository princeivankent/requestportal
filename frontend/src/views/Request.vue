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
                <!-- <notifications 
                  group="foo" 
                  position="bottom right" 
                /> -->
                <!-- <div 
                  v-if="itemErrors.length > 0"
                  class="alert alert-danger" 
                  role="alert"
                >
                  <div class="alert-text">
                    <i class="flaticon-warning-sign"></i>&nbsp;
                    Please select atleast one (1) item to request.
                  </div>
                </div> -->
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
                    <!-- <tr v-for="(item, index) in items" :key="index">
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
                    </tr> -->
                  </tbody>
                </table>

                <RequestForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '../layouts/SubHeader'

export default {
  name: 'Request',
  components: {SubHeader}
}
</script>
