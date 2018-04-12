// Ooject Relational Mapping 初始化
const Sequelize = require('sequelize');
const dbconfig = require('../dbconfig');

module.exports = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});