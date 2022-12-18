exports.getProducts = (req, res, next) => {
    res.render('cart', { href: '/cart' });
};

exports.addProduct = (req, res, next) => {
    console.log('addp');
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
};
