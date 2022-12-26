import { Request, Response } from 'express';
import Product from '../models/Product';

export function getOverview(req: Request, res: Response, next: Function) {
  Product.fetchAll((products: any) => {
    res.render('overview-products', {
      href: '/',
      products,
    });
  });
}
