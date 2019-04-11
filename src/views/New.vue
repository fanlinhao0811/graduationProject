
<template>
  <div class="new">
    <header>
      <div @click="cancel">取消</div>
      <div>创意时刻</div>
      <div @click="newMonment">发送</div>
    </header>
    <textarea class="new-content" placeholder="分享你的moment..." v-model="moment"></textarea>
    <!-- <form action="/upload" method="post" enctype="multipart/form-data">
      <h2>单图上传</h2>
      <input type="file" name="logo">
      <input type="submit" value="提交">
    </form> -->
    <el-upload
      class="avatar-uploader"
      action="http://s.hangray.com:18040/resource/images"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <!-- <input type="file" name="image" accept=“image/*” id='upload' @change='handleInputChange()'> -->
    <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
    <conform :showConform='showConform' :conformMsg='conformMsg' @hideConform="hideConform" @btnTrue="btnTrue"></conform>
  </div>
</template>

<script>
import axios from 'axios'
// import toast from '../components/toast/index.js'
import { mapState } from 'vuex'
import mfooter from '../components/Footer'
import conform from '../components/Conform'
import $ from 'jquery'
export default {
  name: 'new',
  data () {
    return {
      showConform: '',
      conformMsg: '',
      moment: '',
      imageUrl: ''
    }
  },
  components: {
    mfooter,
    conform
  },
  created () {
    if (!this.isLogin) {
      this.$router.push({ path: '/login' })
    }
  },
  computed: mapState({
    isLogin: state => state.isLogin,
    info: state => state.info
  }),
  methods: {
    cancel () {
      this.showConform = true
      this.conformMsg = '需要为您保存草稿吗？'
    },
    newMonment () {
      this.showConform = true
      this.conformMsg = '您确定发布吗？'
    },
    hideConform (val) {
      this.showConform = val
    },
    btnTrue () {
      this.showConform = false
      axios.post('/api/newMoment', {
        moment: this.moment,
        user_id: this.info.id,
        user_name: this.info.name,
        monent_img: this.imageUrl
      }).then((res) => {
        console.log('res', res)
      })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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
