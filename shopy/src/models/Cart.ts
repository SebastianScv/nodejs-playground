import fs from 'fs';
import path from 'path';

const FILE_PATH = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

class CartRepository {
  getCart() {
    return new Promise((resolve, reject) => {
      
    });
  }

  async saveCart(cart: { products: any[]; totalPrice: number }) {
    
  }
}

export default class Cart {
  static async addProduct(id: string, productPrice: number) {
    
  }

  static async deleteProductFromCart(id: string, productPrice: number) {
    
  }
}
