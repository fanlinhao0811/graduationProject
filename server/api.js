const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
})

module.exports = {
  getValue (req, res, next) {
    var id = req.query.id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue
      connection.query(sql, [id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  setValue (req, res, next) {
    console.log(req.body)
    var name = req.body.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  newUser (req, res, next) {
    var name = req.body.name
    var pwd = req.body.pwd
    var desc = req.body.desc
    pool.getConnection((err, connection) => {
      var sql = sqlMap.newUser
      connection.query(sql, [name, pwd, desc], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  login (req, res, next) {
    var name = req.query.name
    var pwd = req.query.pwd
    pool.getConnection((err, connection) => {
      if (err) {
        res.send(err)
      } else {
        var beforeSql = sqlMap.beforeLogin
        connection.query(beforeSql, [name], (err, result) => {
          if (Array.isArray(result) && result.length === 0) {
            res.send('此用户不存在')
          } else {
            var sql = sqlMap.login
            connection.query(sql, [name, pwd], (err, result) => {
              if (Array.isArray(result) && result.length === 0) {
                res.send('密码错误')
              } else {
                res.json(result)
              }
            })
          }
          connection.release()
        })
      }
    })
  },
  newMoment (req, res, next) {
    var moment = req.body.moment
    var userId = req.body.user_id
    var monentImg = req.body.monent_img
    var userName = req.body.user_name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.newMoment
      connection.query(sql, [moment, userId, monentImg, userName], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },

  moment (req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.moment
      connection.query(sql, [], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },

  // admin
  getInfo (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getInfo
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },

  adminUser (req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.adminUser
      connection.query(sql, [], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  }
}
