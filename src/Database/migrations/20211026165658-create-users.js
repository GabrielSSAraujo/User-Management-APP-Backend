'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,

      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      }, 
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        

      },
      password:{
        type: Sequelize.STRING,
        allowNull:false,

      },
      level:{
        type: Sequelize.INTEGER,
        allowNull:false,

      } ,
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false,
      }
    });
  
  },

  down: async (queryInterface, Sequelize) => {

     return await queryInterface.dropTable('users');

  }
};
