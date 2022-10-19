const db = require("../../db");
const { calculatePrice, countIdsOccurrences } = require('../../controllers/product');

describe('countIdsOccurrences test', () => {
  it('Should count how many times an ID appeared in the input', async () => {
      let input = [1, 1, 1, 2, 2, 3];
      let expectedCount = {
        1: 3, 
        2: 2, 
        3: 1
      };

      testCountIdsOccurrences(input, expectedCount);
  });

  it('Should throw an error if an item in the input is not an integer', async () => {
    let input = ["asdf", 1, 1, 2, 2, 3];

    expect(() => countIdsOccurrences(input).toThrow())
  });

  it('Should throw an error if passing a non array as an input', async () => {
    let input = 1;
    expect(() => countIdsOccurrences(input).toThrow())
  });

  it('Should throw an error if no input is given', async () => {
    expect(() => countIdsOccurrences().toThrow())
  });
})

function testCountIdsOccurrences(input, expectedCount) {
  const occurrences = countIdsOccurrences(input);

  Object.entries(occurrences).forEach(([id, occurrence]) => {
    expect(occurrence).toBe(expectedCount[id]);
  });
}