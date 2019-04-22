
<template>
  <div class="finder">
    <div class="container">
      <div class="item" v-for="(item,index) in list" :key="index">
        <p>{{item.moment}}</p>
        <img :src="item.monent_img || `http://image.wufazhuce.com/FqOWy_yCMK1PGdYioZW8bN52UO96`" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'homeMe',
  data () {
    return {
      list: []
    }
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
}
.container .item {
  border-bottom: 1px solid #ccc;
}
.container .item:nth-child(1) {
  margin-top: 40px;
}
.container .item img {
  display: block;
  width: 80%;
  margin-left: 10%;
  padding-bottom: 6%;
}
.container .item p {
  text-align: left;
  margin-left: 10%;
  padding-top: 3%;
}
</style>
