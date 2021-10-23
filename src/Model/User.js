const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.TEXT,
        },
        email: {
          type: DataTypes.TEXT,
        },
        password: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        tableName: "user",
      }
    );
  }
}

module.exports = { User };
