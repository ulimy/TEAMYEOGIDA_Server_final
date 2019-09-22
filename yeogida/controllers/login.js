var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/',function(req,res,next){
  var loginModel = require('../models/login');

  // 로그인 정보 받아오기
  var login_info = req.body;

  // 로그인정보 저장하고 personpid,kakaonickname 가져오기
  loginModel.login(login_info)
    .then(data=>{
      return {'personpid' : data.personpid , 'kakaonickname' : data.kakaonickname };
    })
    .then(data=>{
      // 토큰 생성
      var secret = 'yeogida';
      var payLoad  = {personpid : data.personpid};
      var options = { algorithm : 'HS256'};
      var token = jwt.sign(payLoad,secret,options,function(err,token){
       if (err) throw err;
       // 생성한 토큰 저장
       loginModel.savetoken(data.personpid,token);
     });
     res.json({personpid : data.personpid,kakaonickname:data.kakaonickname});
   })
   .catch(err => {
     console.error(err);
     res.json({message : "failed"});
   });
});


module.exports = router;
