var chatroom = require('../config/database').chatroom;
var productinfo = require('../config/database').productinfo;

// 채팅 목록 조회 - 판매자
productinfo.belongsTo(chatroom,{targetKey:'productpid',foreignKey:'productpid'});
exports.getlist_seller = (personpid) => productinfo.findAll({
  attributes : ['productname'],
  where : personpid,
  include : {
    model : chatroom,
    attributes : ['roompid']
  }
}).then((data)=>{
  var result = [];
  for (var i=0;i<data.length;i++){
    var temp = data[i].dataValues;
    if (temp.chatroom != null){
        result[i] = {roompid : temp.chatroom.roompid, productname : temp.productname};
    }
  }
  return result;
})

// 채팅 목록 조회 - 구매자
chatroom.belongsTo(productinfo,{targetKey:'productpid',foreignKey:'productpid'});
exports.getlist_buyer = (personpid) => chatroom.findAll({
  attributes : ['roompid'],
  where : personpid,
  include : {
    model : productinfo,
    attributes : ['productname']
  }
}).then((data)=>{
  var result = [];
  for (var i=0;i<data.length;i++){
    var temp = data[i].dataValues;
    result[i] = {roompid : temp.roompid, productname : temp.productinfo.productname};
  }
  return result;
});
