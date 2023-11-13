'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'Sorties', // name of Target model
      'UserId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ).then(() => {
      return queryInterface.addColumn(
        'Sorties', // name of Target model
        'SiteId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Sites', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    }).then(() => {
      return queryInterface.addColumn(
        'Sorties', // name of Target model
        'ProductId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
    })
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
