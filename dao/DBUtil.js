var mysql=require('mysql');
function createConnection(){
    return mysql.createConnection({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'111111a,',
        database:'blog'
    });
}
module.exports.connect=createConnection;