const Product = require('../models/Product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('products', {
            href: '/products',
            products,
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, (product) => {
        res.render('product-details-view', {
            product,
            href: '/products',
        });
    });
};

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
};

exports.addProducts = (req, res, next) => {
    res.render('admin/addProducts', { href: '/add-product' });
};

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/admin-products', {
            href: '/admin/products',
            products,
        });
    });
};

exports.registerProduct = (req, res, next) => {
    const product = new Product(
        req.body.title,
        req.body.description,
        req.body.price
    );
    product.save();
    res.redirect('/');
};
