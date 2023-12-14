'use strict';

import { Sequelize } from "sequelize";

const {
  Model
} = require('sequelize');

export interface TicketSchema {
  seat_number?: string;
  date?: string;
  time?: string;
  price?: string;
  customer_id?: string;
}
module.exports = (sequelize: Sequelize, DataTypes: {[key: string]: any}) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.belongsTo(models.User, {
        source_key: "customer_id",
        foreignKey: "id",
        as: "customer"
      })
    }
  }
  Ticket.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    seat_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};