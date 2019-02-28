<template>
  <transition name="fadeIn">
    <div class="conform" v-if="showConform">
      <div class="wrapper">
        <p>{{conformMsg}}</p>
        <div class="btn">
          <div class="btn-false" @click="$emit('hideConform', false)">取消</div>
          <div class="btn-true" @click="btnTrue">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ['showConform', 'conformMsg'],
  methods: {
    btnTrue () {
      this.$emit('btnTrue')
    }
  }
}
</script>

<style scoped>
.conform{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
}
.wrapper{
  width: 270px;
  height: 125px;
  background: #fff;
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  font-size: 17px;
}
.wrapper p{
  width: 100%;
  height: 62px;
  text-align: center;
  color: #333333;
  font-weight: bold;
  margin-bottom: 0;
  line-height: 52px;
}
.btn{
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgb(216, 216, 216);
}
.btn-true,.btn-false{
  width: 50%;
  height: 45px;
  line-height: 50px;
  text-align: center;
  color: #1478F0;
}
.btn-false{
  color: #999999;
  border-right: 1px solid rgb(216, 216, 216);
}
.fadeIn-enter,.fadeIn-leave-to{
  opacity: 0;
  visibility: hidden;
}
.fadeIn-enter-active ,.fadeIn-leave-active{
  transition: all .5s ease;
  visibility: visible;
}
</style>
