
<template>
  <div class="new">
    <header>
      <div @click="cancel">取消</div>
      <div>创意时刻</div>
      <div @click="newMonment">发送</div>
    </header>
    <textarea class="new-content" placeholder="分享你的moment..." v-model="moment"></textarea>
    <el-upload
      class="avatar-uploader"
      action="/api/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imgPath" :src="imgPath" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
    <conform :showConform='showConform' :conformMsg='conformMsg' @hideConform="hideConform" @btnTrue="btnTrue"></conform>
    <conform1 :showConform='showConform1' :conformMsg='conformMsg1' @hideConform="hideConform" @btnTrue="btnTrue1"></conform1>
  </div>
</template>

<script>
import axios from 'axios'
import toast from '../components/toast/index.js'
import { mapState } from 'vuex'
import Cookies from 'js-cookie'
import mfooter from '../components/Footer'
import conform from '../components/Conform'
import conform1 from '../components/Conform1'
import $ from 'jquery'
export default {
  name: 'new',
  data () {
    return {
      showConform: '',
      showConform1: '',
      conformMsg: '',
      conformMsg1: '',
      moment: '',
      // imageUrl: '',
      imgPath: ''
    }
  },
  components: {
    mfooter,
    conform,
    conform1
  },
  mounted () {
    if (Cookies.get('user')) {
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
    axios.get('/api/userPre', {
      params: { name: Cookies.get('user') }
    }).then((res) => {
      this.moment = res.data[0].moment
      this.imgPath = res.data[0].moment_img
    })
  },
  computed: mapState({
    isLogin: state => state.isLogin,
    info: state => state.info
  }),
  methods: {
    cancel () {
      if (this.moment || this.imgPath) {
        this.showConform1 = true
        this.conformMsg1 = '需要为您保存草稿吗？'
      } else {
        this.$router.push({ path: '/finder' })
      }
    },
    newMonment () {
      if (this.moment) {
        this.showConform = true
        this.conformMsg = '您确定发布吗？'
      } else {
        toast('您还没有时刻需要发布哦～')
      }
    },
    hideConform (val) {
      this.showConform = val
      this.showConform1 = val
    },
    btnTrue () {
      this.showConform = false
      axios.post('/api/newMoment', {
        moment: this.moment,
        user_id: this.info.id,
        user_name: this.info.name,
        monent_img: this.imgPath
      }).then(() => {
        this.$router.push({ path: '/home' })
      })
    },
    btnTrue1 () {
      this.showConform1 = false
      axios.post('/api/preMoment', {
        moment: this.moment,
        user_id: this.info.id,
        user_name: this.info.name,
        monent_img: this.imgPath
      }).then(() => {
        this.$router.push({ path: '/home' })
      })
    },
    handleAvatarSuccess (res, file) {
      console.log(arguments)
      // this.imageUrl = URL.createObjectURL(file.raw)
      this.imgPath = res.data.imgPath
    },
    beforeAvatarUpload (file) {
      const isJPG = (file.type === 'image/jpeg') || (file.type === 'image/png')
      const isLt10M = file.size / 1024 / 1024 < 10

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt10M) {
        this.$message.error('上传头像图片大小不能超过 10MB!')
      }
      return isJPG && isLt10M
    },
    handleInputChange () {
      var form = document.getElementById('upload')

      var formData = new FormData(form)
      $.ajax({
        url: 'http://s.hangray.com:18040/resource/images',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
          if (res) {
            alert('上传成功！')
          }
          console.log(res)
          $('#pic').val('')
          $('.showUrl').html(res)
          $('.showPic').attr('src', res)
        },
        error: function (err) {
          alert('网络连接失败,稍后重试', err)
        }

      })
    }
  }
}
</script>
<style scoped>
  .new{
    width: 100%;
    min-height: 100vh;
    font-size: .33rem;
  }
  header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  header div:nth-child(1){
    width: 15%;
    height: 30px;
    line-height: 30px;
  }
  header div:nth-child(2){
    font-size: 0.43rem;
    width: 50%;
  }
  header div:nth-child(3){
    color: #999;
    width: 15%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .new-content{
    padding: 0.2rem 0px 0 0;
    width: 100%;
    height: 7rem;
    border: none;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 200px;
    display: block;
  }
</style>
