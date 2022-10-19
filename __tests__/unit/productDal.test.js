const db = require("../../db");
const { getProduct } = require('../../dal/product');

describe('DAL Test', () => {
  it('Should fetch items with IDs that is within the given array of IDs', async () => {
      let input = [1, 2, 3];
      await testIds(input, expectTypes.includes);
  });

  it('Should fetch items successfully if given an input with just id', async () => {
    let input = 1;
    await testIds(input, expectTypes.includes);
  }); 

  it('Should not return anything if the given id does not exist', async () => {
    let input = 100;

    const fetchedProducts = await getProduct(input);
    expect(fetchedProducts.length).toBe(0);
  });

  it('Should not return anything if the given id does not exist and is not an integer', async () => {
    let input = "asdf";

    const fetchedProducts = await getProduct(input);
    expect(fetchedProducts.length).toBe(0);
  });
})

const expectTypes = {
  includes: 'includes',
  notIncludes: 'notIncludes'
}

async function getIds(input) {
  const fetchedProducts = await getProduct(input);
  const fetchedIds = fetchedProducts.map(product => product.id);

  return fetchedIds;
}

async function testIds(input, expectType) {
  fetchedIds = await getIds(input);

  switch (expectType) {
    case expectTypes.includes:
      if (Array.isArray(input)) {
        input.forEach(id => {
          expect(fetchedIds).toContain(id);
        });
      } else {
        expect(fetchedIds).toContain(input);
      }
      break;
    case expectTypes.notIncludes:
      if (Array.isArray(input)) {
        input.forEach(id => {
          expect(fetchedIds).not.toContain(id);
        });
      } else {
        expect(fetchedIds).not.toContain(input);
      }
      break;
    default:
      throw new Error("testIds: Unsupported expectType");      
  }
  
}