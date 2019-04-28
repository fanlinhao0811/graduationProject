<template>
  <div class="finder">
    <div class="container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in recommend" :key="index">
            <img :src="item.img" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="item" v-for="(item,index) in list" :key="index">
        <img :src="item.monent_img || `http://image.wufazhuce.com/FqOWy_yCMK1PGdYioZW8bN52UO96`" alt="">
        <p>{{item.moment}}</p>
        <p @click="linkto(item.user_name)">— {{item.user_name}}</p>
        <div class="item-footer">
          <div class="share" @click="showShare = true"><i class="el-icon-share"/>分享</div>
          <div class="like" @click="like(item)"><i class="el-icon-star-off"/>喜欢</div>
        </div>
      </div>
      <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
      <Share v-model = "showShare"></Share>
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
import Share from '../components/Share'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper'
import Cookies from 'js-cookie'
// import toast from '../components/toast/index.js'
export default {
  name: 'blog',
  data () {
    return {
      dialogVisible: false,
      tempList: [],
      list: [],
      showShare: false,
      me: null,
      recommend: null
    }
  },
  components: {
    mfooter,
    Share
  },
  created () {
    this.init()
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
    getInfo () {
      return axios.get('/api/getInfo', {
        params: { name: Cookies.get('user') }
      })
    },
    getRecommend () {
      return axios.get('/api/getRecommend')
    },
    getMoment () {
      return axios.get('/api/moment')
    },
    init () {
      axios.all([this.getInfo(), this.getMoment(), this.getRecommend()]).then(
        (res) => {
          this.me = res[0].data[0]
          this.list = res[1].data.reverse().filter(item => item.user_name !== Cookies.get('user'))
          this.recommend = res[2].data.filter(item => item.status === '推荐')
        }
      )
    },
    handleClose (done) {
      done()
    },
    linkto (hash) {
      if (Cookies.get('user') === hash) {
        this.$router.push({ name: 'me' })
      } else {
        this.$router.push({ path: `/user/` + hash })
      }
    },
    like (item) {
      axios.post('/api/like_moment', {
        moment_id: item.id,
        moment_user_id: item.user_id,
        moment_user: item.user_name,
        like_user_id: this.me.id,
        like_user: this.me.name
      }).then(() => {
        this.init()
      })
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
  width: 90%;
  margin-left: 5%;
  margin-top: 0.2rem;
  background: #fff;
  border-radius: 10px;
}
.container .item img {
  border-radius: 10px 10px 0 0;
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
  text-align: right;
  margin-right: 0.4rem;
  margin-top: 0.2rem;
}
.item-footer {
  width: 90%;
  margin-left: 5%;
  padding: 3% 0;
  display: flex;
  justify-content: space-between;
}
.swiper-container{
    width: 100%;
    height: 200px;
}
.swiper-wrapper{
  width: 100%;
}
.swiper-container img{
  width: 100%;
}
</style>
