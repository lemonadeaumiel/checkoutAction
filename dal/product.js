"use strict";

const ProductModel = require("../models/product");
const DiscountModel = require("../models/discounts");
const db = require('../db');
const { DataTypes } = require('sequelize');
const Product = ProductModel(db, DataTypes);
const Discount = DiscountModel(db, DataTypes);

async function getProduct (watchIds){
  // Validate id
  if (Array.isArray(watchIds)) {
    watchIds = watchIds.join(",");

  } else if (!isNaN(parseInt(watchIds))) {
    watchIds = parseInt(watchIds);

  } else {
    return [];
  }

  let queryResult = await db.query(`SELECT p.*, d."minPurchase", d.discount FROM "Products" p LEFT JOIN "Discounts" d ON p.id = d."productId" WHERE p.id IN (${watchIds})`);

  return queryResult[0];
}

module.exports = {getProduct};