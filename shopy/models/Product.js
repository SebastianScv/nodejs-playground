const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(
        JSON.parse(fileContent).map((product) => {
          return {
            ...product,
            image:
              product.image ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWFsNkpJdevmjMJyfLrecuvnMaXSNlssxbcfWMr-F&s',
            price: product.price,
          };
        })
      );
    }
  });
};

module.exports = class Product {
  constructor(title, description, price, image) {
    this.id = uuid.v4();
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((prod) => prod.id === id);
      cb(product);
    });
  }
};
