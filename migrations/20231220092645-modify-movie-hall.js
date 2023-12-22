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
    return Promise.all([
      await queryInterface.changeColumn("MovieHalls", "latitude" ,{
        type: Sequelize.FLOAT,
      }),

      await queryInterface.changeColumn("MovieHalls", "longitude" ,{
        type: Sequelize.FLOAT,
      }),
    ])
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      await queryInterface.changeColumn("MovieHalls", "latitude" ,{
        type: Sequelize.STRING,
      }),

      await queryInterface.changeColumn("MovieHalls", "longitude" ,{
        type: Sequelize.STRING,
      }),
    ])
    },
};
