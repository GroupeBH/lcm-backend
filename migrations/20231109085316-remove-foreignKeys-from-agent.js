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
    return queryInterface.removeConstraint('Agents', 'Agents_contact_foreign_idx')
    .then(() => {
      return queryInterface.removeConstraint('Agents', 'Agents_position_foreign_idx')
    })
    .then(() => {
      return queryInterface.removeConstraint('Agents', 'Agents_site_foreign_idx')
    })
    .then(() => {
      return queryInterface.removeColumn('Agents', 'contact')
    })
    .then(() => {
      return queryInterface.removeColumn('Agents', 'position');
    })
    .then(() => {
      return queryInterface.removeColumn('Agents', 'site');
    })
    .then(() => {
      return queryInterface.removeColumn('Agents', 'ContactId');
    })
    .then(() => {
      return queryInterface.removeColumn('Agents', 'PositionId');
    })
    .then(() => {
      return queryInterface.removeColumn('Agents', 'SiteId');
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
