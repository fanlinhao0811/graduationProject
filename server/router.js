const express = require('express')
const router = express.Router()
const api = require('./api')

var multipart = require('connect-multiparty') // 在处理模块中引入第三方解析模块
var multipartMiddleware = multipart()

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next)
})

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next)
})

// 新注册用户
router.post('/newUser', (req, res, next) => {
  api.newUser(req, res, next)
})

router.get('/login', (req, res, next) => {
  api.login(req, res, next)
})

// 发布moment
router.post('/newMoment', (req, res, next) => {
  api.newMoment(req, res, next)
})
router.post('/preMoment', (req, res, next) => {
  api.preMoment(req, res, next)
})

// 获取moment
router.get('/moment', (req, res, next) => {
  api.moment(req, res, next)
})

// 通过用户名获取信息
router.get('/getInfo', (req, res, next) => {
  api.getInfo(req, res, next)
})

// 点击跳到用户信息
// router.get('/user', (req, res, next) => {
//   api.user(req, res, next)
// })

router.get('/getShortInfo', (req, res, next) => {
  api.getShortInfo(req, res, next)
})
router.get('/userMomentCount', (req, res, next) => {
  api.userMomentCount(req, res, next)
})
router.get('/userMoment', (req, res, next) => {
  api.userMoment(req, res, next)
})
router.get('/friendMoment', (req, res, next) => {
  api.friendMoment(req, res, next)
})
router.get('/userFollowed', (req, res, next) => {
  api.userFollowed(req, res, next)
})
router.get('/userFol', (req, res, next) => {
  api.userFol(req, res, next)
})
router.get('/userFan', (req, res, next) => {
  api.userFan(req, res, next)
})
router.post('/flw', (req, res, next) => {
  api.flw(req, res, next)
})
router.post('/cancelFlw', (req, res, next) => {
  api.cancelFlw(req, res, next)
})
router.get('/isFollow', (req, res, next) => {
  api.isFollow(req, res, next)
})
router.get('/userPre', (req, res, next) => {
  api.userPre(req, res, next)
})
router.get('/mySuggest', (req, res, next) => {
  api.mySuggest(req, res, next)
})
router.post('/delPre', (req, res, next) => {
  api.delPre(req, res, next)
})
router.post('/updateInfo', (req, res, next) => {
  api.updateInfo(req, res, next)
})
router.post('/sendSuggest', (req, res, next) => {
  api.sendSuggest(req, res, next)
})

router.post('/like_moment', (req, res, next) => {
  api.like_moment(req, res, next)
})
router.get('/getRecommend', (req, res, next) => {
  api.getRecommend(req, res, next)
})

router.get('/adminUser', (req, res, next) => {
  api.adminUser(req, res, next)
})

router.post('/setAdmin', (req, res, next) => {
  api.setAdmin(req, res, next)
})
router.post('/cancleAdmin', (req, res, next) => {
  api.cancleAdmin(req, res, next)
})

router.get('/recommend', (req, res, next) => {
  api.recommend(req, res, next)
})
router.post('/setrecommend', (req, res, next) => {
  api.setrecommend(req, res, next)
})
router.post('/cancelRecommend', (req, res, next) => {
  api.cancelRecommend(req, res, next)
})

router.get('/suggest', (req, res, next) => {
  api.suggest(req, res, next)
})
router.post('/updateSuggest', (req, res, next) => {
  api.updateSuggest(req, res, next)
})

// 上传
router.post('/upload', multipartMiddleware, (req, res, next) => {
  api.uploadImg(req, res, next)
})

module.exports = router
