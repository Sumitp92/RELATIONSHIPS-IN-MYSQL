const express = require('express');
const route = express.Router();
const contact= require('../controllers/products')
const success = require('../controllers/products')



route.get('/contactUs',contact.contactUs)
route.post('/success',success.successfull)



module.exports=route;