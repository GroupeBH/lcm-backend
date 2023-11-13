'use strict';
const {
  Model
} = require('sequelize');
const Product = require('./product');
const Site = require('./site');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entry.belongsTo(models.Product);
      Entry.belongsTo(models.Site);
      Entry.belongsTo(models.User);
    }
  }
  Entry.init({
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER,
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    SiteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Site,
        key: 'id'
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};