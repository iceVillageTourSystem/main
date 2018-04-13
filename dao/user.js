const Sequelize = require('sequelize');
const sq = require('./initSequelize.js');

// console.log('>>>', sq);

let User = sq.define('users', {
    id: {
        type: Sequelize.INTEGER(32),
        primaryKey: true
    },
    username: Sequelize.STRING(32),
    password: Sequelize.STRING(64),
    is_manager: Sequelize.BOOLEAN(2)
}, {
    timestamps: false
});

const createUser = async function (data) {
  let {username, password, isManager} = data;
  let Now = Date.now();

  return await User.create({
    id: Now % 1000000,
    username,
    password,
    is_manager: isManager || 0
  })
}

const hasTheUser = async function (username) {
  let result = false;

  return await User.findOne({
    where: {username}
  }).then(d => {
    result = (d !== null) ? true : false;
    return result;
  })
}

const checkIn = async function (username, password) {
  return User.findOne({
    where: {username, password}
  })
}

module.exports = {
  createUser,
  hasTheUser,
  checkIn
}