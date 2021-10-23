const User = require("../Model/User");
const Sequelize = require("sequelize");
const configDatabase = require("./database");

async function setupSequelize(config) {
  return new Sequelize(config);
}

async function configDB(isAuth, db) {
  return new Promise((resolve, reject) => {
    isAuth.then(() => {
      User.init(db);
      resolve(0);
    });
  });
}

async function initDB() {
  const db = await setupSequelize(configDatabase);
  const isAuth = db.authenticate();
  return configDB(isAuth, db);
}

module.exports = initDB;
