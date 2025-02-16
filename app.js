const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {

  User.findOne()
    .then(user => {
      if (!user) {
        
        return User.create({ name: 'Sumit Patil', email: 'sumit@test.com' });
      }
      return user;
    })
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
      next(); 
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });


sequelize
  .sync()
  .then(result => {
 
    return User.findOne();
  })
  .then(user => {
    if (!user) {
    
      return User.create({ name: 'Sumit Patil', email: 'sumit@test.com' });
    }
    return user;
  })
  .then(user => {
  
    return user.createCart();
  })
  .then(cart => {
    // Start the server once everything is set up
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch(err => {
    console.log(err);
  });
