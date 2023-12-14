'use strict';

import { Sequelize } from 'sequelize';

const { Model } = require('sequelize');

export interface UserSchema {
  username?: string;
  email?: string;
  password?: string;
}

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: any }) => {
  class User extends Model {
    static associate(models: any) {
      // define association here
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
