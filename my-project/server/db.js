const mysql = require('mysql')

const mysqlConfig = {
  host: '127.0.0.1', // 新建数据库连接时的 主机名或ID地址 内容
  user: 'root',
  password: '960811', // root 密码
  database: 'graduate', // 数据库名
  port: '3306'
}
const pool = mysql.createPool({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
  multipleStatements: true // 多语句查询
})

var setValue = function () {
  pool.getConnection((err, connection) => {
    console.log(err)
  })
}
setValue()
