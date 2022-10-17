require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_URL } = process.env;

module.exports = {
  development: {
    username: "fsletfzv",
    password: "3XXuQYLm1vDNQKlgcIT38hkhv5DYGMBi",
    database: "fsletfzv",
    host: "satao.db.elephantsql.com",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    url: DB_DATABASE_URL,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    url: DB_DATABASE_URL,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },

  testing: {
    seedAmount: 100 
  }
};
