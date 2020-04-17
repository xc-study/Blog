var express=require('express');
var config=require('./config.js');
var loader=require('./loader.js');
console.log(config);
var app=new express();
app.use(express.static('./page/'));
app.listen(config.port,function(){
    console.log('server start success');
});
console.log(loader);

try {
    app.post('/editEveryDay',loader.get('/editEveryDay'));
} catch (error) {
    console.log(error);
}
