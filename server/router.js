const express = require('express')
const router = express.Router()
const api = require('./api')

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
router.post('/delPre', (req, res, next) => {
  api.delPre(req, res, next)
})

router.get('/adminUser', (req, res, next) => {
  api.adminUser(req, res, next)
})

module.exports = router
