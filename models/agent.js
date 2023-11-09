'use strict';
const {
  Model
} = require('sequelize');
const Position = require('./position')
const Site = require('./site')
const Contact = require('./contact')
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Agent.belongsTo(models.Position);
      Agent.belongsTo(models.Site);
      Agent.belongsTo(models.Contact);
    }
  }
  Agent.init({
    ContactId: {
      type: DataTypes.INTEGER,
      references: {
        model: Contact,
        key: 'id'
      }
    },
    PositionId: {
      type: DataTypes.INTEGER,
      references: {
        model: Position,
        key: 'id'
      }
    },
    SiteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Site,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};