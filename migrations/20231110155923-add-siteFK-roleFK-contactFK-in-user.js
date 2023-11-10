"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "roleId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Roles", // name of Source model
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn(
      "Users", // name of Target model
      "siteId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Sites", // name of Source model
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );

    await queryInterface.addColumn("Users", "contactId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Contacts", // name of Source model
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
