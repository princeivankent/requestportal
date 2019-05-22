<template>
  <div class="row mt-3">
    <div class="col-md-8">
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  mounted () {
    // this.$store.dispatch('task/fillTasks')
    // console.log('home is mounted')
  },
  computed: {
    ...mapGetters('task', ['getAllTasks'])
  }
}
</script>
