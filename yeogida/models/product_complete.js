var productinfo=require('../config/database').productinfo;
var productsell=require('../config/database').productsell;
var productpurchase=require('../config/database').productpurchase;
var chatroom = require('../config/database').chatroom;

// productinfo update
exports.update_info = (roompid) => chatroom.findAll({
  where : {roompid:roompid},
  attributes : ['productpid','personpid']
}).then((data)=>{
  productpid = data[0].dataValues.productpid;
  personpid = data[0].dataValues.personpid;
  productpurchase.findOrCreate({where : {buyer_personpid:personpid,sold_productpid:productpid}});
  productinfo.update({checker:true},{where : {productpid : productpid }});
  productsell.update({checker:true},{where : {sell_productpid : productpid}});
});
