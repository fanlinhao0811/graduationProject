
<template>
  <div class="me" v-if="infon">
    <header>
      <div @click="suggest">监督建议</div>
      <div>个人主页</div>
      <div @click="loginOut">退出登录</div>
    </header>
    <div class="my-page">
      <div class="my-page-img">
        <img :src="infon[0].data[0].img" alt="">
      </div>
      <div class="my-page-contain">
        <p>{{ infon[0].data[0].name }} <el-button icon="el-icon-edit" size="mini" circle @click="dialogVisible = true"></el-button></p>
        <p>简介：{{ infon[0].data[0].desc }}</p>
      </div>
    </div>
    <div class="my-time">
      <div>
        <router-link to='/home/me'>
          <p>{{ infon[1].data.length }}</p>
          <p>时刻</p>
        </router-link>
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
    <div class="item" v-if="infon[4].data.length > 0">
      <p>
        我的草稿时刻
        <el-button type="success" icon="el-icon-check" circle @click="newPre"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="delPre"></el-button>
      </p>
      <p>{{infon[4].data[0].moment}}</p>
      <img :src="infon[4].data[0].moment_img" alt="">
    </div>
    <div class="item" v-else-if="infon[4].data.length === 0">
      <p>
        我的草稿时刻
      </p>
      <p>暂无草稿哦～～</p>
    </div>
    <div class="item item1">
      <p>
        监督建议
      </p>
      <div v-if="infon[5].data.length === 0" class="tt">我暂时还没有提出监督建议哦～～</div>
      <div v-else-if="infon[5].data.length > 0" v-for="(item,index) in infon[5].data" :key="index" class="tt" @click="dialog(item)">
        No.{{index}} — {{item.suggest}}
      </div>
    </div>
    <el-dialog
      title="修改个人资料"
      :visible.sync="dialogVisible"
      width="90%">
      <div class="bb">
        <span>用户名:</span>
        <el-input v-model="infon[4].data[0].user_name" placeholder="请输入内容" class="aa" :disabled="true"></el-input>
      </div>
      <div class="bb">
        <span>简介信息:</span>
        <el-input v-model="infon[0].data[0].desc" placeholder="请输入内容" class="aa"></el-input>
      </div>
      <div class="bb">
        <span>密码:</span>
        <el-input v-model="infon[0].data[0].pwd" placeholder="请输入内容" class="aa"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateInfo">更 新</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="监督建议"
      :visible.sync="dialogVisible1"
      width="90%">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请告诉我们您对本系统的建议"
        v-model="textarea">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="sendSuggest">发 送</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="我提出的监督建议"
      :visible.sync="dialogVisible2"
      width="90%"
      class="oo">
      <p>{{suggestInfo.suggest}}</p>
      <p>管理员处理：</p>
      <p>{{suggestInfo.reply || '管理员正在处理，请稍后～～'}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false">关 闭</el-button>
      </span>
    </el-dialog>
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
      infon: null,
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      textarea: '',
      suggestInfo: ''
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
    mySuggest () {
      return axios.get('/api/mySuggest', {
        params: { name: Cookies.get('user') }
      })
    },
    init () {
      axios.all([this.getInfo(), this.userMoment(), this.userFol(), this.userFan(), this.userPre(), this.mySuggest()]).then(
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
    },
    updateInfo () {
      axios.post('/api/updateInfo', {
        desc: this.infon[0].data[0].desc,
        pwd: this.infon[0].data[0].pwd,
        id: this.infon[0].data[0].id
      }).then((res) => {
        this.dialogVisible = false
        this.init()
      })
    },
    suggest () {
      this.dialogVisible1 = true
    },
    sendSuggest () {
      axios.post('/api/sendSuggest', {
        suggest: this.textarea,
        send_user_id: this.infon[0].data[0].id,
        send_user_name: this.infon[0].data[0].name
      }).then((res) => {
        this.dialogVisible1 = false
        this.init()
      })
    },
    dialog (item) {
      this.dialogVisible2 = true
      this.suggestInfo = item
    }
  }
}
</script>
<style scoped>
  a{
    text-decoration: none;
    color: #2c3e50;
  }
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
    margin-bottom: 80px;
  }
  .bb{
    width: 80%;
    margin-left: 10%;
    margin-bottom: 10%;
  }
  .bb span{
    display: inline-block;
    width: 30%;
  }
  .bb .aa{
    display: inline-block;
    width: 70%;
  }
  .tt{
    text-align: left;
    margin-left: 30px;
    margin-top: 10px;
  }
  .oo p{
    text-align: left;
    margin-left: 10px;
  }
  .oo p:nth-child(2){
    font-size: 0.36rem;
    font-weight: bold;
  }
</style>
