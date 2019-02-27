
<template>
  <div class="me">
    <header>
      <div><img src="../assets/images/me/settings.png" alt=""></div>
      <div>个人主页</div>
      <div><img src="../assets/images/me/plus.png" alt=""></div>
    </header>
    <div class="my-page">
      <div class="my-page-img">
        <img src="https://wpimg.wallstcn.com/ed378f0d-3c05-4efa-a36e-c94c41b5f360" alt="">
      </div>
      <div class="my-page-contain">
        <p>{{xx}}</p>
        <p>简介：{{xx}}</p>
      </div>
    </div>
    <div class="my-time">
      <div>
        <p>11</p>
        <p>时刻</p>
      </div>
      <div>
        <p>11</p>
        <p>关注</p>
      </div>
      <div>
        <p>11</p>
        <p>粉丝</p>
      </div>
    </div>
    <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
  </div>
</template>

<script>
import axios from 'axios'
import toast from '../components/toast/index.js'
import { mapState } from 'vuex'
import mfooter from '../components/Footer'
export default {
  name: 'me',
  data () {
    return {
      inpContent: '',
      xx: '',
      pwd: ''
    }
  },
  components: {
    mfooter
  },
  created () {
    if (this.$store.state.isLogin) {
      this.xx = this.$store.state.name
    } else {
      this.$router.push({ path: '/home' })
    }
  },
  //   computed: {
  //     isLogin () {
  //       return this.$store.state.isLogin
  //     }
  //   },
  computed: mapState({
    isLogin: state => state.isLogin,
    name: state => state.name
  }),
  methods: {
    login () {
      console.log(this.xx)
      toast('请输入账号密码！')
      //   this.$store.state.isLogin = this.xx
      this.$store.commit('login', this.xx)
      document.cookie = 'isLogin=true'
    //   console.log(this.$store.state.isLogin)
    //   alert('请输入账号密码！')
    },
    setValue () {
      axios.post('/api/setValue', {
        name: this.xx
      }).then((res) => {
        console.log('res', res)
      })
    },
    newUser () {
      axios.post('/api/newUser', {
        name: this.xx
      }).then((res) => {
        console.log('res', res)
      })
    }
  }
}
</script>
<style scoped>
  .me{
    width: 100%;
    min-height: 100vh;
    font-size: .33rem;
  }
  header{
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #999;
    justify-content: space-between;
    align-items: center;
  }
  header div:nth-child(1){
    width: 20%;
  }
  header div:nth-child(2){
    width: 60%;
  }
  header div:nth-child(3){
    width: 20%;
  }
  header img{
    width: .48rem;
    vertical-align: middle;
  }
  .my-page{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }
  .my-page-img{
    width: 30%;
  }
  .my-page-img img{
    width: 80px;
    border-radius: 60px;
    vertical-align: middle;
  }
  .my-page-contain{
    width: 70%;
  }
  .my-page-contain p{
    text-align: left;
  }
  .my-time{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccca;
  }
  .my-time div p:nth-child(1){
    margin-bottom: 4px;
  }
  .my-time div p:nth-child(2){
    margin-top: 0;
  }
</style>
