
const sequelize = require('../Database/index');
const User = require("./User");
const Sequelize = require('sequelize');


const user = User(sequelize,Sequelize.DataTypes);

const db = {
  user,
  sequelize
}
  
module.exports = db