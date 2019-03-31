<template>
  <div class="errPage">
    <div class="errPage-container">
        11
      <!-- <el-button icon="el-icon-arrow-left" class="pan-back-btn" @click="back">返回</el-button> -->
      <el-row>
        <el-col :span="12">
          <!-- <h1 class="text-jumbo text-ginormous">Oops!</h1>
          <h2>你没有权限去该页面</h2>
          <h6>如有不满请联系你领导</h6> -->
          <ul class="list-unstyled">
            <li>或者你可以去:</li>
            <li class="link-type">
              <router-link to="/dashboard">回首页</router-link>
            </li>
            <li class="link-type">
              <a href="https://www.taobao.com/">随便看看</a>
            </li>
            <li>
              <a href="#" @click="dialogVisible=true">点我看图</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="12">
          <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
        </el-col>
      </el-row>
      <el-dialog :visible.sync="dialogVisible" title="随便看" fullscreen>
        <img :src="ewizardClap" class="pan-img">
      </el-dialog>
    </div>
  </div>
</template>

<script>
import errGif from '@/assets/401.gif'
import ewizardClap from '@/assets/gifs/wizard_clap.gif'

export default {
  data () {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap,
      dialogVisible: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.errPage {
  background: #fff;
  position: relative;
  padding: 100px;
}

.errPage-container {
  width: 800px;
  margin: 0 auto;
  .pan-back-btn {
    background: #008489;
    color: #fff;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
