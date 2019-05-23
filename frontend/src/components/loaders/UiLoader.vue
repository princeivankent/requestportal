<template>
  <BlockUI 
    v-if="state"
    :message="msg"
    :url="url"
  ></BlockUI>
</template>

<script>
import Vue from 'vue'
import BlockUI from 'vue-blockui'
import Ball from '@/assets/media/spinners/tailwind.gif'

Vue.use(BlockUI)

export default {
  name: 'UiLoader',
  props: [
    'msg', 'state'
  ],
  data () {
    return {
      url: Ball
    }
  }
}
</script>
