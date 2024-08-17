const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.createProduct = (req, res) => {
    const newProduct = new Product(req.body);

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};
