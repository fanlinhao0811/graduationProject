
<template>
    <div class="login">
        <div class="container">
            <div class="input-email centerX">
                <div class="label">邮箱</div>
                <input type="email" placeholder="请输入邮箱">
            </div>
            <div class="input-password centerX">
                <div class="label">密码</div>
                <input type="password" placeholder="请输入密码">
            </div>
            <div class="btn centerX">
                登录
            </div>
            <div class="tips centerX">
                <div class="register">注册</div>
                <div class="forgot">忘记密码</div>
            </div>
        </div>
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
      // axios.get('/', {params: ''})
      axios.get('/api/getValue', {
        params: { id: 1 }
      }).then((res) => {
        // console.log('res', res)
        this.inpContent = res.data[0].name
      })
    },
    setValue () {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        id: 1, name: this.inpContent
      }).then((res) => {
        // console.log('res', res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .login{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden auto;
        background: url("../assets/images/l-r-bg.jpg") no-repeat;
        background-size: 100% auto;
        background-color: #fff;
        .container{
            width: 100%;
            position: relative;
            .input-email, .input-password{
                width: 80%;
                margin-left: 10%;
                height: 50px;
                border: 1px solid rgb(219,219,219); /* no */
                padding: 20px 35px 20px 0;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                .label{
                    width: 30%;
                    font-size: 26px;
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
                    border-left: 1px solid rgb(219,219,219); /* no */
                    padding-left: 20px;
                }
            }
            .input-email{
                margin-top: 300px;
            }
            .input-password{
                margin-top: 50px;
            }
            .btn{
                width: 80%;
                margin: 50px 10% 0;
                height: 60px;
                border-radius: 10px;
                background-color: rgb(219,219,219);
                font-size: 28px;
                color: #fff;
                font-weight: bold;
                line-height: 60px;
                text-align: center;
            }
            .btn.active{
                background-color: #666;
            }
            .tips{
                top: 980px;
                width: 100%;
                font-size: 22px;
                color: #666666;
                padding: 5px 0;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
