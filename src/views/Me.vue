
<template>
  <div class="me" v-if="infon">
    <header>
      <div><img src="../assets/images/me/settings.png" alt=""></div>
      <div>个人主页</div>
      <div><img src="../assets/images/me/plus.png" alt=""></div>
    </header>
    <div class="my-page">
      <div class="my-page-img">
        <img :src="infon[0].data[0].img" alt="">
      </div>
      <div class="my-page-contain">
        <p>{{ infon[0].data[0].name }}</p>
        <p>简介：{{ infon[0].data[0].desc }}</p>
      </div>
    </div>
    <div class="my-time">
      <div>
        <p>{{ infon[1].data.length }}</p>
        <p>时刻</p>
      </div>
      <div>
        <p>{{ infon[3].data.length }}</p>
        <p>关注</p>
      </div>
      <div>
        <p>{{ infon[2].data.length }}</p>
        <p>粉丝</p>
      </div>
    </div>
    <div class="item">
      <p>最新时刻</p>
      <p>{{infon[1].data[0].moment}}</p>
      <img :src="infon[1].data[0].monent_img" alt="">
    </div>
    <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
  </div>
</template>

<script>
import axios from 'axios'
// import toast from '../components/toast/index.js'
import Cookies from 'js-cookie'
import { mapState } from 'vuex'
import mfooter from '../components/Footer'
export default {
  name: 'me',
  data () {
    return {
      infon: null
    }
  },
  components: {
    mfooter
  },
  created () {
    if (Cookies.get('user')) {
      this.init()
      axios.get('/api/getInfo', {
        params: { name: Cookies.get('user') }
      }).then(
        (res) => {
          this.$store.commit('login', res.data[0])
        }
      )
    } else {
      this.$router.push({ path: '/login' })
    }
    // if (this.$store.state.isLogin) {
    //   this.xx = this.$store.state.name
    // } else {
    //   this.$router.push({ path: '/home' })
    // }
  },
  computed: mapState({
    isLogin: state => state.isLogin,
    info: state => state.info
  }),
  methods: {
    getShortInfo () {
      return axios.get('/api/getShortInfo', {
        params: { name: Cookies.get('user') }
      })
    },
    userMoment () {
      return axios.get('/api/userMoment', {
        params: { name: Cookies.get('user') }
      })
    },
    userFol () {
      return axios.get('/api/userFol', {
        params: { name: Cookies.get('user') }
      })
    },
    userFan () {
      return axios.get('/api/userFan', {
        params: { name: Cookies.get('user') }
      })
    },
    init () {
      axios.all([this.getShortInfo(), this.userMoment(), this.userFol(), this.userFan()]).then(
        (res) => {
          this.infon = res
        }
      )
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
  .my-page-contain p:nth-child(1){
    font-weight: bold;
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
  .item p:nth-child(1){
    text-align: left;
    margin-left: 0.5rem;
    font-weight: bold;
  }
  .item p:nth-child(2){
    text-align: left;
    margin-left: 0.5rem;
  }
  .item img{
    width: 60%;
    margin-left: -1.8rem;
  }
</style>
