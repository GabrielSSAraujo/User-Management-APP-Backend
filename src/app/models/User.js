const user = (sequelize, DataTypes) =>{
    const User = sequelize.define('User',{
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique:true,
      },
      password: DataTypes.STRING,
      level: DataTypes.INTEGER,
    },{
      tableName: 'users'
    });
    return User;
  }
  
  module.exports = user;