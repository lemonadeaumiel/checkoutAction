const dbConfig = require("./config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://fsletfzv:3XXuQYLm1vDNQKlgcIT38hkhv5DYGMBi@satao.db.elephantsql.com/fsletfzv', {
  dialect: dbConfig.development.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.development.pool.max,
    min: dbConfig.development.pool.min,
    acquire: dbConfig.development.pool.acquire,
    idle: dbConfig.development.pool.idle
  }
});

sequelize.sync

module.exports = sequelize;