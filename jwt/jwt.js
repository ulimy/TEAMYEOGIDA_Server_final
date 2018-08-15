var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 토큰만들기
  var secret = 'yeogida';
  var payLoad  = {'uid':14554};
  var options = { algorithm : 'HS256'};
  var token = jwt.sign(payLoad,secret,options,function(err,token){
    if (err) throw err;
    jwt.verify(token,secret,function(err,decoded){
      if (err) throw err;
      console.log(decoded.uid);
    });
  });
});

module.exports = router;
