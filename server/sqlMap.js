var sqlMap = {
  getValue: 'SELECT * FROM user WHERE id = ?',
  setValue: 'INSERT INTO user SET name= ?',
  newUser: 'INSERT INTO user SET name= ?',
  login: 'SELECT pwd FROM user WHERE name = ?'
}

module.exports = sqlMap
