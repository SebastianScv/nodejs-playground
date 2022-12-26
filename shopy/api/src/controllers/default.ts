import { Request, Response } from 'express';
import { ProductsRepository } from '../repositories/base/ProductsRepository';

export async function getOverview(req: Request, res: Response, next: Function) {
  try {
    const products = await ProductsRepository.getInstance().findAll()
    res.render('overview-products', {
      href: '/',
      products,
    });
  } catch (error) {
    console.log('No Products')
    res.redirect('/')
  }
}
