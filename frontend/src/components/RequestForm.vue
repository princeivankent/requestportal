<template>
  <div>
    <div class="form-group form-group-first">
      <label for="justification">Justification</label>
      <textarea 
        v-model="justification"
        :class="`form-control col-md-12 ${$store.state.request.submissionError.justification ? 'is-invalid' : ''}`" 
        id="justification" rows="3"
        :disabled="isFormDisabled"
      ></textarea>
      <div 
        v-if="$store.state.request.submissionError.justification"
        class="invalid-feedback"
      >
      {{ $store.state.request.submissionError.justification[0] }}
      </div>
    </div>
    <div class="form-group-last">
      <label for="exampleSelect1">Select Approver</label>
      <select 
        v-model="approverId"
        :class="`form-control col-md-6 ${$store.state.request.submissionError.approver_id ? 'is-invalid' : ''}`" 
        id="exampleSelect1"
        :disabled="isFormDisabled"
      >
        <option value="">-- SELECT APPROVER --</option>
        <option 
          v-for="(item, index) in getAllApprovers" 
          :key="index"
          :value="item.employee_id"
        >
          {{ item.name }}
        </option>
      </select>
      <div 
        v-if="$store.state.request.submissionError.approver_id"
        class="invalid-feedback"
      >
        {{ $store.state.request.submissionError.approver_id[0] }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RequestForm',
  computed: {
    ...mapGetters('request', [
      'getAllApprovers','isFormDisabled'
    ]),

    justification: {
      get () {
        return this.$store.state.request.items.justification
      },
      set (value) {
        return this.$store.commit('request/SET_JUSTIFICATION', value)
      }
    },

    approverId: {
      get () {
        return this.$store.state.request.items.approver_id
      },
      set (value) {
        return this.$store.commit('request/SET_APPROVER_ID', value)
      }
    }
  }
}
</script>
