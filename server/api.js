const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')
const path = require('path')
const fs = require('fs')

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
  preMoment (req, res, next) {
    var moment = req.body.moment
    var userId = req.body.user_id
    var monentImg = req.body.monent_img
    var userName = req.body.user_name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.preMoment
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

  // user (req, res, next) {
  //   var name = req.query.name
  //   pool.getConnection((err, connection) => {
  //     var sql = sqlMap.user
  //     connection.query(sql, [name, name], (err, result) => {
  //       res.json(result)
  //       connection.release()
  //     })
  //   })
  // },

  getShortInfo (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getShortInfo
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  userMomentCount (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.userMomentCount
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  userMoment (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.userMoment
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  friendMoment (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.friendMoment
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  userFollowed (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.userFollowed
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  userFol (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.userFol
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  userFan (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.userFan
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  userPre (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.userPre
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  mySuggest (req, res, next) {
    var name = req.query.name
    pool.getConnection((err, connection) => {
      var sql = sqlMap.mySuggest
      connection.query(sql, [name], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  delPre (req, res, next) {
    var id = req.body.id
    pool.getConnection((err, connection) => {
      if (err) { throw err }
      var sql = sqlMap.delPre
      connection.query(sql, [id], (err, result) => {
        if (err) { res.json(err) }
        res.json(result)
        connection.release()
      })
    })
  },
  flw (req, res, next) {
    var userName = req.body.user_name
    var followerName = req.body.follower_name
    pool.getConnection((err, connection) => {
      if (err) { throw err }
      var sql = sqlMap.flw
      connection.query(sql, [userName, followerName], (err, result) => {
        if (err) { res.json(err) }
        res.json(result)
        connection.release()
      })
    })
  },
  cancelFlw (req, res, next) {
    var userName = req.body.user_name
    var followerName = req.body.follower_name
    pool.getConnection((err, connection) => {
      if (err) { throw err }
      var sql = sqlMap.cancelFlw
      connection.query(sql, [userName, followerName], (err, result) => {
        if (err) { res.json(err) }
        res.json(result)
        connection.release()
      })
    })
  },
  isFollow (req, res, next) {
    var userName = req.query.user_name
    var followerName = req.query.follower_name
    pool.getConnection((err, connection) => {
      if (err) { throw err }
      var sql = sqlMap.isFollow
      connection.query(sql, [userName, followerName], (err, result) => {
        if (err) { res.json(err) }
        res.json(result)
        connection.release()
      })
    })
  },
  updateInfo (req, res, next) {
    var desc = req.body.desc
    var pwd = req.body.pwd
    var id = req.body.id
    pool.getConnection((err, connection) => {
      if (err) { throw err }
      var sql = sqlMap.updateInfo
      connection.query(sql, [desc, pwd, id], (err, result) => {
        if (err) { res.json(err) }
        res.json(result)
        connection.release()
      })
    })
  },
  sendSuggest (req, res, next) {
    var suggest = req.body.suggest
    var sendUserId = req.body.send_user_id
    var sendUserName = req.body.send_user_name
    pool.getConnection((err, connection) => {
      if (err) { throw err }
      var sql = sqlMap.sendSuggest
      connection.query(sql, [suggest, sendUserId, sendUserName], (err, result) => {
        if (err) { res.json(err) }
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
  },


  uploadImg (req, res, next) {

    // console.log(req.files.file);
    // console.log(__dirname)
    // console.log(path.resolve(__dirname, '../'));

    // 上传图片

    const uploadDir = `upload/`// 保存的文件夹
    const file = req.files.file    // 获取上传文件
    const ext = file.name.split('.').pop()        // 获取上传文件扩展名
    const fileName = `${Date.parse(new Date())}.${ext}`  // 文件名
    const filePath = `./${uploadDir}${fileName}`       // 文件路径
    const reader = fs.createReadStream(file.path)    // 创建可读流
    const upStream = fs.createWriteStream(path.join(__dirname, `${filePath}`))        // 创建可写流
    reader.pipe(upStream)                                    // 可读流通过管道写入可写流

    res.json({ code: 0, msg: 'success', data: {imgPath: `/static/${fileName}`} })


    // pool.getConnection((err, connection) => {
    //   var sql = sqlMap.adminUser
    //   connection.query(sql, [], (err, result) => {
    //     res.json(result)
    //     connection.release()
    //   })
    // })
  }
}
