var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'ulim',
  database : 'yeogida'
});
module.exports = connection;
