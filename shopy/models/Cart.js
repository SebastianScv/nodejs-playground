const cartProducts = [];

module.exports = class Cart {
  constructor() {}

  addProductToCart(product) {
    cartProducts.push(product);
  }

  static fetchAllCartProducts() {
    return cartProducts;
  }
};
