var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var loginModel = require('../models/login');


async function findPid(login_info){
  try{
    var result=await loginModel.login(login_info);
  }
  catch(err){
    return (err);
  }
}

router.post('/',  function(req,res,next){

  // 로그인 정보 받아오기
  var phone = req.body.phone;
  var kakaonickname = req.body.kakaonickname;
  var email = req.body.email;
  var kakaopid = req.body.kakaopid;
  var login_info = [phone,kakaonickname,email,kakaopid];


  // 로그인정보 저장하고 personpid 가져오기
  var personpid = findPid(login_info);

  // 토큰 생성
  var secret = 'yeogida';
  var payLoad  = {personpid : personpid};
  var options = { algorithm : 'HS256'};
  var token = jwt.sign(payLoad,secret,options,function(err,token){
   if (err) throw err;
   //loginModel.savetoken(token);
 });
});


module.exports = router;
