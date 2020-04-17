var fs=require('fs');
var config=require('./config');
var controllerSet=[];
var pathMap=new Map();
var files=fs.readdirSync(config.web_path);

for(var i=0;i<files.length;i++){
    var temp=require('./'+config.web_path+'/'+files[i]);
    if(temp.path){
        for(var [key,val] of temp.path){
            if(pathMap.get(key)==null){
                pathMap.set(key,val);
            }else{
                throw new Error("url path Exception url:"+key);
            }
        }
        controllerSet.push(temp); 
    }
}
module.exports=pathMap;