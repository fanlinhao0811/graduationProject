<template>
  <div>
    <el-table
    :data="user"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="suggest_id"
      label="suggest_id"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="send_user_name"
      label="发送者"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="suggest"
      label="内容"
      align="center">
    </el-table-column>
    <el-table-column
      label="回复"
      align="center">
      <template slot-scope="scope">
        <span>{{scope.row.reply || '暂未处理～～'}}</span>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
      align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">回复</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    v-if="suggest"
    title="回复监督建议"
    :visible.sync="dialogVisible"
    width="30%">
    <p>{{suggest.suggest}}</p>
    <p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入回复内容"
        v-model="suggest.reply">
      </el-input>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancle">取 消</el-button>
      <el-button type="primary" @click="updateSuggest">回 复</el-button>
    </span>
  </el-dialog>
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
      dialogVisible: false,
      suggest: null
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
        axios.get('/api/suggest').then((res) => {
          this.user = res.data.reverse()
        })
      }
    },
    handleClick (row) {
      this.dialogVisible = true
      this.suggest = row
    },
    cancle () {
      this.dialogVisible = false
      this.init()
    },
    updateSuggest () {
      axios.post('/api/updateSuggest', {
        reply: this.suggest.reply,
        admin_name: Cookies.get('user'),
        id: this.suggest.suggest_id
      }).then((res) => {
        this.dialogVisible = false
        this.init()
      })
    }
  }
}
</script>

<style scoped>
</style>
