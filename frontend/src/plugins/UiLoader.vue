<template>
  <div>
    <div 
      v-if="loadingState" 
      class="alert alert-success" 
      role="alert"
    >
      <div class="alert-text text-center">
        <i class="fa fa-sync fa-spin"></i>&nbsp;
        Fetching data from the <strong>server</strong>...
      </div>
    </div>
    <slot v-if="!loadingState" />
  </div>
</template>

<script>
export default {
  name: 'UiLoader',
  props: ['loadingState']
}
</script>
