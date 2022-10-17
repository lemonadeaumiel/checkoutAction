'use strict';

const { testing } = require("../config/config");
const { generateRandomString, generateRandomNumber } = require("../utils/random");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seeds = [];

    for(let i = 0; i < testing.seedAmount; i++) {
      const seedData = {
        name: generateRandomString(5),
        unitPrice: generateRandomNumber(),
      }

      seeds.push(seedData);
    }

    return queryInterface.bulkInsert("Products", seeds);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
