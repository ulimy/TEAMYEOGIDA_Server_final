//넘겨받은 json에서 userpid 검색
var profile = require("../config/database").profile;
//var mysql= require("mysql");

exports.login = (login_info) => profile.findOrCreate({

  // 카카오 피드가 같다면 같은 사용자로 인식
  defaults : login_info,
  where : {kakaopid : login_info.kakaopid}

}).then((data,created) =>{

  var result = data[0].dataValues;

  return result;

});

exports.savetoken = (personpid,token) =>profile.update({token : token},
  {where : {personpid : personpid}}
);
