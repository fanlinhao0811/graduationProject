
<template>
  <transition name="fadeIn">
    <div class="login">
      <div class="container">
        <div class="input-name">
          <div class="label">账号</div>
          <input type="text" placeholder="请输入您的账号" v-model="xx" class="ipt">
        </div>
        <div class="input-password">
          <div class="label">密码</div>
          <input type="password" placeholder="请输入您的密码" v-model="pwd" class="ipt">
        </div>
        <div class="tip">
          <input type="checkbox" checked class="rempsw-input">记住密码
        </div>
        <div class="btn" @click="login" :style="{ backgroundColor: pwd === ''? 'rgb(219,219,219)' : 'rgb(113,113,113)'}">
          登录
        </div>
        <div class="tips">
          <div class="register" @click="$router.push({path:'/register'})">注册</div>
          <div class="forgot">忘记密码</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import toast from '../components/toast/index.js'
import { mapState } from 'vuex'
import Cookies from 'js-cookie'
export default {
  name: 'login',
  data () {
    return {
      xx: '',
      pwd: ''
    }
  },
  created () {
    if (Cookies.get('user')) {
      axios.get('/api/getInfo', {
        params: { name: Cookies.get('user') }
      }).then(
        (res) => {
          this.$store.commit('login', res.data[0])
        }
      )
      this.$router.push({ path: '/' })
    }
    if (this.$store.state.isLogin) {
      this.xx = this.$store.state.info.name
      // console.log(this.$store.getters.doneTodosCount)
    }
  },
  //   computed: {
  //     isLogin () {
  //       return this.$store.state.isLogin
  //     }
  //   },
  computed: mapState({
    isLogin: state => state.isLogin,
    name: state => state.info.name
  }),
  methods: {
    login () {
      if (!this.xx || !this.pwd) {
        toast('请输入账号密码！')
        return
      }
      axios.get('/api/login', {
        params: { name: this.xx, pwd: this.pwd }
      }).then((res) => {
        if (typeof res.data === 'string') {
          toast(res.data)
        } else {
          toast('登陆成功')
          this.$store.commit('login', res.data[0])
          if (document.querySelector('.rempsw-input').checked === true) {
            Cookies.set('user', res.data[0].name, { expires: 7 })
          }
          this.$router.push({ path: '/' })
        }
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
<style lang="scss" scoped>
  .login{
    width: 100%;
    height: 100vh;
    background: url("../assets/images/l-r-bg.jpeg") top / cover no-repeat;
    font-size: 0.4rem;
  }
  .container{
    width: 100%;
    position: relative;
    padding-top: 80%;
  }
  .input-name, .input-password{
    width: 80%;
    margin-left: 10%;
    height: 50px;
    border: 1px solid rgb(219,219,219);
    padding: 20px 35px 20px 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
 .label{
    width: 30%;
    font-size: 24px;
    color: #999999;
  }
  .ipt{
    background:none;
    outline:none;
    -webkit-appearance: none;
    border-radius: 0;
    width: 70%;
    height: 35px;
    border: 0;
    border-left: 1px solid rgb(219,219,219);
    padding-left: 20px;
  }
  .rempsw-input{
    vertical-align: bottom;
  }
  .tip{
    margin-top: 10px;
    font-size: 0.2rem;
  }
  .btn{
    width: 50%;
    margin: 10% 25% 0;
    height: 60px;
    border-radius: 10px;
    background-color: rgb(219,219,219);
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
  }
  .btn.active{
    background-color: #666;
  }
  .tips{
    width: 100%;
    margin-top: 15%;
    font-size: 22px;
    color: #666666;
    padding: 5px 0;
    display: flex;
    justify-content: space-around;
  }
  .fadeIn-enter,.fadeIn-leave-to{
    opacity: 0;
    visibility: hidden;
  }
  .fadeIn-enter-active ,.fadeIn-leave-active{
    transition: all .5s ease;
    visibility: visible;
  }
</style>
