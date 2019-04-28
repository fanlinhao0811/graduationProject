var sqlMap = {
  getValue: 'SELECT * FROM user WHERE id = ?',
  setValue: 'INSERT INTO user SET name= ?',
  newUser: 'INSERT INTO user SET name= ? , pwd = ? , `desc` = ?',
  login: 'SELECT * FROM user WHERE name = ? AND pwd = ? ',
  beforeLogin: 'SELECT * FROM user WHERE name = ?',
  newMoment: 'INSERT INTO user_moment SET moment= ? , user_id = ?, monent_img = ?, user_name = ?',
  preMoment: 'INSERT INTO pre_moment SET moment= ? , user_id = ?, moment_img = ?, user_name = ?',
  moment: 'SELECT * FROM user_moment',
  friendMoment: 'select * from user_moment where user_name = any(select follower_name from user_follow where user_name= ? )',
  getInfo: 'SELECT * FROM user WHERE name = ?',
  // user: 'SELECT count(*) as name FROM user_moment WHERE user_name = ? UNION ALL SELECT `desc` FROM user WHERE name = ?',
  flw: 'INSERT INTO user_follow SET user_name= ? , follower_name = ?',
  cancelFlw: 'DELETE FROM user_follow WHERE user_name= ? AND follower_name = ?',
  isFollow: 'SELECT * FROM user_follow WHERE user_name= ? AND follower_name = ?',
  updateInfo: 'UPDATE user SET `desc` = ? , pwd = ? WHERE id = ? ',
  sendSuggest: 'INSERT INTO suggest SET suggest= ? , send_user_id = ?, send_user_name = ? ',

  like_moment: 'INSERT INTO moment_like SET moment_id= ? , moment_user_id = ?, moment_user = ? , like_user = ? , like_user_id = ?',
  like_count: 'select * from moment_like where moment_id = any(select id from user_moment where user_name= ? )',
  getRecommend: 'select * from recommend',

  getShortInfo: 'SELECT name,`desc`,img FROM user WHERE name = ?',
  // userMomentCount: 'SELECT count(*) as userMomentCount FROM user_moment WHERE user_name = ?',
  userMoment: 'SELECT * FROM user_moment WHERE user_name = ?',
  // userFollowed: 'SELECT count(*) as follow FROM user_follow WHERE user_name = ? ',
  userFol: 'SELECT * FROM user_follow WHERE user_name = ? ',
  userFan: 'SELECT * FROM user_follow WHERE follower_name = ? ',
  userPre: 'SELECT * FROM pre_moment WHERE user_name = ? ',
  mySuggest: 'SELECT * FROM suggest WHERE send_user_name = ? ',
  delPre: 'DELETE FROM pre_moment WHERE id= ? ',
  adminUser: 'SELECT * FROM user'
}

module.exports = sqlMap
