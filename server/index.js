const routerApi = require('./router')
const bodyParser = require('body-parser') // post 数据是需要
var fs = require('fs')
var express = require('express')
var multer = require('multer')
const app = express()
const upload = multer({ dest: 'upload/' })

app.post('/upload', upload.single('logo'), function (req, res, next) {
  const file = req.file

  console.log('文件类型：%s', file.mimetype)
  console.log('原始文件名：%s', file.originalname)
  console.log('文件大小：%s', file.size)
  console.log('文件保存路径：%s', file.path)

  res.send({ ret_code: '0' })
})

app.get('/form', function (req, res, next) {
  const form = fs.readFileSync('../src/views/New.vue', { encoding: 'utf8' })
  res.send(form)
})

app.use(bodyParser.json())

// 后端api路由
app.use('/api', routerApi)

// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
