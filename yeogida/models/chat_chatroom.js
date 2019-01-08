// 채팅방 없으면 만들기
// roompid 돌려주기
var chatroom=require('../config/database').chatroom;

exports.getroompid=(roominfo) => chatroom.findOrCreate({
  attributes : ['roompid'],
  where : roominfo
}).then((result)=>{
  return {roompid : result[0].dataValues.roompid};
}).catch((err)=>{
  throw err;
});
