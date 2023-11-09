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
    return queryInterface.removeColumn(
      'Agents', // name of the Target model
      'contact' // key we want to remove
    ).then(() => {
      return queryInterface.addColumn(
        'Agents', // name of Target model
        'contact', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Contacts', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    }).then(() => {
      return queryInterface.addColumn(
        'Agents', // name of Target model
        'site', // name of the key we're adding
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
        'Agents', // name of Target model
        'position', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Positions', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    })
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn(
      'Agents', // name of the Target model
      'contact' // key we want to remove
    ).then(() => {
      return queryInterface.removeColumn(
        'Agents', // name of the Target model
        'site' // key we want to remove
      ).then(() => {
        return queryInterface.removeColumn(
          'Agents', // name of the Target model
          'position' // key we want to remove
        );
      })
    })
  }
};
