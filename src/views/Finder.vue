
<template>
  <div class="finder">
    <div class="container">
      <div class="banner"></div>
      <div class="item" v-for="(item,index) in list" :key="index">
        <img :src="item.monent_img || `http://image.wufazhuce.com/FqOWy_yCMK1PGdYioZW8bN52UO96`" alt="">
        <p>{{item.moment}}</p>
        <p @click="dialogVisible = true">{{item.user_name}}</p>
        <div class="item-footer">
          <div class="share">11</div>
          <div class="like">22</div>
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
  },
  methods: {
    handleClose (done) {
      done()
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
</style>
