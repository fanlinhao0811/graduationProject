
<template>
  <div class="container">
    <div class="item" v-for="(item,index) in list" :key="index">
      <img :src="item.monent_img || `http://image.wufazhuce.com/FqOWy_yCMK1PGdYioZW8bN52UO96`" alt="">
      <p>{{item.moment}}</p>
      <div class="item-footer">
        <div class="share" @click="showShare = true"><i class="el-icon-share"/>分享</div>
        <div class="like">{{item.like_count || 0}}人喜欢</div>
      </div>
    </div>
    <Share v-model = "showShare"></Share>
  </div>
</template>

<script>
import Share from '../components/Share'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'homeMe',
  data () {
    return {
      list: [],
      showShare: false
    }
  },
  components: {
    Share
  },
  created () {
    axios.get('/api/userMoment', {
      params: { name: Cookies.get('user') }
    }).then((res) => {
      this.list = res.data.reverse()
    })
  }
}
</script>
<style lang="scss" scoped>
.container {
  font-size: 0.3rem;
  width: 100%;
  margin-bottom: 50px;
  background:rgb(74, 75, 79);
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
</style>
