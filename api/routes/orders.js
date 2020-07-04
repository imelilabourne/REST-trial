const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Order were fetched"
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(200).json({
        message: "Order were Posted",
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: `order number ${req.params.orderId} was fetched`
    });
});

module.exports = router;