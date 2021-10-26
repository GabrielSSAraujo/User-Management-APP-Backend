'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,

      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      }, 
      email:{
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
        unique: true,

      },
      password:{
        type: Sequelize.STRING,
        allowNull:false,

      },
      level:{
        type: Sequelize.INTEGER,
        allowNull:false,

      } ,
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
    });
  
  },

  down: async (queryInterface, Sequelize) => {

     return await queryInterface.dropTable('users');

  }
};
