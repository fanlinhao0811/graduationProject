<template>
  <div class="">
    <button type="primary" @click="getValue">调用后台接口</button>
    <input v-model="inpContent">
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
