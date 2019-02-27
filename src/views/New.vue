
<template>
  <div class="new">
    <header>
      <div>取消</div>
      <div>创意时刻</div>
      <div>发送</div>
    </header>
    <textarea class="new-content" placeholder="分享你的moment..."></textarea>
    <mfooter bgColor="rgb(121, 85, 72)"></mfooter>
  </div>
</template>

<script>
import axios from 'axios'
// import toast from '../components/toast/index.js'
import { mapState } from 'vuex'
import mfooter from '../components/Footer'
export default {
  name: 'me',
  data () {
    return {
      inpContent: '',
      xx: '',
      pwd: ''
    }
  },
  components: {
    mfooter
  },
  created () {
    if (this.$store.state.isLogin) {
      this.xx = this.$store.state.name
    } else {
      this.$router.push({ path: '/login' })
    }
  },
  computed: mapState({
    isLogin: state => state.isLogin,
    name: state => state.name
  }),
  methods: {
    setValue () {
      axios.post('/api/setValue', {
        name: this.xx
      }).then((res) => {
        console.log('res', res)
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
    margin-top: 0.2rem;
    width: 100%;
    height: 5rem;
    border: none;
  }
</style>
