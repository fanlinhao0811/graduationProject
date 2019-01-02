<template>
  <div class="">
    <button type="primary" @click="getArticle">调用后台接口</button>
    <input v-model="inpContent">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'blog',
  data () {
    return {
      inpContent: 'Blog'
    }
  },
  methods: {
    getArticle () {
      axios.get('/api/getArticle')
        .then((res) => {
          console.log('res', res)
          this.inpContent = res.data.data
        })
    }
  }
}
</script>
