'use strict';

const Product = require("../model/product");

async function addProduct(watchId, watchName, unitPrice) {
  try {
    const product = await Product.create({
      watchId: watchId,
      watchName: watchName,
      unitPrice: unitPrice
    });

  } catch (error) {
    return res.status(500).json({ status: "ERROR", message: error.message });
  }
}
