const path = require('path');
const rootDir = require('../util/path');

exports.addproduct =(req, res, next)=>{
    
    res.sendFile(path.join(rootDir,'views','addproduct.html'));
    
  
}

exports.productAdded=(req, res, next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','productAdded.html'));
    
}

exports.contactUs =(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
}

exports.successfull =(req,res)=>{
    res.sendFile(path.join(rootDir,'views','successfull.html'));
}

exports.shop=(req, res, next)=>{
    console.log("main page");
    res.sendFile(path.join(rootDir,'views','shop.html'));
}

exports.Error=(req,res)=>{
    res.sendFile(path.join(__dirname,'./','views','Error.html'));
}