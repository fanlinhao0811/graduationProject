<template>
  <div class="share-wrapper" v-if="value">
   <div class="close" @click="close"><img src="../assets/images/cl.png" alt=""></div>
   <div class="con">
     <img src="../assets/images/weixin.png" alt="">
     <img src="../assets/images/pyq.jpg" alt="">
     <img src="../assets/images/qq.png" alt="">
     <img src="../assets/images/weibo.png" alt="">
     <img src="../assets/images/lianjie.png" alt="">
   </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
  }),
  methods: {
    close () {
      return this.$emit('input', false)
    }
  }
}
</script>

<style>
  .share-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: #fff;
    z-index: 99;
  }
  .close{
    height: 5%;
  }
  .close img{
    width: 20px;
    padding-top: 10px;
    margin-left: 300px;
  }
  .con{
    height: 95%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .con img{
    display: inline-block;
    width: 60px;
    margin: 5% auto;
  }
</style>
