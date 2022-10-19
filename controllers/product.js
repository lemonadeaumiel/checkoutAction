const { getProduct } = require("../dal/product");

async function calculatePrice(ids) {
  // Calculate how many times a product with specific id is bought
  let occurrences = countIdsOccurrences(ids);

  let productReference = await getProduct(ids);

  if (!productReference) {
    return res.status(404).send("Product not found");
  }

  let sum = 0;
  
  for (let i = 0; i < productReference.length; i++) {
    let currentProduct = productReference[i];

    // If a discount is found for the product then calculate how many times the discount is applied
    // and calculate the remaining non discounted amount with the normal unit price else simply calculate amount by unit price
    if (currentProduct.discount) {
      let timesDiscountApplied = Math.floor(occurrences[currentProduct.id] / currentProduct.minPurchase);
      let nonDiscountAmount = occurrences[currentProduct.id] % currentProduct.minPurchase;

      sum += (timesDiscountApplied * currentProduct.discount) + nonDiscountAmount * currentProduct.unitPrice;
    } else {
      sum += occurrences[currentProduct.id] * currentProduct.unitPrice;
    }
  }

  return sum;
}

function countIdsOccurrences(ids) {
  let occurrences = {};

  if (!Array.isArray(ids)) {
    throw {code: 400, message: "Invalid ids, ids should be an array of item id."};
  }

  ids.forEach((id) => {
    if (isNaN(parseInt(id))) {
      throw {code: 400, message: "Invalid id, id must be an integer"};
    }

    if (!occurrences[id]) {
      let count = ids.filter((filteredId) => filteredId === id).length;
      occurrences[id] = count;
    }
  });

  return occurrences;
}

module.exports = { calculatePrice, countIdsOccurrences };
