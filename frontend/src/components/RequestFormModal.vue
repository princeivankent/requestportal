<template>
  <transition name="modal-fade">
    <div v-if="$store.getters['requestForm/getModalState']"  class="modal-backdrop">
      <div 
        class="modal" 
        style="display: block"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Request Details</h5>
              <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button> -->
            </div>
            <div class="modal-body">
              <div class="kt-form">
                <div class="kt-portlet__body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group form-group-first">
                        <label>Control Number</label>
                        <input 
                          v-model="controlNumber"
                          type="text" 
                          class="form-control" 
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-group-first">
                        <label>Main Approver</label>
                        <input 
                          v-model="approver.name"
                          type="text" 
                          class="form-control" 
                          readonly
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Justification</label>
                        <textarea 
                          v-model="getRequestForm.justification"
                          class="form-control"
                          cols="30" 
                          rows="3"
                          readonly
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group form-group-last">
                        <label>Request Items</label>
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
                            <tr v-for="(item, index) in getRequestForm.requested_items" :key="index">
                              <td>{{ index+1}}</td>
                              <td>{{ item.item.description }}</td>
                              <td>{{ item.target_date | toDateString }}</td>
                              <td nowrap>{{ item.item.item_approver_type.type | upperCase }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button 
                class="btn btn-secondary"
                @click="$store.dispatch('requestForm/setModalStateAction', false)"
              >
                <i class="fa fa-times"></i>
                Close
              </button>
              <button 
                class="btn text-white company-primary-color"
                @click="pdfGenerator"
              >
                <i class="fa fa-file-pdf"></i>
                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { upperCase } from '../helpers/stringHelper'
import moment from 'moment'
import { output } from '../helpers/control-number'

export default { 
  name: 'RequestFormModal',
  computed: {
    ...mapGetters('requestForm', [
      'getRequestForm',
      'getAllApprovers'
    ]),

    approver () {
      return this.getAllApprovers.find(item => item.employee_id === this.getRequestForm.approver_id)
    },

    controlNumber () {
      return output(this.getRequestForm.id)
    }
  },
  methods: {
    pdfGenerator () {
      window.open(`http://${window.location.hostname}/${process.env.VUE_APP_NAME}/api/generate-pdf?control_number=${this.getRequestForm.id}`, '_blank');
      window.focus()
    }
  }
}
</script>

<style scoped>
.modal-fade-enter, .modal-fade-leave-to {  /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity .5s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
</style>

