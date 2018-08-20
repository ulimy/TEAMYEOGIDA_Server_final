var express = require('express');
var router = express.Router();

var loginModel = require('../models/login');

async function findPid(login_info){
  try{
    var result=await loginModel.login(login_info);

     console.log(result);
  }
  catch(err){
    return (err);
  }
}

router.post('/',  function(req,res,next){

  var phone = req.body.phone;
  var kakaonickname = req.body.kakaonickname;
  var kakaoPW = req.body.kakaoPW;
  var email = req.body.email;
  var kakaopid = req.body.kakaopid;

  var login_info = [phone,kakaonickname,kakaoPW,email,kakaopid];


  // models login으로 넘겨주기


  findPid(login_info);




});


module.exports = router;
