var express = require('express');
var router = express.Router();

var login = require('../models/login');

router.post('/',function(req,res){

  var phone = req.body.phone;
  var kakaonickname = req.body.kakaonickname;
  var kakaoPW = req.body.kakaoPW;
  var email = req.body.email;
  var kakaopid = req.body.kakaopid;

  var login_info = [phone,kakaonickname,kakaoPW,email,kakaopid];


  // models login으로 넘겨주기
  var personpid = login(login_info);
  // console.log(personpid);

  // 토큰으로 만들어서 응답
  // var token = jwt.sign(payLoad,secret,options,function(err,token){
  //   if (err) throw err;
  //
  //   });

});


module.exports = router;
