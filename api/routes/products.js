const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Welcome to GET Method!'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message: 'Welcome to POST Method!',
        createdProduct: product
    });
});

router.get('/:productID', (req, res, next) => {
    const productid = req.params.productID;
    if(productid === "special"){
        res.status(200).json({
            message: `You passed an id ${productid}`,
            id: productid
        });
    }
    else{
        res.status(200).json({
            hotdog: `You passed an id ${productid}`,
        });
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: `modified`
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: `deleted`
    });
});

module.exports = router;