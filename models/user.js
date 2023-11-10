"use strict";
const { Model } = require("sequelize");
const Role = require("./position");
const Site = require("./site");
const Contact = require("./contact");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role);
      User.belongsTo(models.Site);
      User.belongsTo(models.Contact);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,

      //Associations
      RoleId: {
        type: DataTypes.INTEGER,
        references: {
          model: Role,
          key: "id",
        },
      },

      SiteId: {
        type: DataTypes.INTEGER,
        references: {
          model: Site,
          key: "id",
        },
      },

      ContactId: {
        type: DataTypes.INTEGER,
        references: {
          model: Contact,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
