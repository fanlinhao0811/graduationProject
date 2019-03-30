<template>
  <div class="login-container">
    <el-form
      label-position="left"
      label-width="0px"
      class="card-box login-form">
      <h3 class="title">welcome to moment</h3>
      <el-form-item>
        <el-input v-model="name" name="email" type="text" placeholder="邮箱"/>
      </el-form-item>
      <el-form-item >
        <el-input
          v-model="password"
          show-password
          name="password"
          placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import toast from '../components/toast/index.js'
import Cookies from 'js-cookie'

export default {
  name: 'AdminLogin',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  created: function () {
    if (Cookies.get('user')) {
      axios.get('/api/getInfo', {
        params: { name: Cookies.get('user') }
      }).then(
        (res) => {
          console.log(res.data[0])
        }
      )
      // this.$router.push({ path: '/admin/index' })
    }
  },
  methods: {
    handleLogin () {
      if (!this.name || !this.password) {
        toast('请输入账号密码！')
        return
      }
      axios.get('/api/login', {
        params: { name: this.name, pwd: this.password }
      }).then((res) => {
        if (typeof res.data === 'string') {
          toast(res.data)
        } else {
          toast('登陆成功')
          Cookies.set('user', res.data[0].name, { expires: 7 })
          this.$router.push({ path: '/admin/index' })
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.login-container {
  height: 100vh;
  background-color: #2d3a4b;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eeeeee;
    height: 47px!important;
    line-height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: #eeeeee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
