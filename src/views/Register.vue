
<template>
  <transition name="fadeIn">
    <div class="register">
      <div class="container">
        <header><img src="../assets/images/back.png" alt=""> 相识是一种缘分</header>
        <div class="input-name">
          <div class="label">账号</div>
          <input type="text" placeholder="请输入您的账号" v-model="xx">
        </div>
        <div class="input-password">
          <div class="label">密码</div>
          <input type="password" placeholder="请输入您的密码" v-model="pwd">
        </div>
        <div class="btn" @click="login" :style="{ backgroundColor: pwd === ''? 'rgb(219,219,219)' : 'rgb(113,113,113)'}">
          注册
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import toast from '../components/toast/index.js'
export default {
  name: 'register',
  data () {
    return {
      xx: '',
      pwd: ''
    }
  },
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
  .register{
    width: 100%;
    height: 100vh;
    background: rgb(245, 245, 245);
    font-size: 0.4rem;
  }
  .container{
    width: 100%;
    position: relative;
    padding-top: 5%;
  }
  header{
    display: flex;
    align-items: center;
  }
  header img{
    width: 8px;
    height: 15.5px;
    margin: 0 20% 0 10%;
    vertical-align: middle;
  }
  .input-name, .input-password{
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
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
  input{
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
