<template>
  <div>
    <el-table
    :data="user"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="id"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      label="头像"
      width="100"
      align="center">
      <template slot-scope="scope">
        <img :src="scope.row.img" alt="" style="width:40px;">
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="250"
      align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">取消管理员</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  name: 'adminUser',
  data () {
    return {
      user: [],
      userInfo: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (!Cookies.get('user')) {
        this.$router.push({ path: '/adminLogin' })
      } else {
        axios.get('/api/adminUser').then((res) => {
          this.user = res.data.reverse()
          this.user = this.user.filter(item => item.admin === 1)
        })
      }
    },
    handleClick (row) {
      this.userInfo = row
      axios.post('/api/cancleAdmin', {
        admin: 0,
        id: this.userInfo.id
      }).then((res) => {
        this.init()
      })
    }
  }
}
</script>

<style scoped>
</style>
