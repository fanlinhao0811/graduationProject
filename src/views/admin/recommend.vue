<template>
  <div>
    <el-table
    :data="user"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="moment_id"
      label="moment_id"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      label="图片"
      width="140"
      align="center">
      <template slot-scope="scope">
        <img :src="scope.row.img" alt="" style="width:100px;">
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">预览</el-button>
        <el-button v-if="scope.row.status === '推荐'" @click="cancelRecommend(scope.row)" type="text" size="small">存档</el-button>
        <el-button v-else @click="setrecommend(scope.row)" type="text" size="small">推荐</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-dialog
    v-if="userInfo"
    title="图片详情"
    :visible.sync="dialogVisible"
    width="30%">
    <img :src="userInfo.img" alt="" style="width:300px;">
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  name: 'recommend',
  data () {
    return {
      user: [],
      dialogVisible: false,
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
        axios.get('/api/recommend').then((res) => {
          this.user = res.data.reverse()
        })
      }
    },
    handleClick (row) {
      this.dialogVisible = true
      this.userInfo = row
    },
    setrecommend (row) {
      axios.post('/api/setrecommend', {
        status: '推荐',
        id: row.id
      }).then((res) => {
        this.init()
      })
    },
    cancelRecommend (row) {
      axios.post('/api/cancelRecommend', {
        status: '存档',
        id: row.id
      }).then((res) => {
        this.init()
      })
    }
  }
}
</script>

<style scoped>
</style>
