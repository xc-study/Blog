var dao=require('../dao/EveryDao');
var timeUtil=require('../util/timeUtil');
var resqUtil=require('../util/respUtil');
var path=new Map();
function edit(req,res){
 req.on('data',function(data){
     console.log(data.toString());
     dao.insert(data.toString(),timeUtil.getNow(),function(result){
        res.writeHead(200);
        res.write(resqUtil.writeResult('success','添加成功',null));
        res.end();
     });
 });
}
path.set('/editEveryDay',edit);

module.exports.path=path;