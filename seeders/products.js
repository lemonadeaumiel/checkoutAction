'use strict';

const { testing } = require("../config/config");
const { generateRandomString, generateRandomNumber } = require("../utils/random");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seeds = [{
      name: "Rolex",
      unitPrice: 100,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },{
      name: "Michael Kors",
      unitPrice: 80,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },{
      name: "Swatch",
      unitPrice: 50,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },{
      name: "Casio",
      unitPrice: 30,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

    return queryInterface.bulkInsert("Products", seeds).then(() => {
      let seeds = [{
        productId: 1,   
        minPurchase: 3,
        discount: 200,     
      },
      {
        productId: 2,
        minPurchase: 2,
        discount: 120,       
      }];

      return queryInterface.bulkInsert("Discounts", seeds);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
