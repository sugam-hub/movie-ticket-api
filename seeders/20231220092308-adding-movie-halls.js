'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("MovieHalls", [{
      hall_name: "Five Star Cinema Hall",
      latitude: 27.72036085,
      longitude: 85.31476885,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    hall_name: "Ganga Hall",
    latitude: 27.73238,
    longitude: 85.30495,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hall_name: "Jai Nepal Cinema Hall",
    latitude: 27.71346,
    longitude: 85.3216692,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    hall_name: "Asta Narayan Pictures Pvt Ltd",
    latitude:  27.711234,
    longitude: 85.315388,
    createdAt: new Date(),
    updatedAt: new Date()
  },
])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MovieHalls", null,  {})
  }
};
