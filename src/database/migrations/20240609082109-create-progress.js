"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("progresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_materi: {
        type: Sequelize.INTEGER,
      },
      id_user: {
        type: Sequelize.INTEGER,
      },
      status_progress: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("progresses");
  },
};
