'use strict';

const { Model, DataTypes } = require('sequelize');
const ProductModel = require("./product");
const db = require('../db');
const Product = ProductModel(db, DataTypes);

module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    static associate(models) {
      Discount.belongsTo(models.Product, {
        foreignKey: 'id',
        as: 'product',
        onDelete: 'CASCADE',
      });
    }
  }

  Discount.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: sequelize.models.Product,
        key: 'id'
      }
    },
    minPurchase: {
      type: DataTypes.INTEGER
    },
    discount: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Discount',
    tableName: 'Discounts',
    timestamps: false
  });

  return Discount;
}