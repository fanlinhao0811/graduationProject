
<template>
    <div class="login">
        <div class="container">
            <div class="btn centerX" @click="newUser">
                登录
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import toast from '../components/toast/index.js'
import { mapState } from 'vuex'
export default {
  name: 'blog',
  data () {
    return {
      inpContent: '',
      xx: '',
      pwd: ''
    }
  },
  created () {
    if (this.$store.state.isLogin) {
      this.xx = this.$store.state.name
      console.log(this.$store.getters.doneTodosCount)
    //   this.$router.push({ path: '/' })
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
<style lang="scss" scoped>
    .login{
        position: absolute;
        top: 0;
        left: 50%;
        width: 100%;
        max-width: 750px;
        transform: translateX(-50%);
        height: 100vh;
        background: url("../assets/images/l-r-bg.jpeg") no-repeat;
        background-size: 100% auto;
        background-color: #fff;
        .container{
            width: 100%;
            position: relative;
            .input-email, .input-password{
                width: 80%;
                margin-left: 10%;
                height: 50px;
                border: 1px solid rgb(219,219,219);
                padding: 20px 35px 20px 0;
                display: flex;
                align-items: center;
                box-sizing: border-box;
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
            }
            .input-email{
                margin-top: 80%;
            }
            .input-password{
                margin-top: 10%;
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
        }
    }
</style>
