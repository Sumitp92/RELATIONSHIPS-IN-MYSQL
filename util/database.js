const Sequelize = require('sequelize');

const sequelize = new Sequelize('products', 'root', '876722', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
