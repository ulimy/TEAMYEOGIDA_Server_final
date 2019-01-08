// 채팅방 속 내용 조회
var chatmessage = require('../config/database').chatmessage;

exports.getmessages = (roompid)=> chatmessage.findAll({
  attributes : {exclude : ['idx']},
  where : roompid
}).then((result)=>{
  return result;
}).catch((err)=>{
  throw err;
});
