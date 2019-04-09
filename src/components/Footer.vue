<template>
    <div class="footer" :style="{background:bgColor}">
      <div><router-link to='/home'>Home</router-link></div>
      <div><router-link to='/finder'>Finder</router-link></div>
      <div><router-link to='/new'>New</router-link></div>
      <div><router-link to='/me'>Me</router-link></div>
    </div>
</template>
<script>
export default {
  props: ['bgColor'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .footer{
    height: 50px;
    background: rgb(33, 150, 243);
    position:fixed;
    bottom:0;
    right: 0;
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.4rem;
    }
  .footer div a{
    text-decoration: none;
    color: #ccc;
   }
  .footer div a.router-link-active{
    color: #fff;
   }
</style>
