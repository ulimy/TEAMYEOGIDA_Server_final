var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'yeogida.cbdgg8cil0ro.ap-southeast-1.rds.amazonaws.com',
  user : 'moonsun',
  password : '201611070',
  database : 'yeogida'
});
module.exports = connection;
