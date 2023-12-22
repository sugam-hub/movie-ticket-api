'use strict';

import { Sequelize } from "sequelize";

const {
  Model
} = require('sequelize');

export interface UserDetailSchema {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  user_id?: string
}
module.exports = (sequelize: Sequelize, DataTypes: {[key: string]: any}) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.belongsTo(models.User, {
        source_key: "user_id",
        foreignKey: "id",
        as: "userdetail"
      })
    }
  }
  UserDetail.init({
    first_name: {
      type:  DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};