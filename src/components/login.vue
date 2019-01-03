<template>
    <div class="login">
        <div>111</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'blog',
  data () {
    return {
      inpContent: ''
    }
  },
  methods: {
    getValue () {
      // axios.get('/', {params: ''})
      axios.get('/api/getValue', {
        params: { id: 1 }
      }).then((res) => {
        // console.log('res', res)
        this.inpContent = res.data[0].name
      })
    },
    setValue () {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        id: 1, name: this.inpContent
      }).then((res) => {
        // console.log('res', res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .login{
        color: aqua;
    }
</style>
