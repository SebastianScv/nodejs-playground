import { Request, Response } from 'express';
import Cart from '../models/Cart';
import Product from '../models/Product';

export function getProducts(req: Request, res: Response, next: Function) {
  res.render('cart', { href: '/cart' });
}

export function addProduct(req: Request, res: Response, next: Function) {
  const prodId = req.body.productId;
  Product.findById(prodId, (product: { price: any; }) => {
    Cart.addProduct(prodId, product.price);
    res.redirect('/cart');
  });
}
