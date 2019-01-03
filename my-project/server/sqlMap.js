var sqlMap = {
  getValue: 'SELECT * FROM user WHERE id = ?',
  setValue: 'UPDATE test SET name = ? WHERE id = ?'
}

module.exports = sqlMap
