<template>
  <div class="">
    <nav>
      <div class="friend">
        <router-link to="/home/friend">friend</router-link>
      </div>
      <div class="me">
        <router-link to="/home/me">me</router-link>
      </div>
    </nav>
    <router-view class="home-con"></router-view>
    <mfooter bgColor="rgb(74, 75, 79)"></mfooter>
  </div>
</template>

<script>
import mfooter from '../components/Footer'
export default {
  name: 'home',
  components: {
    mfooter
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
  font-size: .4rem;
}
nav{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(74, 75, 79);
  height: 40px;
  color: #999;
  position: fixed;
  top: 0;
}
nav div a.router-link-active{
  color: #fff;
}
.home-con{
  margin-top: 40px;
}
</style>
