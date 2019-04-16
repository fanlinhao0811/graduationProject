var sqlMap = {
  getValue: 'SELECT * FROM user WHERE id = ?',
  setValue: 'INSERT INTO user SET name= ?',
  newUser: 'INSERT INTO user SET name= ? , pwd = ? , `desc` = ?',
  login: 'SELECT * FROM user WHERE name = ? AND pwd = ? ',
  beforeLogin: 'SELECT * FROM user WHERE name = ?',
  newMoment: 'INSERT INTO user_moment SET moment= ? , user_id = ?, monent_img = ?, user_name = ?',
  moment: 'SELECT * FROM user_moment',
  getInfo: 'SELECT * FROM user WHERE name = ?',
  user: 'SELECT count(*) FROM user_moment WHERE user_id = ? UNION ALL SELECT fans FROM user WHERE id = ? UNION ALL SELECT name FROM user WHERE id = ?',
  adminUser: 'SELECT * FROM user'
}

module.exports = sqlMap
