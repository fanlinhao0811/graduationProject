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
      prop="creat_time"
      label="注册时间"
      width="150"
      align="center">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
      align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    v-if="userInfo"
    title="编辑用户信息"
    :visible.sync="dialogVisible"
    width="30%">
    <div class="user-info-con">
      <p>姓名：</p>
      <p><el-input v-model="userInfo.name"  :disabled="true" placeholder="请输入内容" size="mini"></el-input></p>
    </div>
    <div class="user-info-con">
      <p>描述：</p>
      <p><el-input v-model="userInfo.desc" placeholder="请输入内容" size="mini"></el-input></p>
    </div>
    <div class="user-info-con">
      <p>密码：</p>
      <p><el-input v-model="userInfo.pwd" placeholder="请输入内容" size="mini"></el-input></p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancle">取 消</el-button>
      <el-button type="info" @click="setAdmin">设为管理员</el-button>
      <el-button type="primary" @click="updateInfo">更 新</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'adminUser',
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
        axios.get('/api/adminUser').then((res) => {
          this.user = res.data.reverse()
          this.user.map((item) => {
            item.creat_time = moment(item.creat_time).format('YYYY-MM-DD')
          })
        })
      }
    },
    handleClick (row) {
      this.dialogVisible = true
      this.userInfo = row
    },
    cancle () {
      this.dialogVisible = false
      this.init()
    },
    updateInfo () {
      axios.post('/api/updateInfo', {
        desc: this.userInfo.desc,
        pwd: this.userInfo.pwd,
        id: this.userInfo.id
      }).then((res) => {
        this.dialogVisible = false
        this.init()
      })
    },
    setAdmin () {
      axios.post('/api/setAdmin', {
        admin: 1,
        id: this.userInfo.id
      }).then((res) => {
        this.dialogVisible = false
        this.init()
      })
    }
  }
}
</script>

<style scoped>
.user-info-con{
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.user-info-con p:nth-child(1){
  width: 20%;
  text-align: right;
}
.user-info-con p:nth-child(2){
  width: 70%;
  text-align: left;
}
</style>
