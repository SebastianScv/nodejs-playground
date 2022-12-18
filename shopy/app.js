const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Controllers
const errorController = require('./controllers/error');

// Routes
const adminProductRoutes = require('./routes/admin/product');
const productRoutes = require('./routes/product');
const defaultRoutes = require('./routes/default');

// Express initialization
const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes middlewares
app.use(defaultRoutes);
app.use(productRoutes);
app.use('/admin', adminProductRoutes);

// Controllers middlewares
app.use('/', errorController.get404);

app.listen(3000, () => {
  console.log('Server started running on port 3000!');
});
