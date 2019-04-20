var sqlMap = {
  getValue: 'SELECT * FROM user WHERE id = ?',
  setValue: 'INSERT INTO user SET name= ?',
  newUser: 'INSERT INTO user SET name= ? , pwd = ? , `desc` = ?',
  login: 'SELECT * FROM user WHERE name = ? AND pwd = ? ',
  beforeLogin: 'SELECT * FROM user WHERE name = ?',
  newMoment: 'INSERT INTO user_moment SET moment= ? , user_id = ?, monent_img = ?, user_name = ?',
  moment: 'SELECT * FROM user_moment',
  getInfo: 'SELECT * FROM user WHERE name = ?',
  // user: 'SELECT count(*) as name FROM user_moment WHERE user_name = ? UNION ALL SELECT `desc` FROM user WHERE name = ?',
  flw: 'INSERT INTO user_follow SET user_name= ? , follower_name = ?',
  cancelFlw: 'DELETE FROM user_follow WHERE user_name= ? AND follower_name = ?',
  isFollow: 'SELECT * FROM user_follow WHERE user_name= ? AND follower_name = ?',

  getShortInfo: 'SELECT name,`desc`,img FROM user WHERE name = ?',
  userMomentCount: 'SELECT count(*) as userMomentCount FROM user_moment WHERE user_name = ?',
  userMoment: 'SELECT * FROM user_moment WHERE user_name = ?',
  userFollowed: 'SELECT count(*) as follow FROM user_follow WHERE user_name = ? ',
  userFol: 'SELECT * FROM user_follow WHERE user_name = ? ',
  userFan: 'SELECT * FROM user_follow WHERE follower_name = ? ',
  adminUser: 'SELECT * FROM user'
}

module.exports = sqlMap
