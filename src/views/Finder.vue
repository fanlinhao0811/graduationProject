
<template>
  <div class="finder">
    <div class="container">
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="http://seopic.699pic.com/photo/50087/5186.jpg_wh1200.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="http://seopic.699pic.com/photo/50087/5186.jpg_wh1200.jpg" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="item" v-for="(item,index) in list" :key="index">
        <img :src="item.monent_img || `http://image.wufazhuce.com/FqOWy_yCMK1PGdYioZW8bN52UO96`" alt="">
        <p>{{item.moment}}</p>
        <p @click="linkto(item.user_name)">--{{item.user_name}}</p>
        <div class="item-footer">
          <div class="share">11</div>
          <div class="like" @click="dialogVisible = true">22</div>
        </div>
      </div>
      <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
      <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import mfooter from '../components/Footer'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper'
// import toast from '../components/toast/index.js'
export default {
  name: 'blog',
  data () {
    return {
      dialogVisible: false,
      tempList: [],
      list: []
    }
  },
  components: {
    mfooter
  },
  created () {
    axios.get('/api/moment').then((res) => {
      this.list = res.data.reverse()
      console.log(this.list)
    })
    /* eslint-disable no-new */
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        autoplay: true,
        loop: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: '.swiper-pagination'
        }
      })
    })
  },
  methods: {
    handleClose (done) {
      done()
    },
    linkto (hash) {
      this.$router.push({ path: `/user/` + hash })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  font-size: 0.3rem;
  width: 100%;
  background: #ccc;
  margin-bottom: 50px;
}
.container .item {
  margin-top: 0.2rem;
  background: #fff;
}
.container .item img {
  display: block;
  width: 100%;
}
.container .item p:nth-child(2) {
  width: 80%;
  margin-left: 10%;
  line-height: 0.5rem;
  text-align: left;
}
.container .item p:nth-child(3) {
  margin-top: 0.8rem;
}
.item-footer {
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
}
.swiper-container{
    width: 100%;
    height: 150px;
}
.swiper-container .swiper-slide{
    width: 40%;
    transition: transform 0.5s ease;
}
.swiper-container .swiper-slide-active{
    transform: scale(1.4);
    z-index: 100;
}
.swiper-container img{
    width: 100%;
}
.swiper-container .swiper-slide-active img{
    -moz-box-shadow:0 0 5px #ddad73;
    -webkit-box-shadow:0 0 5px #ddad73;
    box-shadow:0 0 5px #ddad73;
}
.swiper-pagination{
    position: relative;
    top: -13.2%;
    z-index: 99;
}
.swiper-pagination-bullet{
    width: 5px;
    height: 5px;
    border: 1px solid #ddad73;
    border-radius: 5px;
}
.swiper-pagination-bullet-active{
    background: #ddad73;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: -18px;
}
</style>
