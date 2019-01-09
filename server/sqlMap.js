var sqlMap = {
  getValue: 'SELECT * FROM user WHERE id = ?',
  setValue: 'INSERT INTO user SET name= ?',
  newUser: 'INSERT INTO user SET name= ?'
}

module.exports = sqlMap
