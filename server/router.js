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

// 通过用户名获取信息
router.get('/getInfo', (req, res, next) => {
  api.getInfo(req, res, next)
})

module.exports = router
