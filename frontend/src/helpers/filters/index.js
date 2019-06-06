import Vue from 'vue'

Vue.filter('upperCase', function (value) {
  if (!value) return ''
  value = value.toString()
  var str = value.replace('_', ' ')
  return str.charAt(0).toUpperCase() + str.slice(1)
})

Vue.filter('toDateString', function (value) {
  if (!value) return ''
  return moment(value).format("MMMM D, YYYY")
})