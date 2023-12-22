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
      await queryInterface.changeColumn('Users', 'password', {
        type: Sequelize.STRING,
        allowNull: true, 
        validate: {
          notNull: true,
          notEmpty: true,
        },
      }),
  
      await queryInterface.changeColumn('Users', 'email', {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
      }),
  
      await queryInterface.changeColumn('Users', 'username', {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          notNull: true,
          notEmpty: true,
        },
      })
    ])
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
