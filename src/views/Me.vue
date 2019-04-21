
<template>
  <div class="me" v-if="infon">
    <header>
      <div>监督建议</div>
      <div>个人主页</div>
      <div @click="loginOut">退出登录</div>
    </header>
    <div class="my-page">
      <div class="my-page-img">
        <img :src="infon[0].data[0].img" alt="">
      </div>
      <div class="my-page-contain">
        <p>{{ infon[0].data[0].name }} <el-button icon="el-icon-edit" size="mini" circle></el-button></p>
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
      <p>我的最新时刻</p>
      <p>{{infon[1].data[0].moment}}</p>
      <img :src="infon[1].data[0].monent_img" alt="">
    </div>
    <div class="item item1" v-if="infon[4].data.length > 0">
      <p>
        我的草稿时刻
        <el-button type="success" icon="el-icon-check" circle @click="newPre"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="delPre"></el-button>
      </p>
      <p>{{infon[4].data[0].moment}}</p>
      <img :src="infon[4].data[0].moment_img" alt="">
    </div>
    <div class="item item1" v-else-if="infon[4].data.length === 0">
      <p>
        我的草稿时刻
      </p>
      <p>暂无草稿哦～～</p>
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
    getInfo () {
      return axios.get('/api/getInfo', {
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
    userPre () {
      return axios.get('/api/userPre', {
        params: { name: Cookies.get('user') }
      })
    },
    init () {
      axios.all([this.getInfo(), this.userMoment(), this.userFol(), this.userFan(), this.userPre()]).then(
        (res) => {
          this.infon = res
        }
      )
    },
    newPre () {
      axios.post('/api/newMoment', {
        moment: this.infon[4].data[0].moment,
        user_id: this.infon[4].data[0].user_id,
        user_name: this.infon[4].data[0].user_name,
        monent_img: this.infon[4].data[0].moment_img
      }).then((res) => {
        axios.post('/api/delPre', {
          id: this.infon[4].data[0].id
        }).then((res) => {
          this.init()
        })
      })
    },
    delPre () {
      axios.post('/api/delPre', {
        id: this.infon[4].data[0].id
      }).then((res) => {
        this.init()
      })
    },
    loginOut () {
      Cookies.remove('user')
      this.$router.push({ path: '/login' })
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
  .item1{
    margin-bottom: 50px;
  }
</style>
