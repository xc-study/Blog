var fs=require('fs');
var config={};
var conf=fs.readFileSync('./server.conf');
console.log(conf.toString());
var arr=conf.toString().split('\r\n');
arr.forEach(e => {
    var item=e.split('=');
    config[item[0]]=item[1]
});
module.exports=config;
