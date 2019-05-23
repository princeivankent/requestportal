<template>
  <div>
    <NavBar />
    <div class="container kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Main',
  components: {NavBar}
}
</script>
