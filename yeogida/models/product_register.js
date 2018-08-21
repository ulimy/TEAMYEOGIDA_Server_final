
var productinfo=require('../config').productinfo;
var productsell=require('../config').productsell;

exports.register=(register_info) => productinfo.findOrCreate({
  where : register_info
}).spread((user)=>{
  return {sell_productpid : user.get().productpid, seller_personpid:user.get().personpid};
}).catch(function(err){
  throw err;
});

exports.insert_sell = (data) => productsell.findOrCreate({
  where : data
});
