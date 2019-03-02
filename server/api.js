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
    pool.getConnection((err, connection) => {
      var sql = sqlMap.newUser
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  login (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.login
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  }
}
