'use strict';
const {
  Model
} = require('sequelize');
const Agent = require('./agent')
module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Site.hasMany(models.Agent)
    }
  }
  Site.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Site',
  });
  return Site;
};