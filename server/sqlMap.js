var sqlMap = {
  getValue: 'SELECT * FROM user WHERE id = ?',
  setValue: 'INSERT INTO user SET name= ?',
  newUser: 'INSERT INTO user SET name= ? , pwd = ? , `desc` = ?',
  login: 'SELECT * FROM user WHERE name = ? AND pwd = ? ',
  beforeLogin: 'SELECT * FROM user WHERE name = ?'
}

module.exports = sqlMap
