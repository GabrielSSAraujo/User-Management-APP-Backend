require('dotenv').config({
  path: process.env.NODE_ENV==='test' ? '.env.test' : '.env'
});

module.exports = {
    host:`${process.env.DB_HOST}`,
    port: 5432,
    database: `${process.env.DB_NAME}`,
    dialect: `${process.env.DB_DIALECT}`,
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    storage: './__tests__/database.sqlite',
  };
  