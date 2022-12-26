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
    res.render('product-details-view', {
      product,
      href: '/products',
    });
  } catch (error) {
    console.log('Could not retrieve product')
    res.redirect('/')
  }
}

export async function getEditProduct(req: Request, res: Response, next: Function) {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  try {
    
    const productId = req.params.productId;
    if (!productId) {
      throw new Error("Product id should be added");
    }

    const product = await ProductsRepository.getInstance().findOne(productId)
    if (!product) {
      throw new Error("Cannot find product with id" + productId);
    }
    res.render('admin/edit-product', {
      product,
      href: '/edit-product',
      editMode: editMode,
    });
  } catch (error) {
    console.log(error)
      res.redirect('/')
  }
}

export async function editProduct(req: Request, res: Response, next: Function) {
  try {
    await ProductsRepository.getInstance().editProduct(new Product(
      req.body.productId,
      req.body.title,
      req.body.description,
      req.body.price,
      req.body.image
    ))
    
    res.redirect('/products');
  } catch (error) {
    console.log('Could not edit product' + error)
    res.redirect('/')
  }
}

export async function deleteProduct(req: Request, res: Response, next: Function) {
  try {
    const productId = req.body.productId;
    if (!productId) {
      throw new Error("Product id should be added");
    }

    const prod = await ProductsRepository.getInstance().findOne(productId)
    if (!prod) {
      throw new Error("Cannot find product with id " + productId);
    }

    await ProductsRepository.getInstance().deleteProduct(productId)

    res.redirect('/admin/products');
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

export function addProducts(req: Request, res: Response, next: Function) {
    res.render('admin/edit-product', { href: '/add-product' });
}

export async function getAdminProducts(req: Request, res: Response, next: Function) {
  try {
    const products = await ProductsRepository.getInstance().findAll()
    res.render('admin/admin-products', {
      href: '/admin/products',
      products,
    });
  } catch (error) {
    console.log('No Products')
    res.redirect('/')
  }
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
