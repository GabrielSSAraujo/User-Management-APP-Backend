const user = (sequelize, DataTypes) =>{
  const User = sequelize.define('User',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    level:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },{
    tableName: 'users'
  });
  return User;
}

module.exports = user;