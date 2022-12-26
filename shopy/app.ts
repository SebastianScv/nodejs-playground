import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import { MySQLDatabase } from './src/repositories/databases/MySQLDatabase';
import { MongoDatabase } from './src/repositories/databases/MongoDatabase';
import { MySQLSequelizeDatabase } from './src/repositories/databases/MySQLSequelizeDatabase';
import { ProductsRepository } from './src/repositories/base/ProductsRepository';

// Repositories
// const database = new MySQLDatabase();
const database = new MongoDatabase();
ProductsRepository.setDatabase(database);

// // Controllers
import { get404 } from './src/controllers/error';

// // Routes
import adminProductRoutes from './src/routes/admin/product';
import productRoutes from './src/routes/product';


import defaultRoutes from './src/routes/default';
// import cartRoutes from './routes/cart';

// Express initialization
const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// // Routes middlewares
app.use(defaultRoutes);
app.use(productRoutes);
// app.use(cartRoutes);
app.use('/admin', adminProductRoutes);

// // Controllers middlewares
app.use('/', get404);


// Start app using MySQL Sequelize
// MySQLSequelizeDatabase.getSequelize().sync()
//   .then((result:any) => {
//     console.log(result)
//     app.listen(3000, () => {
//       console.log('Server started running on port 3000!');
//     });
//   })
//   .catch((err: any) => {
//     console.log(err)
//   })


app.listen(3000, () => {
  console.log('Server started running on port 3000!');
});

