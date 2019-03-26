<template>
  <div>
    qqqqqq
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'ErrorLog',
  created: function () {
    if (!Cookies.get('user')) {
      this.$router.push({ path: '/adminLogin' })
    }
  }
}
</script>

<style scoped>
</style>
