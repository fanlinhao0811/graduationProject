<template>
    <div class="footer" :style="{background:bgColor}">
        <ul>
            <li><router-link to='/'>All</router-link></li>
            <li><router-link to='/finder'>FINDER</router-link></li>
            <li><router-link to='/me'>ME</router-link></li>
        </ul>
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
    }
  .footer ul{
    display: flex;
    }
  .footer li{
    flex: 1;
    text-align : center;
    list-style: none;
    }
  .footer li a{
    text-decoration: none;
    color: #ccc;
   }
  .footer li a.router-link-active{
    color: #fff;
   }
</style>
