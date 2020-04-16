var express=require('express');
var config=require('./config.js');
console.log(config);
var app=new express();
app.use(express.static('./page/'));
app.listen(config.port,function(){
    console.log('server start success');
});