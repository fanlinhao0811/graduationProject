const routerApi = require('./router')
const bodyParser = require('body-parser') // post 数据是需要
const express = require('express')
const path = require('path')
const app = express()



app.use('/upload', express.static(path.join(__dirname, 'upload')))


app.use(bodyParser.json())

// 后端api路由
app.use('/api', routerApi)

// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
