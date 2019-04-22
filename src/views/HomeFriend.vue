
<template>
  <div class="finder">
    <div class="container">
      <div class="item" v-for="(item,index) in list" :key="index">
        <p @click="linkto(item.user_name)">{{item.user_name}}:</p>
        <p>{{item.moment}}</p>
        <img :src="item.monent_img || `http://image.wufazhuce.com/FqOWy_yCMK1PGdYioZW8bN52UO96`" alt="">
      </div>
      <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
    </div>
  </div>
</template>

<script>
import mfooter from '../components/Footer'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'blog',
  data () {
    return {
      list: []
    }
  },
  components: {
    mfooter
  },
  created () {
    axios.get('/api/friendMoment', {
      params: { name: Cookies.get('user') }
    }).then((res) => {
      this.list = res.data.reverse()
    })
  },
  methods: {
    linkto (hash) {
      if (Cookies.get('user') === hash) {
        this.$router.push({ name: 'me' })
      } else {
        this.$router.push({ path: `/user/` + hash })
      }
    }
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
  border-bottom: 1px dotted #ccc;
}
.container .item:nth-child(1) {
  margin-top: 45px;
}
.container .item p:nth-child(1) {
  width: 80%;
  margin-left: 10%;
  line-height: 0.5rem;
  text-align: left;
  font-size: 0.4rem;
  font-weight: bold;
}
.container .item p:nth-child(2) {
  margin-top: -0.2rem;
  width: 80%;
  margin-left: 10%;
  text-align: left;
}
.container .item img {
  display: block;
  width: 80%;
  margin-left: 10%;
  padding-bottom: 6%;
}
</style>
