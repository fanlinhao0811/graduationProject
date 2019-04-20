
<template>
  <div class="me" v-if="info">
    <header>
      <img src="../assets/images/back.png" alt="" @click="$router.go(-1)">
    </header>
    <div class="my-page">
      <div class="my-page-img">
        <img :src="info[0].data[0].img" alt="">
      </div>
      <div class="page-contain">
        <div class="page-contain-a">
          <span>{{ info[0].data[0].name }}</span>
          <el-button v-if="follow" type="primary" plain @click="flw">关注</el-button>
          <el-button v-else type="success" plain @click="cancelFlw">已关注</el-button>
        </div>
        <p>简介：{{ info[0].data[0].desc }}</p>
      </div>
    </div>
    <div class="my-time">
      <div>
        <p>{{ info[1].data[0].userMomentCount }}</p>
        <p>时刻</p>
      </div>
      <div>
        <p>{{ this.info[2].data[0].follow }}</p>
        <p>粉丝</p>
      </div>
    </div>
    <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import mfooter from '../components/Footer'
export default {
  name: 'me',
  data () {
    return {
      info: null,
      follow: true
    }
  },
  components: {
    mfooter
  },
  created () {
    this.init()
  },
  methods: {
    getShortInfo () {
      return axios.get('/api/getShortInfo', {
        params: { name: this.$route.params.name }
      })
    },
    userMomentCount () {
      return axios.get('/api/userMomentCount', {
        params: { name: this.$route.params.name }
      })
    },
    userFollowed () {
      return axios.get('/api/userFollowed', {
        params: { name: this.$route.params.name }
      })
    },
    isFollow () {
      return axios.get('/api/isFollow', {
        params: {
          user_name: this.$route.params.name,
          follower_name: Cookies.get('user')
        }
      })
    },
    init () {
      if (Cookies.get('user')) {
        axios.all([this.getShortInfo(), this.userMomentCount(), this.userFollowed(), this.isFollow()]).then(
          (res) => {
            this.info = res
            if (this.info[3].data.length > 0) {
              this.follow = false
            }
          }
        )
      } else {
        this.$router.push({ path: '/login' })
      }
    },
    flw () {
      axios.post('/api/flw', {
        user_name: this.$route.params.name,
        follower_name: Cookies.get('user')
      }).then((res) => {
        this.follow = false
      }).catch((err) => {
        console.log(err)
      })
    },
    cancelFlw () {
      axios.post('/api/cancelFlw', {
        user_name: this.$route.params.name,
        follower_name: Cookies.get('user')
      }).then((res) => {
        this.follow = true
      }).catch((err) => {
        console.log(err)
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
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #999;
    line-height: 50px;
  }
  header img{
    width: .48rem;
    vertical-align: middle;
    margin-left: -80%;
  }
  .my-page{
    width: 100%;
    height: 100px;
    margin-top: 20px;
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
  .page-contain{
    width: 70%;
  }
  .page-contain-a{
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    font-size: 0.5rem;
    font-weight: bold;
  }
  .page-contain p{
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
