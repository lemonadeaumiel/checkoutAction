const router = require("express").Router();
const CheckoutView = require('../view/product');

router.post('/checkout', CheckoutView.checkoutProduct);

module.exports = router;