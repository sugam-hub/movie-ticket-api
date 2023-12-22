'use strict';

import { Sequelize } from "sequelize";

const {
  Model
} = require('sequelize');

export interface MovieHallSchema {
  hall_name?: string;
  latitude?: string;
  longitude?: string;
}
module.exports = (sequelize: Sequelize, DataTypes: {[key: string]: any}) => {
  class MovieHall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  MovieHall.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    hall_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'MovieHall',
  });
  return MovieHall;
};