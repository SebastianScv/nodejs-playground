const Product = require('../models/Product');

exports.getOverview = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('overview-products', {
      href: '/',
      products,
    });
  });
};
