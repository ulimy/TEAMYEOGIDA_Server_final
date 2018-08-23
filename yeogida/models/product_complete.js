var productinfo=require('../config/database').productinfo;
var productsell=require('../config/database').productsell;
var productsold=require('../config/database').productsold;

// productinfo update
exports.update_info = (productpid) => productinfo.update({checker:true},{where : {productpid : productpid}});

//productsell update
exports.update_sell = (productpid) => productsell.update({checker:true},{where : {sell_productpid : productpid}}).then((err)=>{ if(err) console.error(err)});

//insert sold
exports.insert_sold = (productpid,personpid) => productsold.findOrCreate({where : {buyer_personpid:personpid,sold_productpid:productpid}});
