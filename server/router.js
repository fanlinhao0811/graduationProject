const express = require('express')
const router = express.Router()
const api = require('./api')

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next)
})

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next)
})

router.post('/newUser', (req, res, next) => {
  api.newUser(req, res, next)
})

router.get('/login', (req, res, next) => {
  api.login(req, res, next)
})

module.exports = router
