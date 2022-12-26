import { Request, Response } from 'express';
import Product from '../models/Product';
import { ProductsRepository } from '../repositories/base/ProductsRepository';

export async function getProducts(req: Request, res: Response, next: Function) {
  const products = await ProductsRepository.getInstance().findAll()

  res.render('products', {
    href: '/products',
    products,
  });
}

export async function getProduct(req: Request, res: Response, next: Function) {
  const prodId = req.params.productId;
  try {
    const product = await ProductsRepository.getInstance().findOne(prodId)
    console.log(prodId, product)
    res.render('product-details-view', {
      product,
      href: '/products',
    });
  } catch (error) {
    console.log('Could not retrieve product')
    res.redirect('/')
  }
}

export function getEditProduct(req: Request, res: Response, next: Function) {
  // const editMode = req.query.edit;
  // if (!editMode) {
  //   return res.redirect('/');
  // }

  // const prodId = req.params.productId;
  // Product.findById(prodId, (product: any) => {
  //   if (!product) {
  //     return res.redirect('/');
  //   }
  //   res.render('admin/edit-product', {
  //     product,
  //     href: '/edit-product',
  //     editMode: editMode,
  //   });
  // });
}

export async function editProduct(req: Request, res: Response, next: Function) {
  try {
    await ProductsRepository.getInstance().createProduct(new Product(
      req.body.productId,
      req.body.title,
      req.body.description,
      req.body.price,
      req.body.image
    ))
    
    res.redirect('/products');
  } catch (error) {
    console.log('Could not create product')
    res.redirect('/')
  }
}

export function deleteProduct(req: Request, res: Response, next: Function) {
  // const productId = req.body.productId;
  // if (productId) {
  //   Product.delete(productId, (err: any) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       // CartService.deleteProductFromCart(productId);
  //       res.redirect('/admin/products');
  //     }
  //   });
  // } else {
  //   res.redirect('/admin/products');
  // }
}

export function addProducts(req: Request, res: Response, next: Function) {
    res.render('admin/edit-product', { href: '/add-product' });
}

export function getAdminProducts(req: Request, res: Response, next: Function) {
  // Product.fetchAll((products: any) => {
  //   res.render('admin/admin-products', {
  //     href: '/admin/products',
  //     products,
  //   });
  // });
}

export async function registerProduct(req: Request, res: Response, next: Function) {
  try {
    await ProductsRepository.getInstance().createProduct(new Product(
      null,
      req.body.title,
      req.body.description,
      req.body.price,
      req.body.image
    ))
    
    res.redirect('/products');
  } catch (error) {
    console.log('Could not create product')
    res.redirect('/')
  }
}
