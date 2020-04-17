var db=require('./DBUtil');
function insert(content,ctime,success){
    console.log(content,ctime);
    var sql="insert into everyday (`content`,`ct`) values (?,?)";
    var params=[content,ctime];
    var connection=db.connect();
    connection.connect();
    connection.query(sql,params,function(error,result){
        if(error==null){
            console.log('insert success',result);
            success(result);
        }else{
            //console.log(error);
            throw error;
        }
        connection.end();
    });
}
module.exports.insert=insert;