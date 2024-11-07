const path = require('path');
const rootDir = require('../util/path');

exports.Error =((req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','Error.html'));
})