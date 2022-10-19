const ProductController = require('../controllers/product');

async function checkoutProduct(req, res) {
  try {
    const { ids } = req.body;

    if (!ids) {
      return res.status(400).json({message: "Input of IDs is required."});
    }

    if (ids.length == 0) {
      return res.status(200).json({price: 0});
    }

    const price = await ProductController.calculatePrice(ids);

    return res.status(200).json({ price: price });
  } catch (error) {
    res.status(error.code || 500).json({
      status: "ERROR",
      message: error.message,
    });
  }
}

module.exports = { checkoutProduct };
