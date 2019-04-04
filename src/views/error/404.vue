<template>
  <div class="errPage">
    <div class="errPage-container">
      404
    </div>
  </div>
</template>

<script>
import errGif from '@/assets/401.gif'
import ewizardClap from '@/assets/gifs/wizard_clap.gif'

export default {
  data () {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap,
      dialogVisible: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.errPage {
  background: #fff;
  position: relative;
  padding: 100px;
}

.errPage-container {
  width: 800px;
  margin: 0 auto;
  .pan-back-btn {
    background: #008489;
    color: #fff;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
