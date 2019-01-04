<template>
  <div class="">
    <button type="primary" @click="getValue">调用后台接口</button>
    <input v-model="inpContent">
    <router-link to="/login">登陆</router-link>
    <input type="button" value="显示弹窗" @click="showToast">
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
      axios.get('/api/getValue', {
        params: { id: 1 }
      }).then((res) => {
        this.inpContent = res.data[0].name
      })
    },
    showToast () {
      this.$toast('我是弹出消息')
    }
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
}
</style>
