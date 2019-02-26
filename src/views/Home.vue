<template>
  <div class="">
    <button type="primary" @click="getValue">调用后台接口</button>
    <input v-model="inpContent">
    <router-link to="/login">登陆</router-link>
    <router-view></router-view>
    <input type="button" value="显示弹窗" @click="showToast">
    <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
  </div>
</template>

<script>
import mfooter from '../components/Footer'
import axios from 'axios'
import toast from '../components/toast/index.js'
export default {
  name: 'home',
  components: {
    mfooter
  },
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
      toast('我是弹出消息')
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
